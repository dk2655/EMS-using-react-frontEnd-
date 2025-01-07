import React, { useState } from 'react';

function Login({ handleLogin }) {




    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        handleLogin(email, password)
        // console.log('Email is', email)
        // console.log('Password is', password);

        setemail("")
        setpassword("")


    }
    return (
        <div className="bg-zinc-900 flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-red-600 rounded-[19px] p-20">
                <div className="flex items-center justify-center text-white mb-20 text-3xl text-center">
                    <h1>
                        Employee Management <br /> System
                    </h1>
                </div>

                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className="flex flex-col items-center justify-center w-[300px]">
                    <input
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value)

                        }}
                        required
                        className="border-2 border-white-600 py-3 px-5 rounded-full text-xl text-white outline-none bg-transparent w-full"
                        placeholder="Enter your email"
                    />

                    <input
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value)
                        }}
                        required
                        className="border-2 border-white-600 py-3 px-5 rounded-full text-xl text-white outline-none bg-transparent mt-4 w-full"
                        type="password"
                        placeholder="Enter your password"
                    />

                    <button
                        className="border-2 border-white-600 py-3 px-5 rounded-[16px] text-xl text-white outline-none bg-red-600 mt-4 w-full"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
