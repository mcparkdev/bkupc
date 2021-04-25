import {useState} from 'react'
import Body from '../components/chapel/body'
import Sider from '../components/chapel/sider'

const Chapel = () => {
  const [showSider, setShowSider] = useState(true)
  return (
    <div className="w-screen h-screen flex">
      <Sider/>
      <Body className={`flex`}/>
    </div>
  )
}

export default Chapel
