//create a class called Student with properties name,age and subjects. The subjects property should be array of objects, where each object 
//represents a subject with properties name and grade. Include a method getAverageGrade() that calculates and returns the average grade
//of all subjects of the students.

//Create an instance of the student class and add multiple subjects with their respective grades to the subject property. Call the 
//getAverageGrade() method and print the average grade.

//Create an instance of the student class and add multiple subjects. Use the addSubject() method to add a new subject and its grade. Call the 
//getAverageGrade() method and print the updated average grade.


class Student{
    constructor(name,age,subject){
        this.name=name;
        this.age=age;
        this.subject=subject;
    }
    getAverageGrade(){
        let sum=0,avg=0;
        for(let i=0;i<this.subject.length;i++){
            sum=sum+this.subject[i].grade
        }
        avg=sum/this.subject.length;
        console.log(avg)
    }
    addSubject(subject){
      this.subject.push(subject)
      console.log(this.subject)
      
    }
}
let s1=new Student("abhinav",22,[{name:"math",grade:28},{name:"english",grade:27},{name:"physics",grade:26}])
s1.addSubject({
    name:"chemistry",
    grade:30
});
s1.getAverageGrade()
