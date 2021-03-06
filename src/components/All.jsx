import React from 'react';
import ListBox from './ListBox';
import './css/All.css';
import EmptyBox from './icons/box.svg';
//Box of all created lists
const All = ({deleteList, lists}) => {

    const changePath=(e)=>{//change path for create a new list
        e.preventDefault();
        window.location.pathname='/list';
    }

// conditional rendering: if user has lists and when doesn't
    return  <main className='app__main'>
    <section className='app__main__AllLists'>

    {lists.length>0 && <div className='app__main__AllLists__column'>
    <h1 className='app__main__AllLists__column__title'>Title</h1>
    <p className='app__main__AllLists__column__modified'>Last modification</p>
    </div>}
    
    
    {lists.length === 0 && <div className='app__main__empty'>
    <p className='app__main__empty__text'>Let's do this!</p>
    <p className='app__main__empty__comment'>It's soooo empty here! Click button below and create a new To Do List!</p>
    <img className='app__main__empty__img' src={EmptyBox} alt='empty box' />
    <button className='app__main__empty__btn' onClick={changePath}>+ Create list</button>
    </div>}

    {lists.length > 0 && lists.map(list=>{
        return<div key={list.id} className='app__main__AllLists__lists'> 
        <ListBox deleteList={deleteList} id={list.id} key={list.id} title={list.title} modified={list.modified} />
        </div>
    })}
    
    </section>
    </main>
}

export default All;