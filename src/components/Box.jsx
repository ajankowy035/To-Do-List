import React from 'react';
import Detail from './Detail';
import List from './List';
import OtherLists from './OtherLists';




const Box = ({updateList, editId, lists, saveLists}) =>{
    
    return <main className='app__main'>
    
    <Detail /><List updateList={updateList} editId={editId} lists={lists} saveLists={saveLists} /><OtherLists />
    
    </main>
}

export default Box;