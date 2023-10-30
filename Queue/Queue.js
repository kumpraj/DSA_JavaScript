class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value){
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    // add a new item in the last
    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode; 
        }
        this.length++;
        return this;
    }

    // remvoves an item from the first
    dequeue(){
        
        if(this.length === 0) return undefined;

        let temp = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}

let myQue = new Queue(11);
myQue.enqueue(3);
myQue.enqueue(23);
console.log(myQue.dequeue());
console.log(myQue.dequeue());
console.log(myQue.dequeue());
console.log(myQue.dequeue());
console.log(myQue.dequeue());
console.log(myQue);