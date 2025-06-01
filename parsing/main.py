from database.core import process_flats_dict
from parsing.Parser import Parser


'''
основной файл для парсинга
'''
parser = Parser()
parser.parse_pages(5, logging=True)
process_flats_dict(parser.flat_dict)
