import React, { useState } from 'react';
import supabase from '../helper/SupabaseClient';
import { Link,useNavigate } from 'react-router-dom';

function login() {
     const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      console.error(error); // for debugging
      setMessage(`❌ ${error.message}`);
    } else {
      setMessage('✅ Login successful!');
      navigate('/dashboard'); // Redirect to dashboard after successful login
    }

    setLoading(false);
  };

  return (
     <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
         <h1>Login</h1>
   
         {message && <p style={{ marginBottom: '10px', color: message.startsWith('✅') ? 'green' : 'red' }}>{message}</p>}
   
         <form onSubmit={handleSubmit}>
           <div style={{ marginBottom: '10px' }}>
             <label htmlFor="email">Email:</label><br />
             <input
               onChange={(e) => setEmail(e.target.value)}
               type="email"
               id="email"
               value={email}
               name="email"
               required
             />
           </div>
   
           <div style={{ marginBottom: '10px' }}>
             <label htmlFor="password">Password:</label><br />
             <input
               onChange={(e) => setPassword(e.target.value)}
               type="password"
               id="password"
               value={password}
               name="password"
               required
             />
           </div>
   
           <button type="submit" disabled={loading}>
             {loading ? 'Logging in...' : 'Login'}
           </button>
         </form>
         <span>Create an account? <Link to="/register">Register</Link></span>
       </div>
     );
}

export default login
