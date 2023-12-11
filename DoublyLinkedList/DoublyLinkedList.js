class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        
        let temp = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
        
    }

    unshift(value){
        const newNode = new Node(value);
        
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(){
        if(this.length === 0) return undefined     // same as if(!this.head)

        let temp = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else {
            
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null
        }
        this.length--;
        return temp;
    }
    
    get(index){
        if(index >= this.length || index < 0) return undefined;

        let temp = this.head;
        if(index< this.length/2){
            for(let i = 0; i< index; i++){
                temp = temp.next;
            }
        }else {
            temp = this.tail;
            for(let i = this.length-1; i> index; i--){
                temp= temp.prev;
            }
        }
        return temp;

    }

    set(index, value){
        let temp = this.get(index);

        if(temp){
            temp.value = value;
            return true;
        }
        return false;
    }
}

let myDLL = new DoublyLinkedList(1);
myDLL.push(2);
myDLL.push(7);
console.log(myDLL);
myDLL.set(2,99);
console.log(myDLL.set(4,100));
console.log(myDLL);


