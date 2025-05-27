# from database.core import process_flat_data, process_flats_dict
from Parser import Parser

# docker-compose build parser
# docker-compose up -d parser

parser = Parser()
parser.parse_pages(1, logging=True)
# process_flats_dict(parser.flat_dict)
# print(parser.flat_dict)
# make_json(parser.flat_dict)
