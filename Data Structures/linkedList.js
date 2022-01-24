// Is a linear data structure.
// Unlike an array, elements are not stored sequencially but are linked together.
// First element is known as the head and the other elements are known as nodes.



class Node{
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

class linkedList{
    constructor(){
        this.head =  null
        this.size = 0
    }

    //Insert first node
    insertFirst(data){
        this.head = new Node(data,this.head)
        this.size++
    }

    //Insert last node
    insertLast(data){
        let node = new Node(data)
        let current

        //If list is empty,then make it the Head
        if(!this.head){
            this.head = node;
        } else {
            current = this.head
            while(current.next){ //If there is a next node
            current = current.next   // Go to the next node until there is no next
            }

            current.next = node
        }
        this.size++
    }


    //Insert at an index
    insertAt(data,index){
        // If defined index is out of range
        if(index > 0 && index > this.size){
            console.log("please enter an index within range")
            return //do nothing
        }

        // If first index
        if (index === 0){
            this.head = new Node(data,this.head)
            return
        }

        const node  = new Node(data)
        let current,previous

        //set current to head
        current = this.head
        let count = 0 //initializing a counter

        while(count < index){
            previous = current //node before the index we want to insert
            count++
            current = current.next //node after the index
        }

        node.next = current
        previous.next = node
        this.size++
    }

    //Get at index
    getAt(index){
        let current = this.head
        let count = 0

        while(current){
            if(count == index){
                console.log(current.data)
            }
            count++
            current = current.next
        }
        return null
    }

    //Get first

    //Get last

    //Remove at index
    removeAt(index){
        if(index > 0 && index > this.size ){
            return
        }

        let current =  this.head
        let previous
        let count = 0

        //Remove first
        if(index===0){
            this.head = current.next
        } else{
            while(count<index){
                count++
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.size--
    }  

    //Remove Last

    //Clear list
    clearList(){
        this.head = null // The class only knows about the head
        this.size = 0
    }

    //Print list data
    printListData(){
        let current = this.head
        while(current){ //while current exists
            console.log(current.data)
            current = current.next
        }
    }
}

const ll = new linkedList() //ll for linkedList
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertFirst(400)

ll.insertLast(0)

ll.insertAt(500,0)
//ll.removeAt(5)

//ll.clearList()

ll.printListData()
//ll.getAt(2)

