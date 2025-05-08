from make_json import make_json
from Parsing.Parser import Parser

parser = Parser()
parser.parse_pages(1)
make_json(parser.flat_dict)
