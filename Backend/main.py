from flask import Flask, jsonify, request
from sqlalchemy import select, join
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


def get_costs():
    with engine.connect() as conn:
       pass
    pass



@app.route('/api/flats/', methods=['GET'])
def get_flats():
    metro_stations = list(map(int, request.args.get('metro_stations').split(',')))
    print(metro_stations)
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
            underground_lines_table.c.color,
            underground_stations_table.c.id.label('station_id'),
            urls_table.c.url,
            housing_types_table.c.name.label('housing_type'),
            move_types_table.c.name.label('move_type')
        ).select_from(j)

        if metro_stations:
            query = query.where(underground_stations_table.c.id.in_(metro_stations))

        data = conn.execute(query)
        data = [{
            "url": row.url,
            "stationId": row.id,
            "under_id": row.station_id,
            'number_of_rooms': row.number_of_rooms
        } for row in data.all()]
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
