import React, { useEffect, useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Auth from './Auth'
import AddBlog from './AddBlog'
import Blogs from './Blogs'
import BlogDetails from './BlogDetails'
import UserBlogs from './UserBlogs'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from "./store";




function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn) 
  const dispatch = useDispatch()
  const [isSignup, setisSignup] = useState(false)
  //console.log(isLoggedIn) 
  useEffect(() => {
    if ( localStorage.getItem("userId")){
      dispatch(authActions.signin())
    }
  }, [])
  

  return (
    <React.Fragment>
      <header>
        {/* <Header isLoggedIn={isLoggedIn} /> */}
        <Header isSignup={isSignup} setisSignup={setisSignup} />
      </header>
      <main>
        <Routes>
          { !isLoggedIn ? <Route path="/auth" element={<Auth isSignup={isSignup} setisSignup={setisSignup} />} ></Route>:
          <>
           <Route path="/blogs" element={<Blogs />} ></Route>
          <Route path="/blogs/add" element={<AddBlog />} ></Route>
          <Route path="/myBlogs" element={<UserBlogs />} ></Route>
          <Route path="/myBlogs/:id" element={<BlogDetails />} ></Route>
          </>}
        </Routes>
      </main>
    </React.Fragment>
  )
}

export default App
