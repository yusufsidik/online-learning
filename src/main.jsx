import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <div className='w-full h-screen bg-slate-200 font-poppins'>
    <div className='relative bg-[#FFF2E1]'>
      <Navbar></Navbar>
      <Header></Header>
    </div>
  </div>
  // <React.StrictMode>
  // </React.StrictMode>,
)
