def counter(string):
    count = {}
    for word in set(string):
        count[word] = string.count(word)
    return count


def main():
    string = input("Enter a string: ")
    print(counter(string))


if __name__ == "__main__":
    main()


# ## bajra.js
# function counter(string) {
#     const count = {};
#     const uniqueChars = new Set(string);

#     uniqueChars.forEach(char => {
#         count[char] = string.split(char).length - 1;
#         console.log(char, string.split(char) )
#     });

#     return count;
# }

# function main() {
#     const string = "pragyaanish";
#     console.log(counter(string));
# }

# main();
