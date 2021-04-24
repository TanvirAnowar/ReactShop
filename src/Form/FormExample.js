import React from 'react'

const FormExample = () => {

    const [person,setPerson] = React.useState({
        name:'',email:'', age:''
    });

    const [people, setPeople] = React.useState([]);

    const changeHandler =(e) =>{
       const name = e.target.name;
       const value = e.target.value;
      // console.log(name,value);
       setPerson({...person,[name]: value}); 
    };
    const submitHandler = (e) =>{

        e.preventDefault();
       // console.log("submit");
       var newPerson = {...person, id: new Date().getTime().toString()}
        setPeople([...people,newPerson]);
        setPerson({
            name:'',email:'', age:''
        });
        console.log(people,people.length);

    };
    return (
        <>
        <form>
            <input type="text" name="name" value={person.name} onChange={changeHandler} ></input>    
            <input type="text" name="email" value={person.email} onChange={changeHandler} ></input>    
            <input type="text" name="age" value={person.age} onChange={changeHandler}></input>    
            <button type="submit" onClick={submitHandler}>add person</button> 
        </form>
        <div>
            {people.map((person) => {
                const { id, name, email, age } = person;
                return (
                    <div key={id} className='item'>
                    <h4>{name}</h4>
                    <p>{email}</p>
                    <p>{age}</p>
                    </div>
                );
            }
        )
        }
        </div>
        </>
    )
}

export default FormExample
