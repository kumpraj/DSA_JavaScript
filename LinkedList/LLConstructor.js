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

    // remove the first item in LL
    shift(){
        
        // if no items
        if(!this.head){
            return undefined;            
        }

        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;

        // to handle if there was a single node
        if(this.length == 0){
            this.tail = null;
        }
        return temp;
        
    }

    // to fetch a node by index
    get(index) {
        if(index< 0 || index>= this.length){
            return undefined;
        }

        let temp = this.head;
        for(let i = 0; i< index; i++){
                temp = temp.next;
        }        
        return temp;
    }

    // to set a value to a node at an index
    set(index,value){
        const node = this.get(index);
        if(node){
            node.value = value;
            return true;
        }

        return false;
    }
}

const myLinkedList = new LinkedList(7);
// console.log(myLinkedList.pop())

console.log(myLinkedList.push(8))
console.log(myLinkedList.push(9))
// console.log(myLinkedList.get(2));
console.log(myLinkedList.set(0,77));
console.log(myLinkedList)
// console.log(myLinkedList.shift())
// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());

