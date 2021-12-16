import React from 'react'
import './Button.css'
import * as Icon from 'react-icons/fa'



export default function Button() {
    return (
        <div>
            <button  className='btn'>
                <Icon.FaUser/>
                SignUp
            </button>
        </div>
    )
}
