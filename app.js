'use strict';
// Constructor
const allEmployee = [];
function Employee(employeeId,fullName,department,level,imgUrl){
this.employeeId = employeeId;
this.fullName=fullName;
this.department=department;
this.level=level;
this.imgUrl=imgUrl;

allEmployee.push(this)
}

// var empLevel=[];
Employee.prototype.calcSal= function (){
var netSalary  ;

        if(this.level.toLowerCase()==="senior"){ 
        return this.salary = Math.floor(Math.random() * (2000-1500+1)) + 1500;
        }
        else if (this.level.toLowerCase()==="mid-senior"){
            return this.salary = Math.floor(Math.random() * (1500-1000+1)) + 1000;
        }
        else if (this.level.toLowerCase()==="junior"){
            this.salary = Math.floor(Math.random() * (1000-500+1)) + 500;
            this.netSalary=this.salary*0.075;
            this.salary=this.salary-this.netSalary;
            return this.salary;
        }
}

const employee1 = new Employee("1000","Ghazi Samer","Administration","senior","")
const employee2 = new Employee("1001","Lana Ali","Finance","senior","")
const employee3 = new Employee("1002","Tamara Ayoub","Marketing","senior","")
const employee4 = new Employee("1003","Safi Walid","Administration","Mid-Senior","")
const employee5 = new Employee("1004","Omar Zaid","Development","senior","")
const employee6 = new Employee("1005","Rana Saleh","Development","Junior","")
const employee7 = new Employee("1006","Hadi Ahmad","Finance","Mid-Senior","")

Employee.prototype.printEmployee = function () {
    document.write(`<p>${this.fullName} :${this.calcSal()}</p>`);
 
}

function printEmployeeSal () {
    for (let i=0; i<allEmployee.length;i++){
        allEmployee[i].printEmployee()
    }}
    printEmployeeSal()