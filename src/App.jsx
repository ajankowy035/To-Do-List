import React,{useState, useEffect} from 'react';
import Nav from './components/Nav';
import Box from './components/Box';
import Route from './components/Route';
import Login from './components/Login';
import All from './components/All';

const App = () =>{
    const [lists, setLists]=useState([]);


    const day = new Date();
    const date = (day.getHours()<10? '0'+day.getHours():day.getHours())+':'+ (day.getMinutes()<10? '0'+ day.getMinutes(): day.getMinutes()) +' ' +(day.getDay()<10? '0'+ day.getDay(): day.getDay()) +'/' +(day.getMonth()<10? '0'+day.getMonth():day.getMonth()) + '/' + day.getFullYear();
        

    React.useEffect(()=>{
        const temp = localStorage.getItem('lists');
        const loaded = JSON.parse(temp);

        if(loaded){
            setLists(loaded);
        }
    },[])

    useEffect(()=>{
        const temp = JSON.stringify(lists);
        localStorage.setItem('lists',temp)
    },[lists]);

    const updateList = (id,title,items)=>{
        console.log(id);

        const updatedLists = lists.filter(list=>list.id!==id);
        setLists([...updatedLists]);
        
        const updatedList = {
            id:id,
            title: title,
            items: [...items],
            modified: date
        }
        
        setLists([...updatedLists,updatedList]);

        return;
    }

    const saveLists = (title,items)=>{

        if (items.length===0){
            alert('It looks You try to save an empty To Do List! Try to plan some big things in little steps!')
            return
        };
            
        
        const newList = {
            id:new Date().getTime(),
            title: title,
            items: [...items],
            modified: date
        }
        

        //Verification if current list title is free
        
        let titleVerifiction=false;

        lists.map(list=>{
            if (list.title === newList.title) titleVerifiction=true;
            return;
        });

        if(!titleVerifiction){
            setLists([...lists].concat(newList));
            titleVerifiction=false;
            window.location.pathname=`/${newList.id}`
        }else{
            alert('You have already created To To List with that title, please change it!');
            titleVerifiction=false;
            return;
        }

    }

    const deleteList=(id)=>{
        // console.log(id);
        const updatedLists = lists.filter(list=>list.id!==id);
        setLists([...updatedLists]);
    }
        
    return (<article className='app' >
    <Nav />

    {lists.map(list=>{
        return (<Route path={`/${list.id}`} >
        <Box updateList={updateList} editId={list.id} title={list.title} lists={lists} saveLists={saveLists} />
        </Route>);
    })}

    <Route path='/list' >
        <Box updateList={updateList} editId={false} lists={lists} saveLists={saveLists} />
    </Route>

    <Route path= '/'>
        <Login />
    </Route>

    <Route path='/all'>
        <All deleteList={deleteList} lists={lists} />
    </Route>

    </article>)
}

export default App;
