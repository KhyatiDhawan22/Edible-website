import React from 'react'
const categoryItems = [
  {id:1, title:"Cakes and Pastries", des:"(86 dishes)",image:"/images/home/category/image1.png"},
  {id:2, title:"Ice Creams", des:"(12 frozen desserts)",image:"/images/home/category/image2.png"},
  {id:3, title:"Cookies & Brownies", des:"(48 Snacks)",image:"/images/home/category/image3.png"},
  {id:4, title:"Browse All", des:"(255 Items)",image:"/images/home/category/image4.png"}

]
// py is padding
const Categories = () => {
  return (
    // xl:px-10 make space between the cards 
    <div className='max-w-screen-2xl container mx-auto xl:px-10 px-4 py-16 '> 
      <div className='text-center'>
        <p className='subtitle'>Customer Favorites</p>
        <h2 className='title'>Popular Categories </h2>
      </div>

      {/* category card */}
      <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
       {
        categoryItems.map((item,i) =>(
          <div key={i} className='shadow-lg rounded-xl bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 z-10'>
            <div className='flex w-full mx-auto items-center justify-center '>
              <img src={item.image} alt="" className='bg-Cyan p-5 rounded-full w-28 h-28 '/>
            </div>
            <div className='mt-5 space-y-1 '>
              <h5 className='text-[#383636] font-semibold'>{item.title}</h5>
              <p className='text-[#6A6868]'>{item.des}</p>
            </div>


          </div>

        ))
       }
      </div>

    </div>
  )
}

export default Categories
