import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import postData from "../utils/postData";


interface signInProps {
    login: Dispatch<SetStateAction<boolean>>
    setUsername: Dispatch<SetStateAction<string>>
}

function SignIn(props: signInProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signIn = () => {
    postData('login', {username, password})
    .then(data => {
      const returnedData = data as {login: boolean, username: string}
      console.log(data)
      console.log(returnedData)
      props.login(returnedData.login);
      props.setUsername(returnedData.username)
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
