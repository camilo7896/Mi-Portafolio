import React, { useState } from 'react'
import DataSkill from '../data/skill.json'

export default function Skill() {
  const [skill, setSkill] = useState(DataSkill)

  return (
    <>
      <div className="max-h-max">
        <h1 className="mt-8 text-2xl">Habilidades tecnicas</h1>
       
        <div className="flex flex-wrap  justify-center m-16">
          {skill.skill.map((item) => {
            return (
              <div key={item.id} className="">
                <div className="flex flex-row ">
                  <div className="">
                    <img
                      className="w-20 animate-spin mr-3 flex-col "
                      src={item.img}
                      alt={item.name}
                    />
                  </div>                 
                </div>
              </div> //end
            )
          })}
         
        </div>
        <div className="flex flex-wrap  justify-center m-16">
          {skill.skill.map((item) => {
            return (
              <div key={item.id} className="">
                <div>
                  <h2> <strong>{item.name} :</strong> </h2>
                    <p> {item.description}</p>
                    <br/>
                  </div>
              </div> //end
            )
          })}
         
        </div>
       
      </div>
    </>
  )
}
