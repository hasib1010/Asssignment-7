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
    const isExist = select.find((courseItem) => courseItem.id === course.id);
    let cost = course.price
    let courseCredit = course.credit
    if (isExist) {
      return alert("Already added")
    } else {
      select.forEach((buyingCourse) => {
        cost += buyingCourse.price;
        // console.log(cost);
        setCourseCost(cost);
      })
      select.forEach((item) => {
        courseCredit += item.credit;
        setTotalCredit(courseCredit)
        if (courseCredit > 20) {
          return alert("You can't add more than 20 credit")
        }
        const restCredit = 20 - courseCredit;
        setRemainCredit(restCredit);
      });
      const selected = [...select, course];
      setSelect(selected)
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
