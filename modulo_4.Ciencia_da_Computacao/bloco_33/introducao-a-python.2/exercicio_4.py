import json


def get_books_in_json_file(file_path):
    with open(file_path) as file:
        return [json.loads(book) for book in file]


def count_books_by_categories(books):
    categories = {}

    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


if __name__ == "__main__":
    books = get_books_in_json_file("exercicio_4.json")
    books_by_categories = count_books_by_categories(books)
    print(books_by_categories)
