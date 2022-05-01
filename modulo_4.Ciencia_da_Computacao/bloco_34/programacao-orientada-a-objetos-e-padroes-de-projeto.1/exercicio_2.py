class Rectangle:
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def calculate_area(self):
        area = self.base * self.height
        return area

    def calculate_perimeter(self):
        perimeter = self.base * 2 + self.height * 2
        return perimeter
