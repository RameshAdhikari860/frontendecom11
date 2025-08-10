import React from 'react'

const Navbar = () => {
  return (
    <div>  <div className="w-full flex items-center justify-between">
            <header className="py-4 flex items-start  flex-col">
              <div className="flex items-start gap-2">
                <div>
                  <h1 className="text-xl font-bold">Projects</h1>
                  <h5 className="text-sm text-gray-600" />
                </div>
              </div>
            </header>
            <div className="max-w-sm w-full flex items-center justify-center py-2 gap-2 z-50">
              <div className="w-full flex relative flex-col gap-1">
                <label className="font-semibold text-xs text-gray-400 " /><input type="text" className="border rounded-lg px-3 py-2 mb-0 text-sm w-full outline-none focus:border-primary-500" placeholder="Buscar proyecto por título o ID" required defaultValue />
              </div>
              <div>
                <div className="bg-primary-600 hover:bg-primary-800 text-white flex justify-start items-center gap-1 py-2 px-3  focus:ring-offset-blue-200 w-full transition ease-in duration-200 text-center text-base  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg outline-none cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h7m7 0h-7m0 0V5m0 7v7" />
                  </svg>Crear</div>
              </div>
            </div>
          </div></div>
  )
}

export default Navbar