import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Company from './Components/Company/Company'
import Benefit from './Components/Benefit/Benefit'
import Ask from './Components/Ask/Ask'
import Everything from './Components/Everything/Everything'
import OurFeatures from './Components/OurFeatures/OurFeatures'
import Integration from './Components/Integration/Integration'
import Testimonial from './Components/Testimonial/Testimonial'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <div className='w-full h-screen font-poppins overflow-x-hidden'>
    <div className='relative bg-[#FFF2E1] px-4'>
      <Navbar></Navbar>
      <Header></Header>
    </div>
    <div className='px-4'>
      <Company></Company>
      <Benefit></Benefit>
      <Ask></Ask>
      <Everything></Everything>
      <OurFeatures></OurFeatures>
    </div>
    <Integration></Integration>
    <Testimonial></Testimonial>
  </div>
  // <React.StrictMode>
  // </React.StrictMode>,
)
