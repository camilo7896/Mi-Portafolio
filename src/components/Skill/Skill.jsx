import React, { useState } from 'react'
import DataSkill from '../data/skill.json'



export default function Skill() {
  const [skill, setSkill] = useState(DataSkill)


  return (
    <>
      <div className='max-h-max'>
        <h1 className="mt-8 text-2xl">Skill's</h1>
        <div className="m-16">
          <p>
            I like to code, build websites, from scratch. Bringing sites to
            life. My skills are the following: HTML, CSS, JS, React JS,
            Bootstrap, TAILWIND CSS, DAISYIU.
          </p>
        </div>
        <div className='flex flex-wrap  justify-center m-16'>
          {skill.skill.map((item) => {
            return (
              <div className="flex justify-around flex-row ">
                <div className='flex flex-row '>
                  <div className="flex flex-row">
                    <img id='icon_skill' className="w-20 animate-spin mr-3 flex-row " src={item.img} alt={item.name} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
