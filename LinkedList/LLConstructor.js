class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            // this.length = 1;
        }else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++
        return this
        
    }

    pop() {
        if(!this.head){
            return undefined;
        }else if(this.head == this.tail){
            this.head = null;
            this.tail = null;
        }else{
            let temp = this.head;
            while(temp.next.next){
                temp = temp.next;
            }
            this.tail = temp;
            temp.next = null;
            
        }
        this.length--;           
        return this;
    }

    // adding a new node in the beginning of LL
    unshift(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.next = this.head;
            this.head = newNode;

        }
        this.length++;
        return this;
    }
}

const myLinkedList = new LinkedList(7);
console.log(myLinkedList.pop())

console.log(myLinkedList.unshift(4))
// console.log(myLinkedList.push(8))
// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());
