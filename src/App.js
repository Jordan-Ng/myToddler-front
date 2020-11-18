import Navebar from './components/Navbar'
import Login from './components/Login'
import { Route, useHistory} from 'react-router-dom'
import UserDashboard from './components/UserDashboard'
import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import TeachDashboard from './components/TeachDashboard'
import AttendanceForm from './components/AttendanceForm'
import QRverify from './components/QRverify'
import { ToastContainer, toast } from 'react-toastify'
import Logout from './components/Logout'

toast.configure()

function App() {
  const [isloggedIn, setIsloggedIn] = useState(false)
  const {user, isAuthenticated} = useAuth0()  

  return (
    <>
      <Route exact path='/mytoddler-front'>
        <div style={{ height: '100vh', width: '100vw', background: 'lightBlue' }}>
          <Login />
        </div>
      </Route>

      <Route exact path='/user/dashboard'>
        <UserDashboard />
      </Route>

      <Route exact path='/teacher/dashboard'>
      <TeachDashboard />
      </Route>

      <Route path='/teacher/attendance/:uuid4/:inst/:name/:guardian_id'>
      <AttendanceForm />
      </Route>

      <Route path='/teacher/dash/:uuid4'>
      <QRverify />
      </Route>

      <Route exact path='/logout'>
        <Logout />
      </Route>
    </>
  );
}

export default App;
