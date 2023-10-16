import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Courses from './Component/Coursess/Courses'
import Bookmark from './Component/Bookmark/Bookmark'

function App() {
  const [select, setSelect] = useState([]);
  const [courseCost, setCourseCost] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainCredit, setRemainCredit] = useState(20);
  const handleSelect = (course) => {
    if (select.includes(course)){
      return alert("Item Already added");
    }
    
    if(remainCredit!== 0 && remainCredit>=course.credit){
      const newSelect= [...select, course];
      setSelect(newSelect);
      setRemainCredit(remainCredit-course.credit);
      setTotalCredit(totalCredit+course.credit);
      setCourseCost(courseCost+course.price);
    }
  }
  return (
    <><div className='bg-[#F3F3F3]'>
      <Header></Header>
      <div className='lg:flex lg:flex-row md:flex-col flex-col container mx-auto'>
        <div>
          <Courses handleSelect={handleSelect}></Courses>
        </div>
        <div>
          <Bookmark
            select={select}
            courseCost={courseCost}
            remainCredit={remainCredit}
            totalCredit={totalCredit}
          ></Bookmark>
        </div>
      </div>
    </div>





    </>
  )
}

export default App
