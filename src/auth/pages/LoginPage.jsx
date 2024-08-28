import { Button } from "@mui/material"
import { signInWithGoogle } from "../../firebase/firebaseAuthAdapter";
import { useDispatch, useSelector } from "react-redux";
import { doGoogleLogin } from "../../store/slices";

export const LoginPage = () => {
  const { loading } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const handleGoogleLogin = async (e) => {
    e.preventDefault()
    dispatch(doGoogleLogin());
  };
  return (
    <>
      <h1>Login</h1>
      <Button disabled={loading} onClick={ handleGoogleLogin } variant="contained" color="primary" > Login </Button>
    </>
  )
}
