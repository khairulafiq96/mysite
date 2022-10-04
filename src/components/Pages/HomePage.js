import React, {Component} from 'react'
import Popup from '../PageComponent/Popup'
import Tile from '../PageComponent/Tile'

class CategoryPage extends Component {

    

    render(){
       const projectData = {
                                "project1" : {
                                    "title" : "bitPasar",
                                    "image" : "image",
                                    "description" : "E-commerce site with ethereum payment",
                                    "website" : "https://bitpasar.herokuapp.com/",
                                    "development" : ['React','Metamask','ethers', 'Tailwind css', 'Python', 'Flask', 'PostgresSQL'],
                                    "deployment" : ['Firebase Storage', "Heroku", "GitHub"],
                                    "github" : "https://github.com/khairulafiq96/bitpasar"
                                },
                                "project2" : {
                                    "title" : "mySentimen",
                                    "image" : "image",
                                    "description" : "Polling web app for the malaysian parliament cabinet",
                                    "website" : "https://mysentimen.herokuapp.com/",
                                    "development" : ['React','Python', 'Flask', 'PostgresSQL'],
                                    "deployment" : ["Heroku", "GitHub"],
                                    "github" : "https://github.com/khairulafiq96/mysentimen"
                                },
                                "project3" : {
                                    "title" : "FaceTag",
                                    "image" : "image",
                                    "description" : "Facial recognition attendance ubuntu app",
                                    "website" : "https://github.com/khairulafiq96/FaceTag",
                                    "development" : ['Python', 'PyGTK', 'Flask'],
                                    "deployment" : null,
                                    "github" : null
                                }          
                            }


        return(
            <div className='flex flex-col space-y-[55px] w-full'>
                <div className='font-semibold sm:text-xl md:text-6xl text-white pt-[55px]'>
                    Full Stack software engineer, currently in career transition. 
                    Previously at Exxonmobil as an Automation Developer - in Malaysia
                </div>
                <div id="project" className='flex flex-col space-y-2'>
                    <div className='text-white text-2xl'>
                        Projects
                    </div>
                    <div className='flex flex-row space-x-4 pt-[25px]'>
                        {Object.keys(projectData).map(function (keyValue, index){
                                return(<Tile key={keyValue} parentToChild={projectData[keyValue]} ></Tile>)
                        })}
                   </div>
                </div>
                <div id="aboutme" className='w-full text-2xl text-white'>
                    <div className='border-solid '>
                        About Me
                    </div>
                    <div className='flex flex-row pt-[25px]'>
                        <div className='w-1/3'>
                            <div>Image</div>
                        </div>
                        <div className='text-sm w-full leading-normal'>
                            <div>
                            Hello, I’m Khairul Afiq.
                            <br></br>
                            <br></br>
                            I’m a full stack web developer, currently on career break and in transition to React. I’ve completed the React Nanodegree program from Udacity and developing personal projects to be grown into real life products.
                            <br></br>
                            <br></br>
                            My previous role was in Exxonmobil Malaysia as an Automation Developer. I was the Full Stack Web and Desktop application developer for the team. 
                            <br></br>
                            <br></br>
                            I’ve developed applications to reduce the manual work required in the IT Risk Management scope for example Internal IT Audits, IT Controls and Security & Compliance.
                            <br></br>
                            <br></br>
                            My work ranges from developing, designing, testing desktop web application interfaces, backend development and deployment of applications. I was also involved in the maintenance and development of tableau & power bi dashboards and UiPath Automation Robot.
                            <br></br>
                            <br></br>
                            <br></br>
                            Some of the notable achievements I acquired during my time in Exxonmobil was :
                            <ol className='list-decimal pl-4'>
                                <li>Key Services Improvement (2020)</li>
                                <li>MyCelerates : Python Mentor (2021)</li>
                                <li>30,000 man hours saved (2021)</li>
                                <li>250,000 man hours saved (2022)</li>
                            </ol>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

}

export default CategoryPage