import React from 'react'
import ProjectItem from './ProjectItem'
import airGoRunImg from '../public/assets/projects/airGoRun.png'
import contactFormAMPImg from '../public/assets/projects/contactFormAMP.png'
import blogAPIImg from '../public/assets/projects/blogAPI.png'
import NatureImg from '../public/assets/projects/nature.png'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p>Projects</p>
            <h2>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem title='AirGo Run' backgroundImg={airGoRunImg}  projectUrl='/airGoRun' />

                <ProjectItem title='Contact Form' backgroundImg={contactFormAMPImg}  projectUrl='/contactForm' />  

                <ProjectItem title='Blog API' backgroundImg={blogAPIImg}  projectUrl='/blogAPI' />   

                <ProjectItem title='Nature' backgroundImg={NatureImg}  projectUrl='/nature' />       

            </div>
        </div>
    </div>
  )
}

export default Projects