import React from 'react'
import SideBar from './components/SideBar'
import MainPart from './components/mainPart'

const App = () => {
  return (
    <div className='lg:flex bg-zinc-900 min-h-screen'>
      <div className='sm:order-1 md:order-2 '>
        <MainPart />
      </div>
      <div className='lg:order-1 lg:w-[30%] min-h-screen lg:flex '>
        <SideBar />
      </div>
    </div>

  )
}

export default App