class Circle:
    PI = 3.1415

    def __int__(self, raio):
        self.raio = raio

    def calculate_area(self):
        area = self.PI * self.raio * self.raio
        return area

    def calculate_perimeter(self):
        perimeter = 2 * self.PI * self.raio
        return perimeter
