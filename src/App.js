import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
// import GoogleLogin from "react-google-login";
import FirebaseAuth from './components/FirebaseAuth.js';
import Users from './components/Users';
function App() {
  // const [idToken, setIdToken] = useState("")
  // useEffect(() => {
  //   const idToken = localStorage.getItem("idToken");
  //   setIdToken(idToken)
  // }, [])
  // console.log(idToken)

//   async function getUser(idToken) {
//     const user = await axios.get("http://localhost:5000/api/v1/users", {
//       headers: {
//         Authtoken: idToken ? idToken : "",
//       },
//     });
//     console.log(user, "from get");
//     // setUser(user.data);
//   }
//   useEffect(() => {
// const idToken = localStorage.getItem("idToken");
//       getUser(idToken);

//   }, []);

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
    {/* {idToken &&
    <Users />
    } */}
</>
  );
}

export default App;
