import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Courses from './Component/Coursess/Courses'
import Bookmark from './Component/Bookmark/Bookmark'

function App() {
  const [select, setSelect] = useState([]);
  const handleSelect = (course) =>{
    console.log('selecting soon');
  }
  return (
    <><div className='bg-[#F3F3F3]'>
      <Header></Header>
      <div className='flex container mx-auto'>
        <div>
          <Courses handleSelect={handleSelect}></Courses>
        </div>
        <div>
          <Bookmark></Bookmark>
        </div>
      </div>
    </div>





    </>
  )
}

export default App
