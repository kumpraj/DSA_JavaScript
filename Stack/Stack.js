class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// works on LIFO principle
class Stack {
    constructor(value){
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
        
    }

    // to push a value on top of the stack
    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++
        return this;

    }

    // to pop a value from the top of the stack 
    pop(){
        if(this.length === 0) return undefined;
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;

        this.length--;
        return temp;
    }
}

let myStack = new Stack(11);
myStack.push(7);
myStack.push(23);
myStack.push(3);
console.log(myStack.pop());
console.log(myStack);