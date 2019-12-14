def iq_test(numbers):
    numbers = [int(number) for number in numbers.split(' ')]
    if len(numbers) > 2:
        for i in range(1, len(numbers) - 1):
            if numbers[i] % 2 != numbers[i - 1] % 2:
                if numbers[i] % 2 != numbers[i + 1] % 2:
                    return i + 1
                else: 
                    return i
            elif numbers[i] % 2 != numbers[i + 1] % 2:
                    return i + 2
    else:
        return -1