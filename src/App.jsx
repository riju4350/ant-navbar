import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons';
import './App.css'

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
    <div className='menuIcon' style={{backgroundColor:'#29BDE3', height:"3rem", paddingTop:"1.5rem", paddingLeft:"1.5rem"}}>
      <MenuOutlined style={{color:"white", fontSize:24}} onClick={()=>{setOpenMenu(true)}}></MenuOutlined>
    </div>

    <span className='header'>
    <Navbar/>
    </span>
  
    <Drawer 
    placement='left'
    open={openMenu}
    onClose={()=>{setOpenMenu(false)}}
    style={{backgroundColor:"#29BDE3"}}
    >
    <Navbar isInline></Navbar></Drawer>
    </>
  )
}

export default App
