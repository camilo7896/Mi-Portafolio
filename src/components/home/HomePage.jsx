import React from 'react'

export function HomePage() {
  return (
    <>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <img
              src="https://i.ibb.co/NFg7DcL/pngegg.png "
              className="max-w-sm rounded-lg shadow-2xl animate-bounce "
            />
            <div>
              <h1 className="text-5xl font-bold text-amber-400 mb-4">
                Hello ! my name is Cristian Garcia
              </h1>
              <p className="py-6">front end developer</p>
              <button className="btn text-red-900 bg-amber-400">
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
