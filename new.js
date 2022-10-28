class parson{
    constructor(FastName,lsatName,Salary) {
        this.FastName = FastName;
        this.lsatName=lsatName;
        this.Salary=Salary;
    }
}

const heroParson=new parson('Sowrub','Mojumder', 40000);
const friendlyParson=new parson('Areya','Tabassum',50000)
console.log(friendlyParson);