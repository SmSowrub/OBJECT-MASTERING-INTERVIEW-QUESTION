
// const parsons={
//     fastName:'Sowrub',
//     lastName:'mojumder',
//     salary:22222,
//     getFullName:function(){
//         console.log(this.fastName,this.lastName)
//     },
//     chargeBil:function(amount){
//         this.salary=this.salary-amount;
//         return this.salary;
//     }

// }
// parsons.chargeBil(222);
// parsons.chargeBil(2000);
// console.log(parson.salary);




const parson={
    fastName:'Sowrub',
    lastName:'mojumder',
    salary:22222,
    getFullName:function(){
        console.log(this.fastName,this.lastName)
    },
    chargeBil:function(amount,tips,tax){
        this.salary=this.salary-amount-tips-tax;
        return this.salary;
    }
}

const parson2 ={
    fastName:'Nisat',
    lastName:'Tabassum',
    salary:30000,
}


const parson3={
    fastName:'Ariya',
    lastName:'Tabassum',
    salary:35000,
}

parson.chargeBil.call(parson2,3000,300,30);

console.log(parson2.salary);

parson.chargeBil.apply(parson3,[5000,500,50]);

console.log(parson3.salary);

