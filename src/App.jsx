import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Employeedashboard from './components/Dashboard/Employeedashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage, setLocalStorage } from './utils/Localstorage'



function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)


  useEffect(() => {


    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }

  }, [])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('logedInUser', JSON.stringify({ role: 'admin' }))

    }
    else if (userData) {
      const employee = userData.find((e) => e.email == email && e.password == password)
      if (employee) {
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('logedInUser', JSON.stringify({ role: 'employee' }))


      }
      else {
        alert("invalid credentials")
      }
    }

  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <Employeedashboard changeUser={setUser} data={loggedInUserData} /> : null)}

      {/* <AuthProvider /> */}
    </>
  )

}
export default App