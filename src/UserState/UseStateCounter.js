import React from 'react'

const UseStateCounter = () => {

    const[count,setCount] = React.useState(0);
    const complexIncrease =()=>{

        setTimeout(() => {
            setCount((previousValue)=>{
                return previousValue + 1;
            });
        },2000) ;       
    };
    return (
        <React.Fragment>
            <h2>regular counter</h2>
            <h1>{count}</h1>
            <button className='btn' onClick={()=>setCount(count + 1)} >Increase</button>
            <button className='btn' onClick={()=>setCount(count - 1)} >Decrease</button>
            <button className='btn' onClick={()=>complexIncrease()} >Complex Increase</button>
            <button className='btn' onClick={()=>setCount(0)} >Reset</button>
        </React.Fragment>
    )
}

export default UseStateCounter
