import React from 'react'

function CompleteTask({ data }) {
    return (
        <div className="flex-shrink-0 h-80 w-[400px] bg-green-400 p-5 rounded-xl scroll-snap-align-start">

            <div className='flex justify-between items-center '>
                <h3 className='bg-green-500 px-3 py-1 rounded-md'>{data.category}</h3>

                <h4>{data.taskDate}</h4>
            </div>

            <h2 className='mt-9 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>

            <div className='py-28 '>
                <button className=' w-full h-8 mr-0 bg-red-500'>completed</button>
            </div>
        </div>
    )
}

export default CompleteTask