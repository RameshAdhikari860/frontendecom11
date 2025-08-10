import React from 'react'

const Product = () => {
  return (
    <div>
 <table className="min-w-full bg-white border undefined">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 h-6 sticky top-0 z-10 transition-all ease-in-out ">
                <tr>
                  <th className="px-2 2xl:px-6 py-3 bg-gray-200 w-8">Image </th>
                  
                  <th className="px-2 2xl:px-6 py-3 bg-gray-200">Product Name</th>
                  <th className="px-2 2xl:px-6 py-3 bg-gray-200">Project</th>
                  <th className="px-2 2xl:px-6 py-3 bg-gray-200">Create At</th>
                  <th className="px-2 2xl:px-6 py-3 bg-gray-200">State</th>
                  {/* <th className="px-2 2xl:px-6 py-3 bg-gray-200 w-6" /> */}
                </tr>
              </thead>
              <tbody className="undefined select-none">
               
                <tr className="border-b">
                
                  <td className="px-6 py-1.5 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-2"><img src="https://firebasestorage.googleapis.com/v0/b/amethgalarcio.appspot.com/o/images%2Foriginal-ef2cfaa92caa023ef8e6f3c14b2a79c7.png?alt=media&token=a83d97a2-611f-41d6-ad85-7ea8d5c6c2c2" alt="image" className="aspect-square rounded-lg object-cover h-16" />
                     
                    </div>
                  </td>
                  <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">Radio</td>
                  <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">vie, 25 oct de 2024</td>
                 
                  <td className="px-6 py-1.5 whitespace-nowrap text-sm   flex justify-center items-center h-full gap-2">
                    <div className="relative inline-block text-left select-none ">
                      <div className="rounded-full py-4 hover:bg-gray-100 focus:outline- cursor-pointer "><svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2">
                          </path>
                        </svg></div>
                    </div>
                  </td>
                   <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                    <button className="text-xs font-bold me-2 px-2.5 shadow py-2  bg-green-200 text-green-600 font-semibold rounded-lg shadow">Edit</button>
                    <button className="text-xs font-bold me-2 px-2.5 shadow py-2  bg-red-400 text-white font-bold rounded-lg shadow">Delete</button>
                  </td>
                </tr>
               
              </tbody>
            </table>

    </div>
  )
}

export default Product




