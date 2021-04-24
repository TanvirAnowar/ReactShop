import React from 'react'

const UseEffectCleanup = () => {
    const [size,setSize] = React.useState(window.innerWidth);
    
    const checkSize = () =>{
        setSize(window.innerWidth);
    }
    React.useEffect(
        ()=>{
                console.log('add');

                window.addEventListener('resize',checkSize);
            
            return () => {
                    console.log('remove');
                    window.removeEventListener('resize',checkSize);
                };            
      });
    return (
        <>
        <h1>
            window
        </h1>
        <h2> {size} PX</h2>
        
        </>
    )
}

export default UseEffectCleanup
