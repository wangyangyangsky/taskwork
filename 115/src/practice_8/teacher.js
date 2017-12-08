const Person = require('../../src/practice_8/person');

class Teacher extends Person{
    constructor(id,name,age,Class){
        super(id,name,age);
        this.klass = Class;
    }
    introduce(){
        if(this.klass){
            return super.introduce() + ' I am a Teacher. I teach '+ this.klass.getDisplayName() + '.'
        }
        else{
            return super.introduce() + ' I am a Teacher. I teach No Class.'
        }
    }
    introduceWith(Student){
        if(Student.klass === this.klass){
            return super.introduce() + " I am a Teacher. I teach "+ Student.name +'.';
        }
        else{
            return  super.introduce() +" I am a Teacher. I don't teach "+ Student.name +'.';
        }

    }
}
module.exports = Teacher;



