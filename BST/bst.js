class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(this.root === null) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;

        while(true){
            if (newNode.value === temp.value) return undefined;
            
            if(newNode.value < temp.value ){
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }else{
                    if(temp.right === null){
                        temp.right = newNode
                        return this;
                    }
                    temp = temp.right;
                }
            }

            return this;
        }
    }


let myBst = new BST();
myBst.insert(50);
myBst.insert(45);
myBst.insert(40);
myBst.insert(55);
console.log(myBst.insert(60));
