class Television:
    def __init__(self):
        self.__volume = 50
        self.__channel = 1
        self.__on = False

    def turn_on_turn_off(self):
        self.__on = not self.__on

    def turn_up_volume(self):
        if self.__volume <= 99:
            self.__volume += 1

    def turn_down_volume(self):
        if self.__volume >= 0:
            self.__volume -= 1

    def change_channel(self, new_channel):
        if new_channel <= 1 or new_channel >= 99:
            raise ValueError('Canal indisponível')
        self.__channel = new_channel
