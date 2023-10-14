import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Courses from './Component/Coursess/Courses'
import Bookmark from './Component/Bookmark/Bookmark'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className='bg-[#F3F3F3]'>
      <Header></Header>
      <div className='flex container mx-auto'>
        <div>
          <Courses></Courses>
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
