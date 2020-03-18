class Student {
    name: string;
    sat: number;
    active: boolean = true;
    major: string;

    constructor (name:string, sat:number, major:string){
        this.name = name;
        this.sat = sat;
        this.major = major;
    }
    toTableRow(tbody:any): void{
        let tr = $("<tr></tr>")
        tr.append(`<td>${this.name}</td>`);
        tr.append(`<td>${this.sat}</td>`);
        tr.append(`<td>${this.active ? "Y" : "N"}</td>`);
        tr.append(`<td>${this.major}</td>`);
        tbody.append(tr);
    }
}



let students : Student[] = [
new Student("Kelly Hudson", 1100,"Computer Engineering"),
new Student("Jon Clarkson", 1000,"Industrial Design"),
new Student("Jennifer Shelton", 950,"Early Childhood Education"),
new Student("Blake Jonas", 850,"Communications"),
new Student("Nick Stefani", 1150,"Neurology")
];



$().ready(() => {
    $("button").click(() =>{
        display();
    })
})
const display = () => {
    let tbody = $("tbody");
    tbody.html("");
    for(let s of students){
        s.toTableRow(tbody);
    }
};
