import React from 'react'
import './HomeScreen.css'
import Posts from '../Components/Posts Components/Posts'

const HomeScreen = () => {
    return (
    <>
        <div className='home-screen'>
            <div className='recent-post-heading'>
                <h2>Recent Posts</h2>
            </div>
            <div className='post-button'>
                <h2>Post Button</h2> 
            </div>
            <div className='user-name'>
                <p>signed in as <strong>@malik_258</strong></p>
            </div>
        </div>

        
    </>
    )
}

export default HomeScreen
