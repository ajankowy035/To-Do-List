import React from 'react';
import ListItems from './ListItems';

const List = ({saveLists}) =>{
    return <article className='app__main__item app__main__item--list'>
    <ListItems saveLists={saveLists} />
    </article>
}

export default List;