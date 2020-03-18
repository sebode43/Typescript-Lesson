"use strict";
var Student = /** @class */ (function () {
    function Student(name, sat, major) {
        this.active = true;
        this.name = name;
        this.sat = sat;
        this.major = major;
    }
    Student.prototype.toTableRow = function (tbody) {
        var tr = $("<tr></tr>");
        tr.append("<td>" + this.name + "</td>");
        tr.append("<td>" + this.sat + "</td>");
        tr.append("<td>" + (this.active ? "Y" : "N") + "</td>");
        tr.append("<td>" + this.major + "</td>");
        tbody.append(tr);
    };
    return Student;
}());
var students = [
    new Student("Kelly Hudson", 1100, "Computer Engineering"),
    new Student("Jon Clarkson", 1000, "Industrial Design"),
    new Student("Jennifer Shelton", 950, "Early Childhood Education"),
    new Student("Blake Jonas", 850, "Communications"),
    new Student("Nick Stefani", 1150, "Neurology")
];
$().ready(function () {
    $("button").click(function () {
        display();
    });
});
var display = function () {
    var tbody = $("tbody");
    tbody.html("");
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var s = students_1[_i];
        s.toTableRow(tbody);
    }
};
