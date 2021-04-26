import {useState} from 'react'
import Body from '../components/chapel/body'
import Sider from '../components/chapel/sider'

const Chapel = () => {
  const [showSider, setShowSider] = useState(true)
  const toggleSider = () => {
    setShowSider(prevShowSider => !prevShowSider)
  }
  const siderProps = {showSider, setShowSider, toggleSider}
  return (
    <div className="w-screen h-screen flex">
      <Sider {...siderProps} />
      <Body />
      <button 
        className="md:hidden quickbutton fixed bottom-8 right-8 h-24 w-24 bg-blue-600 flex justify-center items-center rounded-full focus:bg-blue-700 focus:outline-none transition"
        onClick={toggleSider}
      >
        {showSider ? 
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        :
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        }
      </button>
    </div>
  )
}

export default Chapel
