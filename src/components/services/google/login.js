import { GoogleLogin } from "react-google-login";

const clientId =
  "325518792405-623nupdf9l0phl5r63rpli0eboekr9hn.apps.googleusercontent.com";

function Login({ onLoginSuccess }) {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS", res.profileObj);
    onLoginSuccess(); // Gọi hàm callback
  };

  const onFailure = (res) => {
    console.log("LOGIN FAIL", res);
    return "0";
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Continue with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
