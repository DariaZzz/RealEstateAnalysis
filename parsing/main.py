from database.core import process_flats_dict
from parsing.Parser import Parser

# docker-compose build parser
# docker-compose up -d parser

parser = Parser()
parser.parse_pages(1, logging=True)
process_flats_dict(parser.flat_dict)
