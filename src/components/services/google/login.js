import { GoogleLogin } from "react-google-login";

const clientId =
  "325518792405-623nupdf9l0phl5r63rpli0eboekr9hn.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAIL", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
