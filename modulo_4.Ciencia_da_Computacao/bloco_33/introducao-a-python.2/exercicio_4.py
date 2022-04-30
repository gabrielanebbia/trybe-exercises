import json
import csv


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


def calculate_percentage_by_category(books_by_categories, total_books):
    percentage = []
    for category, total_category in books_by_categories.items():
        percentage_by_category = total_category / total_books
        percentage.append([category, percentage_by_category])
    return percentage


def write_percentage_in_csv_file(file_path, books_percentagem):
    header = ["categoria", "porcentagem"]

    with open(file_path, "w") as file:
        writer = csv.writer(file)
        writer.writerow(header)
        writer.writerows(books_percentagem)


if __name__ == "__main__":
    books = get_books_in_json_file("exercicio_4.json")
    books_by_categories = count_books_by_categories(books)
    total_books = len(books)
    percentagem_rows = calculate_percentage_by_category(
        books_by_categories, total_books
    )
    write_percentage_in_csv_file("percentage.csv", percentagem_rows)
