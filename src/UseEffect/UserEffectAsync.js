import { getSuggestedQuery } from '@testing-library/dom';
import React from 'react'

const UserEffectAsync = () => {

    const [users,setUsers] = React.useState([]);

    const getUsersAsync = async()=>{
        const response = await fetch('https://api.github.com/users');
        const users = await response.json();
        setUsers(users);
        console.log(users);
    };

    React.useEffect(()=>{
        getUsersAsync();
    },[]);

    return (
        <>
        <h3>GitHub Users</h3>
        <ul className='users'>
        {
            users.map((user)=>{
                const {id,login,avatar_url,html_url} = user
                return<li key={id}>
                        <img src={avatar_url}></img>
                        <div>
                            <h4>
                                
                                <a href={html_url}>{login}</a>
                            </h4>
                        </div>
                </li>
            })
        }
        </ul>
    </>
    );   
}

export default UserEffectAsync
