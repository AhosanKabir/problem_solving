// basic structure
// const n1 = {data: 100}
// const n2 = {data: 200}
// n1.next = n2
// console.log(n1);



// advance structure 
class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}
// const d1 = new Node(100)
// console.log(d1);

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size++
    }

    // Insert last node
    insertLast(data){
        let node = new Node(data);
        let current;

        if(!this.head){
            this.head = node;
        } else {
            current = this.head;
            while(current.next){
                current = current.next
            }

            current.next = node
        }
        this.size++;
    }


    // Insert at index 
    insertAt(data,index){

    }
    // Get at index
    // Remove at index
    // Clear list

    // Print list data
    printListData(){
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(12);
ll.insertFirst(13);
ll.insertFirst(14);
ll.insertFirst(15);
ll.insertLast(112)

console.log(ll);

ll.printListData();
