import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { doGoogleLogin } from "../../store/slices";
import { AuthLayout } from "../layouts/AuthLayout";

export const LoginPage = () => {
  const { loading } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const handleGoogleLogin = async (e) => {
    e.preventDefault()
    dispatch(doGoogleLogin());
  };
  return (
    <AuthLayout>
      <h1>Login</h1>
      <Button disabled={loading} onClick={ handleGoogleLogin } variant="contained" color="primary" > Login </Button>
    </AuthLayout>
  )
}
