import './App.css';
import axios from 'axios';
import GoogleLogin from "react-google-login";
function App() {
  const responseGoogle = async (response) => {
     let res = await axios.post(
       "http://localhost:5000/api/v1/users/google-authenticate",
       { id_token: response.tokenObj.id_token }
     );
    // console.log(response);
     console.log(res, "response with token")
  };
  return (
    <GoogleLogin
      clientId="635245168971-guk8m8d5fgshe5ga4kt93btv91d6ohfv.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default App;
