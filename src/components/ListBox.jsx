import React from 'react';
import './ListBox.css';
import Delete from './icons/delete.svg';


const ListBox = ({deleteList, id, title, modified})=>{
    

    const editOnClick= (e) =>{
        e.preventDefault();
        
        window.location.pathname=`/${id}`;
    }
    
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
        
        <img className='app__main__AllLists__lists__listBox__edit__delete' onClick={onDeleteList} src={ Delete } />
    </div>
}

export default ListBox;