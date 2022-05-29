import React from 'react'
import './App.css'
import Auth from './pages/Auth/Auth'
import Registration from './pages/Registration/Registration'
import WorkSpace from './pages/WorkSpace/WorkSpace'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Routes>
            {/* <>
                <NavPanel></NavPanel>
            </> */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/workSpace" element={<WorkSpace />} />
        </Routes>
    )
}

export default App
