import React,{useEffect, useState} from 'react';
import Delete from './icons/delete.svg';
import Button from './Button';
import './css/List.css';

const List=({editId, updateList, lists, saveLists})=>{
    const [title, setTitle]=useState('List title');//saving the list's title

    const [textItem,setTextItem]=useState('Create a new List Item'); //handling wroten text
    const [items,setItems]=useState([]); //handling added items to the list
    
    //defining current list if it is editing, id is a part of pathname for easier identification of list
    //using effect for mapping and defining saved items and title of current list when it is editing;
    useEffect(()=>{
        const editingList= lists.filter((list)=>window.location.pathname===`/${list.id}`)
        editingList.map(list=>{
            setItems(list.items);
            setTitle(list.title);
        })
    },[])

    //saving items after adding them to the list
    const saveItem=(e)=>{
        e.preventDefault();

        if(textItem.length===0)return;//avoiding adding empty stings to the list

        const newItem={
            id:new Date().getTime(),
            text: textItem,
            completed: false
        }
        setItems([...items,newItem]);//adding new item to the list
        setTextItem('');
    }
    //filtering for deleting item
    const deleteItem=(id)=>{
        const filteredItems=items.filter(item=>item.id!==id);

        setItems(filteredItems);
    }
    //adding css-class for visual checking the list
    const checkItem=(id)=>{
        const updatedItems=items.map(item=>{
            if(item.id===id){
                item.className+=' check';
                item.completed= !item.completed;
            }
            return item;
        });
        setItems(updatedItems);
    }

    //savig whole list as a callback to App component
    const onSaveClick=(e)=>{
        e.preventDefault();
        //if list is just editingand it's id doesn't change
        if(editId!==false){
            updateList(editId,title,items);
            return;
        }
        //when list is a new one
        saveLists(title,items);
    }
    //generating items from the list
    const renderedList = items.map((item)=>{
        return <div key={item.id}  className='app__main__list__items '>
        <p onClick={()=>checkItem(item.id)}  className={` app__main__list__items__text ${item.completed && 'check'}`}>{item.text}</p>
        <img onClick={()=>deleteItem(item.id)} src={Delete} className='app__main__list__items__img' alt='remove' />
        </div>
        
    })

    return (
    <main className='app__main'>

    <form onSubmit={saveItem}  className='app__main__form'>
    <input className='app__main__form__item app__main__form__item--title' type='text' value={title}  onChange={(e)=>setTitle(e.target.value)}></input>
    <input className='app__main__form__item app__main__form__item--text' type='text' value={textItem} onChange={(e)=>setTextItem(e.target.value)} />
    <Button className='active app__main__form__item app__main__form__item--btn' type='submit' text='Add' />
    </form>

    <div className='app__main__list'>
    {renderedList}
    <button className='app__main__list__btn' onClick={onSaveClick}>Save List</button>
    </div>
    </main>

    )
}

export default List;