module.exports = class Node{
    constructor(value, next=null){
        this.value = value
        this.next = next
    }

    getValue(){
        return this.value
    }

    getNextValue(){
        return this.next
    }

    setNextValue(newValue){
        this.next = newValue
    }
};