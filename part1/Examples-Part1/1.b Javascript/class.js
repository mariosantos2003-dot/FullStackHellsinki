class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log('Hello my name is ' + this.name)
    }
}

const mario = new Person('Mario', 35)
mario.greet()