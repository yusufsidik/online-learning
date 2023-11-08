import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Company from './Components/Company/Company'
import Benefit from './Components/Benefit/Benefit'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <div className='w-full h-screen font-poppins overflow-x-hidden'>
    <div className='relative bg-[#FFF2E1] px-4'>
      <Navbar></Navbar>
      <Header></Header>
    </div>
    <div className='px-4'>
      <Company></Company>
      <Benefit></Benefit>
    </div>
  </div>
  // <React.StrictMode>
  // </React.StrictMode>,
)
