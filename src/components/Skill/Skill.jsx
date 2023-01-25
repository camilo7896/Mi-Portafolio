import React, { useState } from 'react'
import DataSkill from '../data/skill.json'

export default function Skill() {
  const [skill, setSkill] = useState(DataSkill)
  console.log(skill)
  return (
    <>
      <div>
        <h1 className="mt-8 text-2xl">Skill's</h1>
        <div className="m-8">
          <p>
            I like to code, build websites, from scratch. Bringing sites to
            life. My skills are the following: HTML, CSS, JS, React JS,
            Bootstrap, TAILWIND CSS, DAISYIU.
          </p>
        </div>
        <div>
          {skill.skill.map((item) => {
            return (
              <div className="flex justify-around">
                <div>
                  <div className="flex justify-center">
                    <img className="w-20" src={item.img} alt={item.name} />
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
