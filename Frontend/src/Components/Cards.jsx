import React from 'react'

function Cards({ item }) {
console.log(item)
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-10S duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    
    <img
      src={ item.image }
     // src  = "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?ga=GA1.1.1930339608.1720461754&semt=sph" 
      alt="Shoes"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      { item.name }
      <div className="badge badge-secondary">{ item.category }</div>
    </h2>
    <p>{ item.title }</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${ item.price }</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration:200 px-2 py-1 ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards