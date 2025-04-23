const arto = {
    name: 'Arto Hellas',
    age: 35,
    education :'PHD',
    greet: function() {
        console.log('hello, my name is ' + this.name);
    },
    doAddition: function(a, b) {
        console.log(a+b)    
    }
}

arto.greet()
const referencetogreet = arto.greet()
referencetogreet()
//El resultado es undefined por que al llamar a una referencia el this no apunta al objeto arto



arto.growOlder = function(){
    this.age +=1 ;
}

console.log(arto.age)
arto.growOlder()
console.log(arto.age)

//Ahora el objeto tiene el método doAddition que calcula la suma de números que se le da como parámetros. El método se llama de la forma habitual, utilizando el objeto arto.doAddition(1, 4) o almacenando una referencia de método en una variable y llamando al método a través de la variable: referenceToAddition(10, 15).
arto.doAddition(5, 10)
const addition = arto.doAddition
addition(5, 10)