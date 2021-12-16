import React, {useState,useEffect} from 'react'
import * as Icons from 'react-icons/fa'
import './Navbar.css'
import Button from './Button'
import {navItems} from './NavItems'

export default function Navbar() {
    const [mobile, setMobile] = useState(false)
    const [sidebar,setSidebar] = useState(false)

    useEffect(()=>{
        if(window.innerWidth < 1065){
            setMobile(true)
        }
    },[])

    
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return (
        <>
        <nav className='navbar'>
             <a href="/" className='navbar-logo' onClick={() => setSidebar()}>
                 <Icons.FaHome/>
                 NONU
                 </a>
            {!mobile &&(
                <ul className='nav-items'>
                    {navItems.map((item) =>{
                        return(
                            <li key={item.id} className={item.nName}>
                                <a href={item.path}>
                                    {item.icon}
                                    <span>
                                    {item.title}
                                    </span>
                                    </a>
                            </li>
                        )
                    })}
                </ul>
            )}
            {!mobile && <Button/>}
            {mobile &&(
                <div className="sidebar-toggle">
                    {sidebar ? (
                        <Icons.FaTimes className='sidebar-toggle-logo' onClick={()=> setSidebar(!sidebar)}/>
            ):(<Icons.FaBars className='sidebar-toggle-logo' onClick={()=> setSidebar(!sidebar)}/>)}
                </div>
            )}
        </nav>
        <div className={sidebar ? 'sidebar active':'sidebar'}>
             <ul className='sidebar-items'>
                    {navItems.map((item)=>{
                        return(
                            <li key={item.id} className={item.sName}>
                                <a href={item.path} >{item.icon}<span>{item.title}</span></a>
                            </li>
                    )})}
            </ul>
            <Button onClick={()=> setSidebar(false)}/>
        </div>
       </>
    )
}
