import React from 'react';
import Header from '../../Others/Header';
import CreateTask from '../../Others/CreateTask';
import AllTask from '../../Others/AllTask';

function AdminDashboard(props) {
    return (
        <div className="w-full h-screen bg-lime-600 p-10 text-white">
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />


        </div>
    );
}

export default AdminDashboard;
