  
import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../UserState/data';
// reducer function

const reducer =(state,action)=>{
    console.log(state,action);
    return state;
}

const defaultState = {
    people:[],
    isModalOpen:false,
    modalContent:''
};

const Index = () => {

    const[name,setName] = useState('');
    const[state,dispatch] = useReducer(reducer,defaultState);

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(name){
            dispatch({type:'Testing'})

        }else{

        }

    };
  
    return (
        <>
            <h2>useReducer</h2>;
            {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={name}
                    onChange={(e)=>setName(e.target.value)} />
                </div>
                <button type="submit">Add</button>

            </form>

            {
                state.people.map(
                    (person) =>{
                        return <div key={person.key}>
                            <h3>
                                {person.name}
                            </h3>
                        </div>
                    }
                )
            }
        </>
    );
};

export default Index;
