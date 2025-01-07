import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function AllTask() {

    const [userData, setUserData] = useContext(AuthContext)
    return (
        <div id='AllTask' className='bg-black  p-7 mt-5 rounded-lg '>


            <div className='bg-lime-900 py-2 px-4 mb-5 flex justify-between rounded-lg'>
                <h2 className='w-1/5 '> Employee name </h2>
                <h3 className='w-1/5 px-2 '> New task </h3>
                <h5 className='w-1/5 ' >Active Task</h5>
                <h5 className='w-1/5 ' >Completed</h5>
                <h5 className='w-1/5 ' >Failed</h5>


            </div>

            <div id='empdata' className='  '>
                {userData.map(function (elem, idx) {
                    return <div key={idx} className='bg-gray-900  py-2 px-4 mb-5 flex justify-between rounded-lg '>
                        <h2 className='w-1/5 text-white'>{elem.firstName}</h2>
                        <h3 className='w-1/5 text-blue-500'>{elem.taskNumbers.newTask}</h3>
                        <h5 className='w-1/5 text-yellow-500' >{elem.taskNumbers.active}</h5>
                        <h5 className='w-1/5 text-green-500' >{elem.taskNumbers.completed}</h5>
                        <h5 className='w-1/5 text-red-500' >{elem.taskNumbers.failed}</h5>


                    </div>

                })}

            </div>
        </div>
    )
}

export default AllTask