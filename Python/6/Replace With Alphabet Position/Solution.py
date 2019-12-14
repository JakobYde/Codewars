#Good code
def alphabet_position(text):
    res = ""
    for letter in text.lower():

        letter_ascii_value = ord(letter)
        is_letter = 96 < letter_ascii_value and letter_ascii_value < 123

        if is_letter:
            res += str(letter_ascii_value - 96) + " "

    return res[:-1]

'''
#Oneliner
def alphabet_position(text):
    return " ".join(str(ord(letter.lower()) - 96) for letter in text if 96 < ord(letter.lower()) < 123)
'''