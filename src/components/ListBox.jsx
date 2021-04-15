import React from 'react';
import './ListBox.css';

const ListBox = ({title, modified})=>{
    return <div className='app__main__AllLists__lists__listBox'>
    
        <h3 className='app__main__AllLists__lists__listBox__title'>{title}</h3>
        <p className='app__main__AllLists__lists__listBox__time'>{modified}</p>
        <button className='app__main__AllLists__lists__listBox__edit'>Edit</button>
    
    </div>
}

export default ListBox;