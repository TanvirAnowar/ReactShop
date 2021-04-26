import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../UserState/data';
// reducer function

const reducer =(state,action)=>{
    console.log(action, action.type === 'ADD_ITEM')
    if(action.type === 'T'){

        const newPeople = [...state.people, action.payload];
        return {
            ...state, 
            people: newPeople,
            isModalOpen:true,
            modalContent:'item added'
        }
    };

        return state;
    throw new Error("no match found");
}

const defaultState = {
    people:data,
    isModalOpen:false,
    modalContent:''
};

const Index = () => {

    const[name,setName] = useState('');
    const[state,dispatch] = useReducer(reducer,defaultState);

    const handleSubmit = (e) =>{
        e.preventDefault();
 console.log('name:', name);
        if(name){
            const newItem = { id: new Date().getTime().toString(), name };
            dispatch({type:'ADD_ITEM',payload:newItem});
            setName('');

        }else{
            dispatch({type:'x'});
        }

    };
  
    return (
        <>
            <h2>useReducer</h2>;
            {state.isModalOpen && (<Modal />)}
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
                        return (<div key={person.key}>
                            <h3>
                                {person.name}
                            </h3>
                        </div>)
                    }
                )}  
        </>
    );
};

export default Index;
