import json


def get_books_in_json_file(file_path):
    with open(file_path) as file:
        return [json.loads(book) for book in file]


if __name__ == "__main__":
    books = get_books_in_json_file("exercicio_4.json")
