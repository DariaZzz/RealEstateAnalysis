# from make_json import make_json
from Parser import Parser

parser = Parser()
parser.parse_pages(1, logging=True)
print(parser.flat_dict)
# make_json(parser.flat_dict)
