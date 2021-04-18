import React from 'react';
import './css/ListBox.css';
import Delete from './icons/delete.svg';

//rendering every single one box with info about every list
const ListBox = ({deleteList, id, title, modified})=>{
    
//redirecting to the list which user wants to edit
    const editOnClick= (e) =>{
        e.preventDefault();
        
        window.location.pathname=`/${id}`;
    }
    //callback to App Component for remove clicked list
    const onDeleteList = (e) =>{
        e.preventDefault();
        deleteList(id)
    }
    return <div className='app__main__AllLists__lists__listBox'>
    
        <h3 className='app__main__AllLists__lists__listBox__title'>{title}</h3>
        <p className='app__main__AllLists__lists__listBox__time'>{modified}</p>
        <form onSubmit={editOnClick}>
        <button type='submit' className='app__main__AllLists__lists__listBox__edit' >Edit</button>
        </form>
        
        <img className='app__main__AllLists__lists__listBox__delete' alt='delete' onClick={onDeleteList} src={ Delete } />
    </div>
}

export default ListBox;