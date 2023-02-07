// Завдання 1

// let person = {
//     firstName: 'Ivan',
//     secondName: ' Ivanov',
//     showData(){
//         console.log(`Name: ${this.firstName}, Last name: ${this.secondName}`);
//     }
// }

// let newPerson = Object.assign({}, person,)
// newPerson.firstName = 'Petro';
// newPerson.secondName= 'Petriv';

// person.showData();
// newPerson.showData();

// Завдання 2

let  MyMath ={
    a:5,
    b:2,
    sum(){
        res=this.a+this.b;
        console.log(res);
    },
    multiplication(){
        res2=this.a*this.b;
        console.log(res2);
    },
    division(){
        res3=this.a/this.b;
        console.log(res3);
    },
    subtraction(){
        res4=this.a-this.b;
        console.log(res4);
    }
}

MyMath.sum();
MyMath.multiplication();
MyMath.division();
MyMath.subtraction();

