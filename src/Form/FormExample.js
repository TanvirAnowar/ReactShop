import React from 'react'

const FormExample = () => {

    const [person,setPerson] = React.useState({
        name:'',email:'', age:''
    });

    //const []

    const changeHandler =(e) =>{
       const name = e.target.name;
       const value = e.target.value;
      // console.log(name,value);
       setPerson({...person,[name]: value}); 
    };
    const submitHandler = (e) =>{

        e.preventDefault();
        console.log("submit");
        console.log(person);

    };
    return (
        <>
        <form>
            <input type="text" name="name" value={person.name} onChange={changeHandler} ></input>    
            <input type="text" name="email" value={person.email} onChange={changeHandler} ></input>    
            <input type="text" name="age" value={person.age} onChange={changeHandler}></input>    
            <button type="submit" onClick={submitHandler}>add person</button> 
        </form>
        </>
    )
}

export default FormExample
