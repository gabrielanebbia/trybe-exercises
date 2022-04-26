class MainMemory:
    def __init__(self):
        self.clean()

    def load(self, value):
        ...

    def get(self, index):
        ...

    def clean(self):
        self.loaded_memory = []
