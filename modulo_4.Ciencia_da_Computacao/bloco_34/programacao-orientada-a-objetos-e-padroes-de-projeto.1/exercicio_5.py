class Television:
    def __init__(self):
        self.on = False
        self.volume = 5
        self.channel = 1

    def turn_on_or_turn_off(self):
        self.on = not self.on

    def turn_up_volume(self):
        self.volume += 1

    def turn_down_volume(self):
        self.volume -= 1

    def change_channel(self, new_channel):
        self.channel = new_channel
