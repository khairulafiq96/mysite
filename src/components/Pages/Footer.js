import React, {Component} from 'react'
import '../Styles/Footer.css'

class Footer extends Component {
    render(){
        return(
            <div className='backdrop-blur bg-mysite py-16'>
                <div className='container mx-auto text-white'>
                        <div className='float-left text-2xl font-semibold'>Khairul Afiq Azman</div>
                        <div className='float-right text-2xl flex flex-row space-x-[70px]'>
                            <div>Projects</div>
                            <div>About</div>
                            <div>Archive</div>
                        </div>
                </div>
            </div>
        )
    }

}

export default Footer