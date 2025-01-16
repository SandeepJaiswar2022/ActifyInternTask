import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './Components/Index'

function Layout() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
