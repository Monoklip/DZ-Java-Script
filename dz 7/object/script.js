
// const exs_1_1 = () => {
    
    let person = {
        firstName : 'Ivan',
        secondName : 'Ivanov',
    };

    person.showData =()=> {
        console.log(person.firstName, person.secondName)
    };

    // console.log(person.showData());

    let newPerson = {
        firstName : 'Ivan',
        secondName : 'Ivanov',
    };

    newPerson.firstName = 'Petro';
    newPerson.secondName = 'Petriv';

    newPerson.showData =()=>{
        console.log(newPerson.firstName, newPerson.secondName)
    };

    // console.log(newPerson.showData());

// }


