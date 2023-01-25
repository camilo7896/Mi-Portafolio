import React, { useState } from 'react'
// Importacion de json de projectos
import ProjecJson from '../components/data/projects.json'

export default function ProjectState() {
  const [projectList, setProjectList] = useState(ProjecJson)

  return (
    <>
      <div>
        <h1 className="m-11 text-4xl">Project</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          praesentium, enim non fuga ullam aliquam quidem suscipit! Ad itaque,
          odit, nam facilis architecto voluptatibus nulla suscipit maiores
          corporis corrupti facere. Architecto minus facilis iusto assumenda sed
          quaerat ut eveniet exercitationem, magnam, nesciunt, rerum rem. Cum ad
          eius quaerat quae unde beatae cumque saepe, odio natus modi earum
          veniam quisquam sint! Expedita excepturi suscipit officia ea incidunt
          voluptas aperiam quia eius fuga quisquam reiciendis iure eos maiores
          provident, esse quas repellendus veritatis voluptatum sapiente eveniet
          eaque accusantium molestias. Incidunt, officiis odit. Harum eius
          provident ea voluptate quod explicabo nostrum maiores nam dolore,
          distinctio, perferendis, officiis doloremque maxime. Eum magni
          doloribus excepturi deserunt, laboriosam mollitia asperiores
          dignissimos quidem quis incidunt quas facere! Ratione sint nostrum
          perspiciatis officia saepe dolorum perferendis dignissimos
          repellendus! Praesentium quasi eveniet tenetur ducimus mollitia
          molestias ratione at ex, vero quibusdam doloribus ipsa veniam
          repellendus consequuntur ipsum sed perspiciatis?
        </p>
        {projectList.Projects.map((item) => {
          return (
            <div className="flex flex-row flex-wrap justify-center m-20">
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
                  <div className="badge badge-outline ">Github</div>
                  <div className="badge badge-outline">Demo</div>
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
