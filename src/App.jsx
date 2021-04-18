import React,{useState, useEffect} from 'react';
import Nav from './components/Nav';
import List from './components/List';
import Route from './components/Route';
import Login from './components/Login';
import All from './components/All';
import './components/css/App.css';

const App = () =>{
    const [lists, setLists]=useState([]);//setting current lists
    //define the current date for saving list modification - date of updates or creating new list 
    const day = new Date();
    const date = (day.getHours()<10? '0'+day.getHours():day.getHours())+':'+ (day.getMinutes()<10? '0'+ day.getMinutes(): day.getMinutes()) +' ' +(day.getDay()<10? '0'+ day.getDay(): day.getDay()) +'/' +(day.getMonth()<10? '0'+day.getMonth():day.getMonth()) + '/' + day.getFullYear();
    
    //using effect for locally storing lists
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
 
    //Update of existing list : getting parametrs from List component
    const updateList = (id,title,items)=>{

        const updatedLists = lists.filter(list=>list.id!==id);
        setLists([...updatedLists]);//when changes are saving, old list is removing
        //it is replacing with new list with the same id
        const updatedList = {
            id:id,
            title: title,
            items: [...items],
            modified: date
        }
        
        setLists([...updatedLists,updatedList]);

        return;
    }

    //saving a new list function, parametrs are from List component
    const saveLists = (title,items)=>{
        //avoiding creating empty lists
        if (items.length===0){
            alert('It looks You try to save an empty To Do List! Try to plan some big things in little steps!')
            return
        };
            
        //defining new list
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
            return list;
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
    //removing list from all lists, parametr from ListBox component
    const deleteList=(id)=>{
        // console.log(id);
        const updatedLists = lists.filter(list=>list.id!==id);
        setLists([...updatedLists]);
    }
       //rendering components using Route component 
    return (
        <article className='app' >
    <Nav />

    {lists.map(list=>{
        return (<Route path={`/${list.id}`} >
        <List key={list.id*Math.random()} updateList={updateList} editId={list.id} title={list.title} lists={lists} saveLists={saveLists} />
        </Route>);
    })}

    <Route path='/list' >
        <List updateList={updateList} editId={false} lists={lists} saveLists={saveLists} />
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
