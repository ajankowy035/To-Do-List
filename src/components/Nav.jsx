import React from 'react';
import Link from './Link'
;
const Nav = () =>{
    return <article className='app__header'>
    <h4 className='app__header__logo'><span className='app__header__logo__to'>TO</span><span className='app__header__logo__do'> DO </span><span className='app__header__logo__list'>LIST</span></h4>
    
    <nav className='app__header__nav'>
    <div className='app__header__nav__item app__header__nav__item--new'><Link href='/list' className='app__header__nav__item--new__text'>+ new List</Link></div>
    <Link href='/all' className='app__header__nav__item app__header__nav__item--my'>My Lists</Link>
    <Link href='/help' className='app__header__nav__item app__header__nav__item--help'>Help</Link>
    <Link href='/logout' className='app__header__nav__item app__header__nav__item--logOut'>Log Out</Link>



    </nav>
    </article>
}

export default Nav;