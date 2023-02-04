import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import axios from "axios";


interface signInProps {
    login: Dispatch<SetStateAction<boolean>>
    setUsername: Dispatch<SetStateAction<string>>
}

function SignIn(props: signInProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signIn = () => {
    axios.post(`${import.meta.env.VITE_SERVER_URL}/login`, {username, password})
    .then(data => {
      console.log(data)
      props.login(data.data.login);
      props.setUsername(data.data.username)
    }).catch(err=> {
        console.error(err)
    });
  };

  return (
    <div>
      username:{" "}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      password:{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>sign in</button>
    </div>
  );
}

export default SignIn;
