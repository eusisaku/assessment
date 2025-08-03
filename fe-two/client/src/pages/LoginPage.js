import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3000/login', { username, password });
      if (res.status === 200) {
        navigate('/main');
      }
    } catch (err) {
      setErrMsg('Login gagal. Cek username/password!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-80 space-y-4">
        <input type="text" placeholder="Username"
          onChange={e => setUsername(e.target.value)} className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password"
          onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded" />
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        {errMsg && <p className="text-red-500 text-sm">{errMsg}</p>}
      </div>
    </div>
  );
}
