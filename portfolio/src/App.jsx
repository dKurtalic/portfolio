import React from 'react'
import SideBar from './components/SideBar'
import MainPart from './components/mainPart'

const App = () => {
  return (
    <div className='lg:flex bg-zinc-900'>
      <div className='sm:order-1 md:order-2'>
        <MainPart />
      </div>
      <div className='lg:order-1 lg:w-[30%] lg:h-full sm:order-2 md:order-2'>
        <SideBar />
      </div>
    </div>

  )
}

export default App