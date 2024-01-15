import React ,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import './auth.css'
import { getAuth,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 
import { Firebase, db } from '../../firebase/config';

function Signup() {
  const navigate = useNavigate()
  const auth = getAuth(Firebase)
  const [username,setUsename] = useState('')
  const [email,setEmail] = useState('')
  const [mobile,setMobile] = useState('')
  const [password,setPassword] = useState('')
  // const auth = getAuth()
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Check if updateProfile method is available
      if (user.updateProfile) {
        await user.updateProfile({
          displayName: username
        });
      }
  
      await addDoc(collection(db, 'users'), {
        userId: user.uid,
        username: username,
        mobile: mobile
      }).then(()=>{
        console.log("called history");
        navigate('/login')
      })
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error code: ${errorCode}, Message: ${errorMessage}`);
    }
  };
  
  
  return (
    <>
      <div className='  main-Area '>

        <div class="card  col-md-3 col-10  box-area">
          <div class="card-body">
            <div className='d-flex flex-column align-items-center'>
              {/* <source type="image/webp" srcset="https://statics.olx.in/external/base/img/loginEntryPointPost.webp" /> */}
              <img src="https://statics.olx.in/external/base/img/loginEntryPointPost.png" className="topicon" alt="" />

              <p className='text-center icon-text'>Help us become one of the safest places to buy and sell</p>
            </div>
            <div className='input-area '>
              <form onSubmit={handleSubmit}>
                <input className='px-3 mt-2' value={username} type="text" onChange={(e)=>setUsename(e.target.value)} placeholder='User Name' />
                <input className='px-3 mt-2' value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder='Email' />
                <input className='px-3 mt-2' value={mobile} onChange={(e)=>setMobile(e.target.value)}  type="number" placeholder='Mobile' />
                <input className='px-3 mt-2' value={password} onChange={(e)=>setPassword(e.target.value)}  type="text" placeholder='Password' />
                <button type='submit' className='postBtn mt-2'>Create Account</button>
              </form>
            </div>
            <hr />
            <div>
              <p className='text-center acText'>have an account already</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Signup