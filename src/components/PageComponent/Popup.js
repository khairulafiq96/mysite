import React, {Component} from "react";

function Popup ({visible, onClose, details}){
        return (<div
                    
                    className="fixed w-screen h-screen 
                                flex items-center justify-center
                                inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
                        <div className="fadeInPopup bg-mysite text-white xl:w-1/2 xl:h-2/3 p-10">
                            <div className="flex flex-row items-center">
                                <div className="font-semibold text-2xl float-left">
                                {details["title"]} ({details["date"]})
                                </div>
                                <button className="ml-auto box py-2 px-4 
                                                bg-mysite_light  hover:bg-deepblue hover:text-white
                                                text-black float-right" 
                                    onClick={onClose}>
                                    X
                                </button>
                            </div>
                            <div className="text-4xl py-5">
                                {details["description"]}
                            </div>
                            <a href={details["website"]} target="_blank" 
                                className="text-xl break-all underline hover:text-blue-200">
                                {details["website"]}
                            </a>
                            <div className="py-10 flex flex-row space-x-[70px]">
                                {details['development'] ?
                                                        <div>
                                                            <div>
                                                                Developed with
                                                            </div>
                                                            <div className="pt-2 text-sm">
                                                                {details['development'].map((item)=>{
                                                                    return(<div>{item}</div>)
                                                                })}
                                                            </div>
                                                        </div>
                                                        : null}
                                
                                
                                {details['deployment'] ?
                                                        <div>
                                                            <div>
                                                                Deployed with
                                                            </div>
                                                            <div className="pt-2 text-sm">
                                                                {details['deployment'].map((item)=>{
                                                                    return(<div>{item}</div>)
                                                                })}
                                                            </div>
                                                        </div>
                                                        : null}
                                
                            </div>
                            {details['github'] ? <div className="py-2">
                                                    <div>
                                                        Read the code
                                                    </div>
                                                    <a href={details['github']} target="_blank"
                                                        className="pt-2 underline hover:text-blue-200">
                                                        {details['github']}
                                                    </a>
                                                </div>
                                                :null}
                            
                            
                        </div>
                </div>)
    }

export default Popup