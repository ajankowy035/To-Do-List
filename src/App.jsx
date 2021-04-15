import React,{useState} from 'react';
import Nav from './components/Nav';
import Box from './components/Box';
import Route from './components/Route';
import Login from './components/Login';
import All from './components/All';

const App = () =>{
    const [lists, setLists]=useState([]);

    const saveLists = (title,items)=>{
        const day = new Date();
        const date = (day.getHours()<10? '0'+day.getHours():day.getHours())+':'+ (day.getMinutes()<10? '0'+ day.getMinutes(): day.getMinutes()) +' ' +(day.getDay()<10? '0'+ day.getDay(): day.getDay()) +'/' +(day.getMonth()<10? '0'+day.getMonth():day.getMonth()) + '/' + day.getFullYear();
        
        if (items.length===0){
            alert('It looks You try to save an empty To Do List! Try to plan some big things in little steps!')
            return};

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
        }else{
            alert('You have already created To To List with that title, please change it!');
            titleVerifiction=false;
            return;
        }
        // console.log(newList);

        

        // console.log([...lists]);

    }

    return (<article className='app' >
    <Nav />
    <Route path='/list' >
        <Box  saveLists={saveLists} />
    </Route>

    <Route path= '/'>
        <Login />
    </Route>

    <Route path='/all'>
        <All lists={[...lists]} />
    </Route>
    </article>)
}

export default App;
