import { GoogleLogout } from "react-google-login";

const clientId =
  "325518792405-623nupdf9l0phl5r63rpli0eboekr9hn.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout success!");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
