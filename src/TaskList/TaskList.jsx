import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import Failedtask from './Failedtask';

function TaskList({ data }) {
    return (


        <div
            id="TaskList"
            className="h-[35%] w-full  flex items-center justify-start flex-nowrap gap-5 rounded-lg mt-10 overflow-x-auto">

            {data.tasks.map((e, idx) => {
                if (e.active) {
                    return <AcceptTask key={idx} data={e} />
                }
                if (e.newTask) {
                    return <NewTask key={idx} data={e} />
                }
                if (e.completed) {
                    return <CompleteTask key={idx} data={e} />
                }
                if (e.failed) {
                    return <Failedtask key={idx} data={e} />
                }
            })}



        </div>


    )
}

export default TaskList;
