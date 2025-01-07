import React from 'react'

function AcceptTask({ data }) {
    return (
        <div className="flex-shrink-0 h-80 w-[400px] bg-red-400 p-5 rounded-xl ">

            <div className='flex justify-between items-center '>
                <h3 className='bg-red-500 px-3 py-1 rounded-md '>{data.category}</h3>

                <h4>{data.taskDate}</h4>
            </div>

            <h2 className='mt-9 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>

            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as failed</button>
            </div>
        </div>
    )
}

export default AcceptTask