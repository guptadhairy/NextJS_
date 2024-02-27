import CourseCard from '@/components/CourseCard'
import React from 'react'

const page = () => {
  return (
    <div className='h-full md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <h1 className='text-center text-4xl'>Explore Our Courses</h1>
        <CourseCard />
    </div>
  )
}

export default page