import React from 'react'
import Header from '../../Others/Header'
import TaskListNumbers from '../../Others/TaskListNumbers'
import TaskList from '../../TaskList/TaskList'

function Employeedashboard(props) {
    return (
        <div className='p-10 h-screen bg-[#1c1c1c] text-white-700'>

            <Header changeUser={props.changeUser} data={props.data} />
            <TaskListNumbers data={props.data} />
            <TaskList data={props.data} />

        </div>
    )
}

export default Employeedashboard