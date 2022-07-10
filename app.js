'use strict';
// Constructor
const allEmployee = [];
function Employee(employeeId,fullName,department,level,image){
this.employeeId = employeeId;
this.fullName=fullName;
this.department=department;
this.level=level;
this.image=image;

allEmployee.push(this)
}


Employee.prototype.calcSal= function (){
var netSalary;

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



const employee1 = new Employee("1000","Ghazi Samer","Administration","senior","assets/Ghazi.jpg")
const employee2 = new Employee("1001","Lana Ali","Finance","senior","assets/Lana.jpg")
const employee3 = new Employee("1002","Tamara Ayoub","Marketing","senior","assets/Tamara.jpg")
const employee4 = new Employee("1003","Safi Walid","Administration","Mid-Senior","assets/Safi.jpg")
const employee5 = new Employee("1004","Omar Zaid","Development","senior","assets/Omar.jpg")
const employee6 = new Employee("1005","Rana Saleh","Development","Junior","assets/Rana.jpg")
const employee7 = new Employee("1006","Hadi Ahmad","Finance","Mid-Senior","assets/Hadi.jpg")

Employee.prototype.printEmployee = function () {
      
 let code =(` <div class="card">
 <img src="${this.image}" alt="About-">
 <div class="cardText">
   <p class="categoryText">Name:${this.fullName}</p>
   <h2 class="brandText">ID:${this.employeeId}</h2>
   <h5>Department:${this.department}</h5>
   <p class="priceText">Level:${this.level}</p>
   <p class="priceText">netSalary:${this.calcSal()}</p>
 </div>
</div>
 ;
 `)
 products.innerHTML += code;
}

const products = document.querySelector(".productHolder")




function printEmployeeSal () {
    for (let i=0; i<allEmployee.length;i++){
        allEmployee[i].printEmployee()
    }}
    printEmployeeSal()



 