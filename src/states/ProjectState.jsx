import React, { useState } from 'react'
// Importacion de json de projectos
import ProjecJson from '../components/data/projects.json'

export default function ProjectState() {
  const [projectList, setProjectList] = useState(ProjecJson)

  return (
    <>
      <div>
        <h1 className="m-11 text-4xl">Proyectos</h1>
        <p className='ml-5'>
        A lo largo de mi proceso de aprendizaje, he tenido la oportunidad de trabajar en diversos proyectos, donde he aplicado los conocimientos adquiridos y desarrollado mis habilidades. Me gustaría compartir algunos de estos proyectos contigo:            </p>
        <br/>          
        <hr/>
        {projectList.Projects.map((item) => {
          return (
            <div key={item.id} className="flex flex-row flex-wrap justify-center m-20">
              <div className="rounded-md">
                <figure>
                  <img className="w-96" src={item.img} alt={item.name} />
                </figure>
              </div>
              <div className="card-body">
                <h2 className="card-title mb-5">
                  {item.name}
                  {/* <div className="badge badge-secondary">NEW</div>*/}
                </h2>
                <p>{item.description}</p>
                <div className="card-actions justify-center">
                  <div className="badge badge-outline ">
                    {' '}
                    <a href={item.gitHub} target="_blank">
                      View GitHub
                    </a>
                  </div>
                  <div className="badge badge-outline">
                    {' '}
                    <a href={item.despliegue} target="_blank">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <hr />
        <br />
      </div>
    </>
  )
}
