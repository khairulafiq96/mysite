import React, {Component} from "react";
import Popup from "./Popup";

class Tile extends Component{

    state = {
        "buttonPopup" : false,
        "setButtonPopup" : false
    }

    updateState(bool){
        console.log("Running func")
        this.setState({
            "setButtonPopup" : bool
        })
    }

    render(){

        const {parentToChild} = this.props
        const {setButtonPopup, buttonPopup} = this.state

        const runFunc = () =>{
            console.log("Running function")
        }

        if(setButtonPopup){
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }

        return(
            <div >
                <div onClick={()=> this.updateState(true)} 
                        className='flex flex-col bg-mysite_light p-2 w-[400px] h-[300px] 
                         hover:bg-deepblue hover:text-white hover:shadow-xl'>
                    <div className='flex h-2/3 border-2 border-black-200 border-solid w-full'>
                        Image
                    </div>
                    <div className='flex flex-1 items-center'>
                        <div className='text-4xl '>
                            {parentToChild.title}
                            
                        </div>
                    </div>
                </div>
                {setButtonPopup ? <Popup onClose={()=>this.updateState(false)} visible={setButtonPopup} details={parentToChild}></Popup> : <div></div>}
            </div>
        )
    }
}

export default Tile