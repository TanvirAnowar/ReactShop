import React from 'react'

const UseStateObject  = () => {
    const [info,setInfo] = React.useState(
        {
            name: "josh",
            id : 1,
            message: "existing object"
        }
    );

    const changeMessage = ()=>{
        setInfo({...info, message: 'changed object'});
    };
    return (
        <>
            <h1>{info.id}</h1>
            <h1>{info.name}</h1>
            <h1>{info.message}</h1>
            <button className='btn' onClick={()=>changeMessage()} >Change</button>
        </>
    );
}

export default UseStateObject 
