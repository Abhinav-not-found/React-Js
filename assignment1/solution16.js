//create a class called Student with properties name,age and subjects. The subjects property should be array of objects, where each object 
//represents a subject with properties name and grade. Include a method getAverageGrade() that calculates and returns the average grade
//of all subjects of the students.

//Create an instance of the student class and add multiple subjects with their respective grades to the subject property. Call the 
//getAverageGrade() method and print the average grade.




class Student{
    constructor(name,age,subject=[name,grade]){
        this.name=name;
        this.age=age;
        this.subject=subject;
    }
    
    getAverageGrade(grade) {
      this.grade=grade
        let sum=0;
        for(let i=0;i<this.subject.length;i++){
            sum=sum+ this.subject[i][1]
        }  
        let avg=sum/4;
        console.log(avg)

    }
}
let s1=new Student("abhinav",22,[["math",21],["english",25],["physics",24],["chemistry",28]],)
let s2=new Student("adarsh",21,[["math",29],["english",28],["physics",29],["chemistry",30]],)

s1.getAverageGrade()
s2.getAverageGrade()