import './App.css'
import { Route,Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ResumeGenerator from './pages/ResumeGenerator'
import UserForm from './pages/UserForm'
import History from './pages/History'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'
import ViewResume from './pages/ViewResume'
function App() {

  return (
    <>
    <Header/>
     <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/resume' element={<ResumeGenerator/>}/>
        <Route path='/userform' element={<UserForm/>}/>
        <Route path='/history' element={<History/>}/>
        {/* dynamic url-prefix with colon (:) 7dymamic value will be stored in variable after colon in 'id'eg=':id' */}
        <Route path='/resume/:id/view' element={<ViewResume/>}/>
        <Route path='/*' element={<Pnf/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
