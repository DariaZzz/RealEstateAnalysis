from flask import Flask, jsonify, request
from sqlalchemy import select, join, func, and_, label
from database.models import underground_stations_table
from database.models import underground_lines_table
from database.models import flats_table, housing_types_table, move_types_table, urls_table, costs_table
from database.database import engine


app = Flask(__name__)


@app.route('/api/metro-stations', methods=['GET'])
def get_metro_stations():
    with engine.connect() as conn:
        j = join(underground_stations_table,
                 underground_lines_table,
                 underground_stations_table.c.line_id == underground_lines_table.c.id)

        query = select(
            underground_stations_table.c.id,
            underground_stations_table.c.name,
            underground_lines_table.c.color
        ).select_from(j)

        data = conn.execute(query)
        data = [{
            "stationName": row.name,
            "stationId": row.id,
            'stationLineColor': row.color
        } for row in data.all()]
    return jsonify(data)


def get_costs(flats_id):
    with engine.connect() as conn:
        subq = (
            select(
                costs_table.c.flat_id,
                func.max(costs_table.c.date_of_parsing).label("last_date")
                ).where(costs_table.c.flat_id.in_(flats_id)
                ).group_by(costs_table.c.flat_id
                ).subquery()
            )

        query = (select(
                costs_table.c.id,
                costs_table.c.current_cost,
                costs_table.c.flat_id)
            .join(subq,
                  and_(
                costs_table.c.flat_id == subq.c.flat_id,
                costs_table.c.date_of_parsing == subq.c.last_date)
            )
        )

        data = conn.execute(query)
        costs_data = {}
        for row in data:
            costs_data[row.flat_id] = row.current_cost
    return costs_data



@app.route('/api/flats/', methods=['GET'])
def get_flats():
    metro_stations = list(map(int, request.args.get('metro_stations').split(',')))
    with engine.connect() as conn:
        j = join(flats_table,
                 underground_stations_table,
                 flats_table.c.underground_id == underground_stations_table.c.id
        ).join(
            underground_lines_table,
            underground_stations_table.c.line_id == underground_lines_table.c.id
        ).join(
            urls_table,
            flats_table.c.url_id == urls_table.c.id
        ).join(
            housing_types_table,
            housing_types_table.c.id == flats_table.c.housing_type_id
        ).join(
            move_types_table,
            move_types_table.c.id == flats_table.c.move_type_id
        )

        query = select(
            flats_table.c.id,
            flats_table.c.address,
            flats_table.c.number_of_rooms,
            flats_table.c.total_area,
            flats_table.c.living_area,
            flats_table.c.kitchen_area,
            flats_table.c.floor,
            flats_table.c.year,
            flats_table.c.move_time,
            underground_lines_table.c.color,
            underground_stations_table.c.id.label('station_id'),
            urls_table.c.url,
            housing_types_table.c.name.label('housing_type'),
            move_types_table.c.name.label('move_type')
        ).select_from(j)

        if metro_stations:
            query = query.where(underground_stations_table.c.id.in_(metro_stations))

        data = list(conn.execute(query))
        flats_id = [flat.id for flat in data]
        costs = get_costs(flats_id)
        print(type(costs))
        data = [{
            "flatId": row.id,
            "living_area": row.living_area,
            "total_area": row.total_area,
            "kitchen_area": row.kitchen_area,
            "url": row.url,
            "stationId": row.station_id,
            "travel_type": row.move_type,
            "travel_time": row.move_time,
            "price": costs[row.id],
            "address": row.address,
            "floor": row.floor,
            'number_of_rooms': row.number_of_rooms,
            'cost': costs[row.id]
        } for row in data]
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
