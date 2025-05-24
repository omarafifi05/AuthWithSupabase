import React, { useState } from 'react';
import supabase from '../helper/SupabaseClient';
import { Link,useNavigate } from 'react-router-dom';
import gifVideo from '../assets/gif.mp4'; // Adjust the path as necessary
function Dashboard() {
    const navigate = useNavigate();
    const signout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error); // for debugging
        } else {
            console.log('Sign out successful');
            navigate('/login'); // Redirect to home page after sign out
        }
    }



  return (
    <div>
<video
  src={gifVideo}
  autoPlay
  loop
  muted
  playsInline
  style={{ width: '300px', height: 'auto' }}
/>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <p>Here you can manage your account settings, view your activity, and more.</p>
      <p>Feel free to explore the features available to you.</p>
      <button onClick={signout}> Sign Out</button>
    </div>
  )
}

export default Dashboard
