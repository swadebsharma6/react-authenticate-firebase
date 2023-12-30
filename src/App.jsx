
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import './App.css';
import auth from './Firebase/firebase.config';

function App() {
  const[user, setUser] = useState({});
  const[error, setError] = useState(null);
  const googleProvider =  new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleAuth = ()=>{
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user)
      setUser(user);
      setError('');
    })
    .catch(error =>{
      // console.log(error.message);
      setError(error.message);
    })
  }

  const handleGithub =()=>{
    signInWithPopup(auth, githubProvider)
    .then(result =>{
      const user = result.user;
      console.log( 'Github user', user)
      setUser(user);
      setError('');
    })
    .catch(error =>{
      // console.log(error.message);
      setError(error.message);
    })
  }

  const handleSignOut =()=>{
    signOut(auth)
    .then(()=>{
      setUser({})
    })
    .catch(() =>{
     setUser({})
    })
  }

  return (
    <section className=' '>
       <div className=' bg-gray-300'>
       <h1>Firebase Authentication</h1>
       { user.uid && <div>
          <h2>User Name:{user.displayName}</h2>
          <h4>Email:{user.email}</h4>
          <img src={user.photoURL} alt="" /> 
        </div>}
        {error &&  <h4>{error}</h4>}
          <div className='mt-8'>
           {user.email ? <button onClick={handleSignOut}>LogOut</button> : <>
           <button onClick={handleGoogleAuth}>Google</button>
           <button onClick={handleGithub}>Github</button>
           </>
            }
          </div>
       </div>
    </section>
  )
}

export default App
