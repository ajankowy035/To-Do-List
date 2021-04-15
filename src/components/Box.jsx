import React from 'react';
import Detail from './Detail';
import List from './List';
import OtherLists from './OtherLists';




const Box = ({saveLists}) =>{
    
    return <main className='app__main'>
    
    <Detail /><List saveLists={saveLists} /><OtherLists />
    
    </main>
}

export default Box;