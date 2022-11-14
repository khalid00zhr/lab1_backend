var Student = /** @class */ (function () {
    function Student(Name, Age, Specialization) {
        this.Name = Name;
        this.Age = Age;
        this.Specialization = Specialization;
    }
    Student.prototype.getFullName = function () {
        return this.Name + ' ' + this.Age + '  ' + this.Specialization;
    };
    return Student;
}());
var student = new Student('Khalid', 27, 'cs');
var student1 = new Student('ali', 37, 'IT');
var student2 = new Student('ahmed', 24, 'IS');
console.log(student.getFullName());
console.log(student1.getFullName());
console.log(student2.getFullName());
