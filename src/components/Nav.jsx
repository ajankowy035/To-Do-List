import React from 'react';
import Link from './Link';
import './css/Nav.css';

const Nav = () =>{
    return <article className='app__header'>
    <h4 className='app__header__logo'><span className='app__header__logo__to'>TO</span><span className='app__header__logo__do'> DO </span><span className='app__header__logo__list'>LIST</span></h4>
    
    <nav className='app__header__nav'>
    <Link href='/list' className='app__header__nav__item__new'>+ new List</Link>
    <Link href='/all' className='app__header__nav__item app__header__nav__item__my'>My Lists</Link>
    <Link href='/help' className='app__header__nav__item app__header__nav__item__help'>Help</Link>



    </nav>
    </article>
}

export default Nav;