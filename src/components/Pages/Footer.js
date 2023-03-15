import React, {Component} from 'react'
import '../Styles/Footer.css'

class Footer extends Component {
    render(){
        return(
            <div id="contactme" 
                className=' pb-24 sm:pt-52 pt-28 '>
                <div className='container mx-auto text-white'>
                        <div className='flex flex-row justify-center space-x-[70px] text-sm'>
                            <a className='hover:text-blue-200 hover:drop-shadow-md'
                                href="https://www.linkedin.com/in/kafiqazman/" target="_blank">
                                Linkedin
                            </a>
                            <a className='hover:text-blue-200 hover:drop-shadow-md'
                                href="https://github.com/khairulafiq96" target="_blank">
                                GitHub
                            </a>
                            <a className='hover:text-blue-200 hover:drop-shadow-md'
                                href="mailto:k.afiq.azman@gmail.com" target="_blank">
                                Email
                            </a>
                        </div>
                </div>
            </div>
        
        )
    }

}

export default Footer