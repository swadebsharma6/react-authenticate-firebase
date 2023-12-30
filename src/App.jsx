
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './App.css';
import auth from './Firebase/firebase.config';

function App() {
  const googleProvider =  new GoogleAuthProvider();

  const handleGoogleAuth = ()=>{
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error =>{
      console.log(error.message)
    })
  }

  return (
    <section>
      <h2>Firebase Authentication</h2>

      <div>
        <button onClick={handleGoogleAuth}>Google</button>
      </div>
    </section>
  )
}

export default App
