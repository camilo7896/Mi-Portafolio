import React from 'react'

export function Footer() {
  return (
    <>
      <div>
        <footer className="footer footer-center p-10 bg-black rounded">
          <div className="grid grid-flow-col gap-4 text-amber-400">
            <a className="link link-hover text-amber-400">About us</a>
            <a className="link link-hover text-amber-400">Contact</a>
            <a className="link link-hover text-amber-400">Projects</a>
            <a className="link link-hover text-amber-400">Skills</a>
          </div>

          <div>
            <p className="text-amber-400">
              Copyright © 2023 - Cristian Camilo Garcia Gutierrez
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
