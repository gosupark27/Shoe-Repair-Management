import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => loginWithRedirect({
                screen_hint: 'signup'
            })}
        >
            Log In
        </Button>
    );
};

export default SignupButton;