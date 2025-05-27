from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey

metadata_obj = MetaData()


underground_lines_table = Table(
    "underground_line",
    metadata_obj,
    Column("id", Integer, primary_key=True),
    Column("name", String),
    Column("color", String)
)

underground_stations_table = Table(
    "underground_station",
    metadata_obj,
    Column("id", Integer, primary_key=True),
    Column("name", String),
    Column("line_id", Integer, ForeignKey("underground_line.id"))
)

flats_table = Table(
    "flat",
    metadata_obj,
    Column("id", Integer, primary_key=True),
    Column("underground_id", Integer, ForeignKey("underground_station.id")),
    Column("url_id", Integer, ForeignKey("url.id")),
    Column("address", String),
    Column("number_of_rooms", Integer),
    Column("total_area", Integer),
    Column("living_area", Integer),
    Column("kitchen_area", Integer),
    Column("floor", String),
    Column("housing_type_id", Integer, ForeignKey("housing_type.id")),
    Column("year", Integer),
    Column("move_type_id", Integer, ForeignKey("move_type.id")),
    Column("move_time", String)
)

housing_types_table = Table(
    "housing_type",
    metadata_obj,
    Column("id", Integer, primary_key=True),
    Column("name", String)
)

move_types_table = Table(
    "move_type",
    metadata_obj,
    Column("id", Integer, primary_key=True),
    Column("name", String)
)

urls_table = Table(
    "url",
    metadata_obj,
    Column("id", Integer, primary_key=True),
    Column("url", String)
)

costs_table = Table(
    "cost",
    metadata_obj,
    Column("id", Integer, primary_key=True),
    Column("current_cost", Integer),
    Column("date_of_parsing", String),
    Column("flat_id", Integer, ForeignKey("flat.id"))
)