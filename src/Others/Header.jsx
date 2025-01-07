import React from 'react'

function Header(props) {

    // const [username, setUsername] = useState('')

    // if (!data) {
    //     setUsername('Admin')
    // }
    // else {
    //     setUsername(data.firstName)
    // }

    const logoutUser = () => {
        localStorage.setItem('loggedInUser', '')
        // window.location.reload() (this reload function violates the rules of react because in react ther is mo reloading and without relloading pages gets changed and data gets passed so that is why we are using props.changeUser)
        props.changeUser('')

    }

    return (
        <div className='flex items-end justify-between text-white '>
            <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl font-medium'> username ✌️</span> </h1>
            <button onClick={logoutUser} className='bg-red-500 px-5 py-2 rounded-[6px]'>Log Out</button>
        </div>
    )
}

export default Header