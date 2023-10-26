// src/app/login/login.tsx
import SignIn from '@/components/authen/sign-in/signIn';
import SignUp from '@/components/authen/sign-up/signUp';
import React from 'react';

const Login: React.FC = () => {
  return (
    <div>
      <h1>Đăng nhập</h1>
      
      <SignIn/>
      <SignUp/>
    </div>
  );
};

export default Login;
