def get_biggest_word(name_list):
    biggest_word = ''
    for name in name_list:
        if len(name) > len(biggest_word):
            biggest_word = name
    return biggest_word

print(get_biggest_word(["nome", "lista", "palavra"]))