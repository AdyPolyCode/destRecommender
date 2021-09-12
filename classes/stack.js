const Node = require('./node');

module.exports =  class Stack{
    constructor(maxSize){
        this.topItem = null
        this.size = 0
        this.maxSize = maxSize
    }

    push(value){
        if(this.hasSpace()){
            const node = new Node(value)
            node.setNextValue(this.topItem)
            this.topItem = node
            this.size += 1
        }else{
            throw new Error(`Cannot push to a full stack.`)
        }
    }

    pop(){
        if(!this.isEmpty()){
            const top = this.topItem
            this.topItem = top.getNextValue()
            this.size -= 1
        }else{
            throw new Error(`Cannot pop from an empty stack.`).message
        }
    }

    peek(){
        return this.topItem
    }

    isEmpty(){
        return this.size === 0
    }

    hasSpace(){
        return this.size < this.maxSize
    }

    getStack(){
        if(this.isEmpty()){
            return []
        }else{
            const stack = []
            let currentNode = this.topItem
    
            while(currentNode){
                stack.push(currentNode.value)
                currentNode = currentNode.next
            }
    
            return stack
        }
    }
};