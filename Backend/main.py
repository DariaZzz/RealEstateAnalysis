from flask import Flask, jsonify
from sqlalchemy import select, join
from database.models import underground_stations_table
from database.models import underground_lines_table
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


if __name__ == '__main__':
    app.run(debug=True)
