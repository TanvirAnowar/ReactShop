import React from 'react'

const User = ({match}) => {

    const [userTodo,setUserTodo] = React.useState([]);
console.log('in',match);
     React.useEffect(()=>{

         getUserInfo();
     },[]);

    const getUserInfo = async() =>{
        const url = `https://jsonplaceholder.typicode.com/users/${match.params.id}/todos`;
        const result = await fetch(url);

        const data =  await result.json();
        console.log(url,result,data);

        setUserTodo(data);
        console.log(userTodo);

    };
    return (
        <div>
            <ul>
            {
                userTodo.map((item)=>{
                    const {id,title} = item;
                    return <li key={id}>{title}</li>
                   
                })
            }
            </ul>
        </div>
    )
}

export default User
