import React from 'react'
import "./App.css"
import LoginOrganisms from './components/organisms/LoginOrganisms'
import { Route, Routes } from 'react-router-dom'
import BlogPostForm from './components/organisms/BlogPostForm'
import BlogPosts from './components/organisms/BlogPosts'

const App = () => {
  return (
   <>
   <Routes>
     <Route path='/' element={<LoginOrganisms />} />
     <Route path='/blog' element={<BlogPostForm />} />
     <Route path='/all-post' element={<BlogPosts />} />
   </Routes>
    

   </>
  )
}

export default App
