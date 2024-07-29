import React, {useEffect, useState} from 'react'
import Cards from './Cards'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Course() {
  const[book,setBook] = useState([])
    useEffect(()=>{
      const getBook=async()=>{
        try{
          const res = await axios.get("http://localhost:5000/book");
            console.log(res.data)
          setBook(res.data)
        }catch(error){
              console.log(error)
        }
      }
      getBook();
    },[])
  return (
 <>
 <div className="max-w-screen-2xl container max-auto md:px-20 px-4">
<div className='mt-28 items-center justify-center text-center'>
    <h1 className="text-2xl md:text-4xl">
      We are delighted to have you <span className="text-pink-500">Here! :)</span> 
    </h1>
    <p className="mt-12">Books have been a cornerstone of human civilization, serving as vessels for knowledge, culture, and imagination. From ancient scrolls to modern e-books, they have evolved significantly over the centuries. Books offer a unique experience, allowing readers to immerse themselves in different worlds, times, and perspectives. They educate, entertain, and inspire, fostering intellectual growth and empathy. In the digital age, the accessibility of books has expanded, with vast libraries available at the touch of a screen. Despite technological advancements, the tactile pleasure of holding a physical book and turning its pages remains irreplaceable for many.
       </p>
{/* errror */}
<Link to="/">
<button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md  duration-300  hover:bg-pink-700 duration-200">
      Back
      </button>
</Link>
{/* error */}
</div>
<div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
    {
    
     book.map((item)=>(
        <Cards key = {item.id} item={item} />
     ))   

    }
    
</div>
 </div>
 </>
  )
}

export default Course