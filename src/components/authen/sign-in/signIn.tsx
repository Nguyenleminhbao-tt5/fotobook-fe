// src/app/login/component/authen/sign-in/SignIn.tsx
import React, { useState } from 'react';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Xử lý đăng nhập tại đây
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Đăng nhập</button>
    </div>
  );
};

export default SignIn;
