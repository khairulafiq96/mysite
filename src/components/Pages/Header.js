import React, {Component} from 'react'
import { Link } from 'react-scroll'
import '../Styles/Header.css'

class Header extends Component {
    render(){

        return(
            <div className='backdrop-blur bg-mysite py-16'>
                <div className='container mx-auto text-white'>
                        <div className='float-left text-2xl font-semibold'>Khairul Afiq Azman</div>
                        <div className='float-right text-2xl flex flex-row space-x-[70px]'>
                            <Link className='hover:text-blue-200 hover:cursor-pointer' 
                                to="project" smooth={true}>
                                Projects</Link>
                            <Link className='hover:text-blue-200 hover:cursor-pointer' 
                                to="aboutme" smooth={true}>
                                    About</Link>
                            <a className='hover:text-blue-200 hover:cursor-pointer'
                                href='https://kafiqazman.tumblr.com/'
                                target="blank">
                                Archive</a>
                        </div>
                </div>
            </div>
        )
    }

}

export default Header