import { Button } from "@mui/material"
import { signInWithGoogle } from "../../firebase/firebaseAuthAdapter";

export const LoginPage = () => {

  const handleGoogleLogin = async (e) => {
    e.preventDefault()
    console.log('Login with google');
    const userResponse = await signInWithGoogle();
    console.log(userResponse);
  };
  return (
    <>
      <h1>Login</h1>
      <Button onClick={ handleGoogleLogin } variant="contained" color="primary" > Login </Button>
    </>
  )
}
