const addObject={
    Name:'sowrub',
   getFullName: function(){
        return 'Mr'+ " " + this.Name;
    }
}

const anotherObject={
    Name:'Nisat',
}
console.log(addObject.getFullName());

anotherObject.getFullName=addObject.getFullName;
console.log(anotherObject.getFullName());
