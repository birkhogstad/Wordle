
sort = [ [],[],[] ]
test = 0
with open("words.txt", "r") as input:
    for word in input:

        c = word.strip()
        print(test)
        test = test + 1


        if len(c) <= 7 and len(c) >= 5:
            sort[len(c) - 5].append(c)

for i in sort:
    print(len(i))

for i in range(0, 3):
    l = str(i + 5) + ".txt"
    f = open(l, "w")
    for word in sort[i]:
        f.write(word + "\n")
    f.close()



    