import React,{useEffect, useState} from 'react';
import Delete from './icons/delete.svg';
import Button from './Button';
import './css/List.css';



const List=({editId, updateList, lists, saveLists})=>{
    const [title, setTitle]=useState('List title');//saving the list's title

    const [textItem,setTextItem]=useState('Create a new List Item'); //handling wroten text
    const [items,setItems]=useState([]); //handling added items to the list
    
    const editingList= lists.filter((list)=>window.location.pathname===`/${list.id}`)
    console.log(editingList);

    useEffect(()=>{
        editingList.map(list=>{
            setItems(list.items);
            setTitle(list.title);
        })
    },[])

    //setItems(lists.items)
    const saveItem=(e)=>{
        e.preventDefault();

        if(textItem.length===0)return;

        const newItem={
            id:new Date().getTime(),
            text: textItem,
            completed: false
        }

        setItems([...items].concat(newItem));
        setTextItem('');
    }

    const deleteItem=(id)=>{
        const filteredItems=items.filter(item=>item.id!==id);

        setItems(filteredItems);
    }

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


    const onSaveClick=(e)=>{
        e.preventDefault();

        if(editId!==false){
            updateList(editId,title,items);
            return;
        }

        saveLists(title,items);
    }

    const renderedList = items.map((item)=>{
        return <div key={item.id}  className='app__main__item app__main__item--list__content__items__item '>
        <p onClick={()=>checkItem(item.id)}  className={`app__main__item app__main__item--list__content__items__item--text ${item.completed && 'check'}`}>{item.text}</p>
        <img onClick={()=>deleteItem(item.id)} src={Delete} className='app__main__item app__main__item--list__content__items__item app__main__item app__main__item--list__content__items__item--img' alt='remove' />
        </div>
        
    })

    return (
    <main className='app__main'>
    <article className='app__main__item app__main__item--list'>
    <section className='app__main__item app__main__item--list__content'>
    <form onSubmit={saveItem}  className='app__main__item app__main__item--list__content__form'>
    <input className='app__main__item app__main__item--list__content__form__title' type='text' value={title}  onChange={(e)=>setTitle(e.target.value)}></input>
    <input className='app__main__item app__main__item--list__content__form__text' type='text' value={textItem} onChange={(e)=>setTextItem(e.target.value)} />
    <Button className='active app__main__item app__main__item--list__content__form__btn' type='submit' text='Add' />
    </form>

    <div className='app__main__item app__main__item--list__content__items'>
    {renderedList}
    <button className='app__main__item app__main__item--list__content__items__btn' onClick={onSaveClick}>Save List</button>
    </div>


    </section>
    </article> 
    </main>

    )
}

export default List;