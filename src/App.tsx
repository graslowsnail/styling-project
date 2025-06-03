import { useState } from 'react'
import TaskList from './components/TaskList'
 import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

import './App.css'

function App() {

  return (
        <div className='w-full flex justify-center font-[inter]'>
    <Router>
      <Routes>
        <Route path="/" element={<div>

          <nav className='flex flex-col'>
            <Link className='m-1'to='/task-list'>taskList</Link>
            <Link to='/message'>Message Thread</Link>
            <Link to='/post'>Post</Link>
            <Link to='/grid'>Head Grid</Link>
            <Link to='/descriptor'>Tab Descriptor</Link>

          </nav>
        </div>}/>
        <Route path="/task-list" element={<TaskList/>}/>
        <Route path="/other" element={<TaskList/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
