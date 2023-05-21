import React from 'react'
const ProjectItem = (props) => {

  const colors = ["#acc0e9", "#ffc6e3", "#ffd7ae", "#a4d0e7", "#ff97a3", "#9ad9ff", "#73ffd6", "#9fc1ff", "#acc0e9"];
  let i = props.i;
  i %= colors.length;
  const color = colors[i];


  const { tech, date, title, source, link, description, resp } = props
  return (
    <>
      <div className='card d-flex flex-row justify-content-between p-1 '>

        <div className="card-body rounded  " style={{ backgroundColor: `${color}` }} >
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>

          <div className='d-flex links'>
          <a href={source} target='blank' className="codeLink p-2 " data-bs-toggle="tooltip" data-bs-placement="top" title="Source Code"><i className="fa-brands fa-github  fa-2xl"></i></a>
          {
            !resp && <a href='#' className="responsive p-2" data-bs-toggle="tooltip" data-bs-placement="top" title="PC View Only"><i className="fa-solid fa-display fa-xl"></i></a>}
          {
            resp && <a  href='#' className="mx-2 responsive p-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Responsive"><i className="fa-solid fa-check fa-xl"></i></a>
            
          }
          <a href={link} target='blank' className="btn btn-outline-secondary siteLink mx-2 ms-auto p-2 " data-bs-toggle="tooltip" data-bs-placement="top" title="Show Project">Show Project
          <i className="mx-2 fa-solid fa-arrow-pointer"></i></a>


          </div>
        </div>
        <div className='d-flex align-items-center flex-wrap justify-content-center flex-column'>
          <div className='d-flex tech flex-wrap justify-content-center '>
            {
              tech.map((element) => {

                return <img className='my-1 mx-1' key={tech.indexOf(element)} src={`${element}`} style={{ width: "7vw", height: "6vw" }}></img>
              })
            }
          </div>
          <div className='date my-2 mx-2'>{date}</div>
        </div>

      </div>
    </>
  )
}

export default ProjectItem