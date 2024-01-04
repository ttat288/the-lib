import { Text } from "@chakra-ui/react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "325518792405-623nupdf9l0phl5r63rpli0eboekr9hn.apps.googleusercontent.com";

function Logout({ onLogoutSuccess }) {
  const onSuccess = () => {
    console.log("Logout success!");
    onLogoutSuccess();
  };
  const onFailure = (error) => {
    console.log("Logout failure!", error);
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        onLogoutSuccess={onSuccess}
        onFailure={onFailure}
        render={(renderProps) => (
          <Text fontWeight="bold" onClick={renderProps.onClick}>
            Logout
          </Text>
        )}
      />
    </div>
  );
}

export default Logout;
