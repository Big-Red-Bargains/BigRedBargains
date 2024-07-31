import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import Navbar from '../../components/navbar/navbar';
import axios from 'axios';
import Profile from './profile';
import './signIn.css';


function SignIn() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(null);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      <Navbar />
      <div className='content'>
        <div className='login'>
          {profile ? (
            <div>
              <div className='profile'>
                <img className='avatar' width={150} height={150} src={profile.picture} alt="user image" />
                <p className='name'>{profile.name}</p>
                <p className='email'>{profile.email}</p>
              </div>
              <button onClick={logOut}>Log Out</button>
            </div>
          ) : (
            <button onClick={() => login()}>Sign in with Google 🚀</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;