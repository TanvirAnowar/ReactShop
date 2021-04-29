import React from 'react'
import {Link} from 'react-router-dom'
const Shop = () => {

    const [todo,setTodo] = React.useState([]);
    const fetchData = async()=>{

        const result = await fetch('https://jsonplaceholder.typicode.com/todos')
                    
        var data = await result.json();    
        setTodo(data);             
        console.log(data[1]);
    };

    React.useEffect(()=>{
        fetchData();
    },[]);

    return (
        <>
            <ul>
                {
                    todo.map((item) => {
                        const {id,title} = item;
                        return<li key={id}> 
                            <Link to={`/user/${item.userId}`}>
                                {title} 
                            </Link>
                            
                        </li>
                        
                    })
                }
            </ul>
        </>

    )
}

export default Shop
