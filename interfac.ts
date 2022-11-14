interface Iuser {
    Name: string;
    Age: number;
    Specialization:string;
    getFullName(): string;
  }
  class Student implements Iuser {
    constructor(public Name: string, public Age: number,public Specialization: string,) {}

    getFullName() {
      return this.Name + ' ' + this.Age +'  '+this.Specialization;
    }
  }

  var student = new Student('Khalid', 27,'cs');
  var student1 = new Student('ali', 37,'IT');
  var student2 = new Student('ahmed', 24,'IS');

  console.log(student.getFullName());
  console.log(student1.getFullName());
  console.log(student2.getFullName());