import React, {Component} from 'react'
import { Link } from 'react-scroll'
import '../Styles/Header.css'

class Header extends Component {
    render(){

        return(
            <div className='fadeInElement backdrop-blur bg-mysite w-full sm:py-16 py-8'>
                <div className='flex text-xs  sm:text-2xl container mx-auto text-white'>
                        <div className='font-semibold'>Khairul Afiq Azman</div>
                        <div className='ml-auto flex flex-row sm:space-x-[70px] space-x-[20px]'>
                            <Link className='hover:text-blue-200 hover:cursor-pointer' 
                                to="contactme" smooth={true}>
                                Contact Me</Link>
                            <Link className='hover:text-blue-200 hover:cursor-pointer' 
                                to="project" smooth={true}>
                                Projects</Link>
                            <Link className='hover:text-blue-200 hover:cursor-pointer' 
                                to="aboutme" smooth={true}>
                                    About</Link>
                            <a className='hover:text-blue-200 hover:cursor-pointer'
                                href='https://kafiqazman.tumblr.com/'
                                target="_blank">
                                Archive</a>
                        </div>
                </div>
            </div>
        )
    }

}

export default Header