const Hello = (props) =>{
    //Definimos las constantes
    const {nombre,age} = props


    //Definimos la funcion bornYear que consiste en obtener el año actual y restarle la edad
    const bornYear = () => new Date().getFullYear() - age;
    
    return(
        <div>
        <p>
            Hello {nombre}, you are {age} years old.
        </p>
        <p>
            Naciste el {bornYear()}.
        </p>
        </div>
    )
}

const App = () => {
    //Definimos los props con un objeto llamado asi
    props = {
        nombre: "Javier",
        age: 25
    }

    return (
        <div>
            <h1>
                Hello
            </h1>
            <Hello nombre={nombre} age={age}/>
        </div>
    )
}