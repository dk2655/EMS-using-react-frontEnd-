import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'


function CreateTask() {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')

    const [taskDate, setTaskDate] = useState('')

    const [taskDescription, setTaskDescription] = useState('')

    const [assignTo, setAssignTo] = useState('')

    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDate, taskDescription, category, active: false, newTask: true, failed: false, completed: false })


        const data = userData
        console.log(data);


        data.forEach(function (elem) {
            if (assignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1


            }
        })

        setUserData(data)

        setAssignTo("")
        setCategory("")
        setTaskDate("")
        setTaskDescription("")
        setTaskTitle("")

    }
    return (
        <div>
            <div className="mt-10">
                <form className="bg-black p-8 rounded-lg shadow-md">
                    {/* Main Input Fields */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* Task Title */}
                        <div className="flex flex-col">
                            <label className="text-lg font-semibold mb-2">Task Title</label>
                            <input
                                value={taskTitle}
                                onChange={(e) => {
                                    setTaskTitle(e.target.value)
                                }}
                                type="text"
                                placeholder="UI design"
                                className="bg-gray-700 text-white border border-green-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-400 text-xl"
                            />
                        </div>

                        {/* Date */}
                        <div className="flex flex-col">
                            <label className="text-lg font-semibold mb-2">Date</label>
                            <input
                                value={taskDate}
                                onChange={(e) => {
                                    setTaskDate(e.target.value)
                                }}
                                type="date"
                                className="bg-gray-700 text-white border border-green-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-400 text-xl"
                            />
                        </div>

                        {/* Assign To */}
                        <div className="flex flex-col">
                            <label className="text-lg font-semibold mb-2">Assign To</label>
                            <input
                                value={assignTo}
                                onChange={(e) => {
                                    setAssignTo(e.target.value)
                                }}
                                type="text"
                                placeholder="Employee name"
                                className="bg-gray-700 text-white border border-green-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-400 text-xl"
                            />
                        </div>

                        {/* Category */}
                        <div className="flex flex-col">
                            <label className="text-lg font-semibold mb-2">Category</label>
                            <input
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                type="text"
                                placeholder="Design, Dev, etc."
                                className="bg-gray-700 text-white border border-green-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-400 text-xl"
                            />
                        </div>
                    </div>

                    {/* Description Field */}
                    <div className="mt-6">
                        <label className="text-lg font-semibold mb-2 block">Description</label>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => {
                                setTaskDescription(e.target.value)
                            }}
                            cols="30"
                            rows="5"
                            placeholder="Enter task description..."
                            className="bg-gray-700 text-white border border-green-500 rounded-lg px-4 py-2 w-full outline-none focus:ring-2 focus:ring-green-400 resize-none text-xl"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 text-center">
                        <button onClick={(e) => {
                            submitHandler(e)
                        }}
                            type="submit"
                            className="bg-lime-900 hover:bg-lime-900 text-black font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 text-2xl"
                        >
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask