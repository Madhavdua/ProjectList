import React from 'react'
import mystyle from './mystyle.css'
import ProjectItem from './ProjectItem'
import { list } from './List'
const Home = () => {
  return (
    <>
      <div className='container py-3'>
        <div className='head py-2'>
          My Projects
        </div>

        {
          list.map((element) => {
            return <div className='my-3' key={list.indexOf(element)}>
              <ProjectItem title={element.title} tech={element.tech} link={element.link} source={element.source} date={element.date} description={element.description} i={list.indexOf(element)} resp={element.resp} />
            </div>
          })
        }

      </div>
    </>
  )
}

export default Home