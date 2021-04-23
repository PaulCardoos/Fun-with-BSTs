class Node: 
    def __init__(self, val):
        self.val = val
        self.next = None

class MyLinkedList:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.head = None
        self.tail = None
        self.size = 0
        

    def get(self, index: int) -> int:
        """
        Get the value of the index-th node in the linked list. If the index is invalid, return -1.
        """
        current = self.head

        if index >= self.size or index < 0: 
            return -1
        elif index == 0: 
            return current.val 
        else: 
            for i in range(0, index):
                current = current.next
            return current.val

    def addAtHead(self, val: int) -> None:
        """
        Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
        """
        current = self.head

        newNode = Node(val)
        
        if current == None: 
            current = newNode
            self.size += 1
            self.tail = current
            
        else: 
            newNode.next = current
            current = newNode
            self.size += 1
        
        self.head = current
        

    def addAtTail(self, val: int) -> None:
        """
        Append a node of value val to the last element of the linked list.
        """
        current = self.tail

        newNode = Node(val)
        
        if current == None:
            self.head = newNode
            self.tail = newNode
            self.size += 1
            return
        else: 
            current.next = newNode
            current = newNode
            self.size += 1 

        self.tail = current
        

    def addAtIndex(self, index: int, val: int) -> None:
        """
        Add a node of value val before the index-th node in the linked list. 
        If index equals to the length of linked list, the node will be appended 
        to the end of linked list. If index is greater than the length, the node will not be inserted.
        """
        if index > self.size: 
            return 
        
        if index == self.size: 
            self.addAtTail(val)
            return
        elif index == 0: 
            self.addAtHead(val)
            return
        else:
            current = self.head

            for i in range(0, index - 1):
                current = current.next 
        
            newNode = Node(val)
            self.size += 1

            newNode.next = current.next
            current.next = newNode
        
            
            return 

        

    def deleteAtIndex(self, index: int) -> None:
        """
        Delete the index-th node in the linked list, if the index is valid.
        """

        if index < 0 or index >= self.size:
            return 

        current = self.head
        
        if index == 0:
            self.size -= 1
            self.head = current.next
            return 
        else: 
            for i in range(0, index - 1):
                current = current.next
            
            if index == self.size - 1:
                self.size -= 1
                self.tail = current
                current.next = None
                return

            self.size -= 1
            current.next = current.next.next
            return



    def printList(self):
        current = self.head
        while(current!= None):
            if current.next == None:
                print(current.val)
            else:
                print(current.val, end=" -> ") 
            current = current.next    


obj = MyLinkedList()
obj.addAtHead(24)
print(obj.get(1))
obj.addAtTail(18)
obj.deleteAtIndex(1)
obj.printList()
print(obj.size)
obj.get(1)
# obj.addAtTail(30)
# obj.get(2)
# obj.deleteAtIndex(1)
# obj.printList()
# obj.addAtHead(3)
# obj.addAtHead(3)
# obj.addAtHead(33)
# obj.addAtHead(97)
# obj.addAtTail(43)
# obj.addAtTail(12)
# obj.addAtTail(10)
# obj.deleteAtIndex(1)
# obj.addAtIndex(1,56)

# obj.addAtHead(30)
# obj.addAtIndex(8,83)

# obj.addAtTail(57)
# obj.addAtHead(74)
# obj.get(5)
# obj.addAtHead(98)
# obj.addAtTail(72)
# obj.addAtHead(34)
# obj.addAtHead(61)
# obj.get(6)
# obj.addAtHead(70)
# obj.addAtHead(24)
# obj.addAtTail(91)
# obj.addAtHead(99)
# obj.addAtTail(13)
# obj.addAtTail(10)
# obj.deleteAtIndex(17)
# obj.addAtTail(84)
# obj.deleteAtIndex(16)
# obj.addAtHead(73)
# obj.addAtTail(88)
# obj.addAtIndex(4,19)
# obj.addAtHead(59)
# obj.addAtTail(41)
# obj.addAtHead(57)
# obj.deleteAtIndex(10)
# obj.deleteAtIndex(18)
# obj.addAtHead(2)
# obj.addAtTail(12)
# obj.addAtTail(25)
# obj.addAtHead(1)
# obj.addAtHead(77)
# obj.get(1)
# obj.deleteAtIndex(7)
# obj.addAtHead(34)
# obj.addAtTail(87)
# obj.deleteAtIndex(13)
# obj.addAtTail(4)
# obj.addAtTail(12)
# obj.addAtTail(11)
# obj.addAtIndex(10,92)
# obj.addAtIndex(21,55)
# obj.get(11)
# obj.addAtTail(38)
# obj.addAtTail(31)
# obj.addAtHead(45)
# obj.addAtTail(4)
# obj.addAtTail(21)
# obj.addAtHead(38)
# obj.get(4)
# obj.addAtTail(88)
# obj.get(12)
# obj.deleteAtIndex(22)
# obj.addAtHead(40)
# obj.addAtHead(22)
# obj.addAtHead(23)
# obj.addAtIndex(13,96)
# obj.addAtIndex(24,50)
# obj.deleteAtIndex(8)
# obj.get(14)
# obj.addAtTail(25)
# obj.addAtTail(53)
# obj.addAtHead(42)
# obj.get(6)
# obj.addAtHead(58)
# obj.addAtTail(55)
# obj.addAtIndex(18,72)
# obj.deleteAtIndex(13)
# obj.addAtHead(30)
# obj.addAtHead(97)
# obj.addAtTail(59)
# obj.get(47)
# obj.deleteAtIndex(24)
# obj.addAtHead(37)
# obj.addAtTail(26)
# obj.addAtTail(31)
# obj.addAtHead(93)
# obj.addAtHead(66)
# obj.deleteAtIndex(11)
# obj.get(43)
# obj.addAtHead(70)
# obj.addAtTail(36)
# obj.addAtHead(31)
# obj.addAtTail(28)




# x = ["MyLinkedList","addAtHead","get","addAtTail","deleteAtIndex","get","addAtTail","get","deleteAtIndex","addAtHead","addAtHead","addAtHead","addAtHead","addAtTail","addAtTail","addAtTail","deleteAtIndex","addAtIndex","addAtHead","addAtIndex","addAtTail","addAtHead","get","addAtHead","addAtTail","addAtHead","addAtHead","get","addAtHead","addAtHead","addAtTail","addAtHead","addAtTail","addAtTail","deleteAtIndex","addAtTail","deleteAtIndex","addAtHead","addAtTail","addAtIndex","addAtHead","addAtTail","addAtHead","deleteAtIndex","deleteAtIndex","addAtHead","addAtTail","addAtTail","addAtHead","addAtHead","get","deleteAtIndex","addAtHead","addAtTail","deleteAtIndex","addAtTail","addAtTail","addAtTail","addAtIndex","addAtIndex","get","addAtTail","addAtTail","addAtHead","addAtTail","addAtTail","addAtHead","get","addAtTail","get","deleteAtIndex","addAtHead","addAtHead","addAtHead","addAtIndex","addAtIndex","deleteAtIndex","get","addAtTail","addAtTail","addAtHead","get","addAtHead","addAtTail","addAtIndex","deleteAtIndex","addAtHead","addAtHead","addAtTail","get","deleteAtIndex","addAtHead","addAtTail","addAtTail","addAtHead","addAtHead","deleteAtIndex","get","addAtHead","addAtTail","addAtHead","addAtTail"]
# y = [[],[24],[1],[18],[1],[1],[30],[2],[1],[3],[3],[33],[97],[43],[12],[10],[1],[1,56],[30],[8,83],[57],[74],[5],[98],[72],[34],[61],[6],[70],[24],[91],[99],[13],[10],[17],[84],[16],[73],[88],[4,19],[59],[41],[57],[10],[18],[2],[12],[25],[1],[77],[1],[7],[34],[87],[13],[4],[12],[11],[10,92],[21,55],[11],[38],[31],[45],[4],[21],[38],[4],[88],[12],[22],[40],[22],[23],[13,96],[24,50],[8],[14],[25],[53],[42],[6],[58],[55],[18,72],[13],[30],[97],[59],[47],[24],[37],[26],[31],[93],[66],[11],[43],[70],[36],[31],[28]]
# z = zip(x, y)


# for i in z:
#     print("obj." + i[0], end="")
#     for j in i[1]:
#         if len(i[1]) == 2:
#             print("("+ str(i[1][0]) + "," + str(i[1][1]) + ")")
#         else: 
#             print("("+ str(j) + ")")
        