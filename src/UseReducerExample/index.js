  
import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../UserState/data';
// reducer function

const reducer =(state,action)=>{

}

const Index = () => {

    const[name,setName] = useState('');
    const[state,dispatch] = useReducer(reducer);

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(name){
            setPeople(
                [
                    ...people,
                    {
                        id: new Date().getTime().toString(),
                        name: name
                    }
                ]
            );

            setName('');

        }else{
            setShowModal(true);
        }

    };
  
    return (
        <>
            <h2>useReducer</h2>;
            {showModal && <Modal/>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={name}
                    onChange={(e)=>setName(e.target.value)} />
                </div>
                <button type="submit">Add</button>

            </form>

            {
                people.map(
                    (people) =>{
                        return <div key={people.key}>
                            <h3>
                                {people.name}
                            </h3>
                        </div>
                    }
                )
            }
        </>
    );
};

export default Index;
