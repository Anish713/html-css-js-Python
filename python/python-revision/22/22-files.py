import os
# r = Read
# a = Append
# w = Write
# x = Create

# Read - error if it doesn't exist

f = open("22-names.txt")
# print(f.read())
# print(f.read(4))

# print(f.readline())
# print(f.readline())

for line in f:
    print(line)

f.close()

try:
    f = open("22-names.txt")
    print(f.read())
except:
    print("The file you want to read doesn't exist")
finally:
    f.close()

# Append - creates the file if it doesn't exist
f = open("22-names.txt", "a")
f.write("Neil\n")
f.close()

f = open("22-names.txt")
print(f.read())
f.close()

# Write (overwrite)
f = open("22-context.txt", "w")
f.write("I deleted all of the context")
f.close()

f = open("22-context.txt")
print(f.read())
f.close()

# Two ways to create a new file

# Opens a file for writing, creates the file if it does not exist
f = open("name_list.txt", "w")
f.close()

# Creates the specified file, but returns an error if the file exists
if not os.path.exists("anish.txt"):
    f = open("dave.txt", "x")
    f.close()

# Delete a file

# avoid an error if it doesn't exist
if os.path.exists("anish.txt"):
    os.remove("anish.txt")
else:
    print("The file you wish to delete does not exist")


# with has built-in implicit exception handling
# close() will be automatically called
with open("22-more_names.txt") as f:
    content = f.read()

with open("22-names.txt", "w") as f:
    f.write(content)
