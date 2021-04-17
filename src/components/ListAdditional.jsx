import React from 'react';
import ListItems from './ListItems';

const List = ({updateList, editId,  lists, saveLists}) =>{
    return <article className='app__main__item app__main__item--list'>
    <ListItems updateList={updateList} editId={editId}  lists={lists} saveLists={saveLists} />
    </article>
}
