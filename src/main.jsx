import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Company from './Components/Company/Company'
import Benefit from './Components/Benefit/Benefit'
import Ask from './Components/Ask/Ask'
import Everything from './Components/Everything/Everything'
import Features from './Components/Features/Features'
import Tool from './Components/Tool/Tool'
import Quiz from './Components/Quiz/Quiz'
import ClassManagement from './Components/Class/ClassManagement'
import Discuss from './Components/Discuss/Discuss'

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
      <Features></Features>
      <Tool></Tool>
      <Quiz></Quiz>
      <ClassManagement></ClassManagement>
      <Discuss></Discuss>
    </div>
  </div>
  // <React.StrictMode>
  // </React.StrictMode>,
)
