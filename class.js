class Student {
    constructor(sID, sName){
        this.ID = sID;
        this.name = sName;
        this.school = "Kolimunnesa School"
    }
}

const student1 = new Student(12, "Nehal");
const student2 = new Student (16, "Shuvo");
const student3 = new Student (21, "Kabila");
console.log(student1.name, student2.ID, student3.name);