let a = 0;
let b = 1;
function X(){
    return 1;
}
let y = function(){
    return 0;
}
const z = () => {
    return -1;
}

let a1:number = 5;

function add1(n: number) : number {
    return n + 4;
}

function x1(t: number) : void {
    return;
}

class Customer {
    id: number = 0; //0 = default value
    name: string;
    active: boolean = true;
    sales: number;

    constructor(name:string = 'NEW Customer', sales:number){
        this.name = name;
        this.sales = 0;
    } 
    print() : void{
        console.log(`${this.name}`);
    }  
}

function i(){
    let ctrl = document.getElementById("out");
    ctrl.innerText = "500";
}