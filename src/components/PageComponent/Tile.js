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
            <div className="" >
                <div onClick={()=> this.updateState(true)} 
                        className='flex flex-col bg-mysite_light p-2 
                                    sm:w-[400px] sm:h-[300px] w-[300px] h-[200px]
                                  hover:bg-deepblue hover:text-white hover:shadow-xl
                                    hover:cursor-pointer'>
                    <div className='flex items-center h-full w-full'>
                        <img className="object-scale-down h-full w-full p-5" 
                            src={parentToChild['image']}></img>
                    </div>

                </div>
                {setButtonPopup ? <Popup onClose={()=>this.updateState(false)} visible={setButtonPopup} details={parentToChild}></Popup> : <div></div>}
            </div>
        )
    }
}

export default Tile