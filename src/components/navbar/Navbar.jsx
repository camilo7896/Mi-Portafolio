import React from 'react'
import './navbar.module.css'
import { Routes, Route, Link } from 'react-router-dom'
import Styles from './navbar.module.css'
import Skill from '../Skill/Skill'
import { HomePage } from '../home/HomePage'
import Projects from '../projects/Projects'
import AboutMe from '../aboutMe/AboutMe'

export function Navbar() {
  return (
    <>
      <div className={Styles.containerNav}>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown text-amber-400">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-gray-900"
              >
                <li>
                  <Link to="/">Home</Link>
                  <Link to="skill">Skill</Link>
                  <Link to="projects">Projects</Link>
                  <Link to={'AboutMe'}>About Me</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link
              to="/"
              className="btn btn-ghost normal-case text-xl text-red-500 border-amber-400"
            >
              Cristian Garcia
            </Link>
          </div>
          <div className="navbar-end"></div>
        </div>
        <Routes>
          <Route path="skill" element={<Skill />} />
          <Route path="projects" element={<Projects />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}
