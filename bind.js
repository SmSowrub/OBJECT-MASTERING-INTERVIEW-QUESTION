const parson={
    fastName:'Sowrub',
    lastName:'mojumder',
    salary:22222,
    getFullName:function(){
        console.log(this.fastName,this.lastName)
    },
    chargeBil:function(amount){
        console.log(this);
        this.salary=this.salary-amount;
        return this.salary;
    }

}

const parson2={
    fastName:'Nisat',
    lastName:'Tabassum',
    salary:30000,
};


const parson2ChargeBill= parson.chargeBil.bind(parson2);
parson2ChargeBill(2000);
parson2ChargeBill(3000);
 console.log(parson2.salary);
 console.log(parson.salary);