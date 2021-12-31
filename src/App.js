import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
// import GoogleLogin from "react-google-login";
import FirebaseAuth from './components/FirebaseAuth.js';
function App() {
  const [user,setUser] = useState([])
  console.log(user)
  // const responseGoogle = async (response) => {
  //    let res = await axios.post(
  //      "http://localhost:5000/api/v1/users/google-authenticate",
  //      { id_token: response.tokenObj.id_token }
  //    );
  //   // console.log(response);
  //    console.log(res, "response with token")
  // };
  async function getUser() {
    const user = await axios.get("http://localhost:5000/api/v1/users");
    setUser(user.data)
  }
  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
    {/* <GoogleLogin
      clientId="635245168971-guk8m8d5fgshe5ga4kt93btv91d6ohfv.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    /> */}
    <FirebaseAuth />
</>
  );
}

export default App;
