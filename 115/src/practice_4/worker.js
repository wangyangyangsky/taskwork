const Person = require('../../src/practice_4/person');

class Worker extends Person{
    constructor(name,age){
         super(name,age);
    }
    introduce(){
        return super.introduce() +' I am a Worker. I have a job.'
    }
}
module.exports = Worker;
