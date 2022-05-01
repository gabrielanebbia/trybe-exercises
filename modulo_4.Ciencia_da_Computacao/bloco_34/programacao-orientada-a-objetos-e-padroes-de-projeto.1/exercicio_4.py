class Item:
    def __init__(self, name, price, product_quantity):
        self.name = name
        self.price = price
        self.product_quantity = product_quantity

    def change_price(self, new_price):
        self.price = new_price

    def change_quantity(self, new_product_quantity):
        self.product_quantity = new_product_quantity


class Request:
    def __init__(self, customer, requested_itens, payment_type):
        self.customer = customer
        self.requested_itens = requested_itens
        self.payment_type = payment_type

    def calculate_total(self):
        total = 0
        for item in self.requested_itens:
            total = total + item.price
        return total
