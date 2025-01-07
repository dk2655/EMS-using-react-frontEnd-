import React from 'react';

function TaskListNumbers({ data }) {
    return (
        <div className="flex mt-10 justify-between gap-5 w-full">
            <div className="rounded-xl flex-1 py-6 px-4 bg-red-400">
                <h2 className="text-3xl text-center font-semibold">{data.taskNumbers.newTask}</h2>
                <h3 className="text-xl font-semibold text-center">New task</h3>
            </div>

            <div className="rounded-xl flex-1 py-6 px-4 bg-green-400">
                <h2 className="text-3xl text-center font-semibold">{data.taskNumbers.active}</h2>
                <h3 className="text-xl font-semibold text-center">Active</h3>
            </div>

            <div className="rounded-xl flex-1 py-6 px-4 bg-blue-400">
                <h2 className="text-3xl text-center font-semibold">{data.taskNumbers.completed}</h2>
                <h3 className="text-xl font-semibold text-center">Completed</h3>
            </div>

            <div className="rounded-xl flex-1 py-6 px-4 bg-yellow-400">
                <h2 className="text-3xl text-center font-semibold">{data.taskNumbers.failed}</h2>
                <h3 className="text-xl font-semibold text-center">Failed</h3>
            </div>
        </div>
    );
}

export default TaskListNumbers;
