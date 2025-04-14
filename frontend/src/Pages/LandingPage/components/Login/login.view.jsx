//built in modules
import React from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Box,
  Paper,
  Button,
  Typography,
  InputAdornment,
  FormHelperText,
  Grid,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//google-oauth
import GoogleLogin from "react-google-login";

//background image
import background from "../../../../utils/images/croplogin.jpg";

const LoginPageView = ({
  loginDetails,
  loginDetailsErrors,
  handleLoginDetails,
  handleSubmit,
  handleGoogleSignin,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  //google oauth response handler
  const responseGoogle = (response) => {
    if (response.profileObj) {
      localStorage.setItem("accountpicturesrc", response.profileObj.imageUrl);
    }
    handleGoogleSignin(response.profileObj.email, response.googleId);
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        minHeight: "100vh",
        background: !matches ? `url(${background})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {matches && (
        <Grid item xs={12} sm={6}>
          <img
            src={background}
            alt="crops"
            style={{
              height: "100vh",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
      )}
      <Grid
        container
        item
        xs={12}
        sm={6}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ padding: "2rem" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            elevation={5}
            style={{
              padding: "2rem",
              borderRadius: "1rem",
              background: "rgba(255, 255, 255, 0.95)",
            }}
          >
            <Box textAlign="center" mb={3}>
              <Typography variant="h4" style={{ fontWeight: 600, color: "#2C3E50" }}>
                Welcome Back
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Sign in to continue to your account
              </Typography>
            </Box>

            <form>
              <Box my={2}>
                <FormControl
                  style={{ width: "100%", maxWidth: "400px" }}
                  variant="outlined"
                  size="small"
                >
                  <InputLabel>Username</InputLabel>
                  <OutlinedInput
                    value={loginDetails.username}
                    id="username"
                    name="username"
                    onChange={handleLoginDetails}
                    labelWidth={85}
                    endAdornment={
                      <InputAdornment position="end">
                        <AccountCircleIcon style={{ color: "#777" }} />
                      </InputAdornment>
                    }
                  />
                  <FormHelperText error>{loginDetailsErrors.username}</FormHelperText>
                </FormControl>
              </Box>

              <Box my={2}>
                <FormControl
                  style={{ width: "100%", maxWidth: "400px" }}
                  variant="outlined"
                  size="small"
                >
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    value={loginDetails.password}
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleLoginDetails}
                    labelWidth={75}
                    endAdornment={
                      <InputAdornment position="end">
                        <VpnKeyIcon style={{ color: "#777" }} />
                      </InputAdornment>
                    }
                  />
                  <FormHelperText error>{loginDetailsErrors.password}</FormHelperText>
                </FormControl>
              </Box>

              <Box mt={4} mb={2}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  onClick={() => handleSubmit(loginDetails)}
                  disabled={
                    !loginDetails.username ||
                    !loginDetails.password ||
                    loginDetailsErrors.username ||
                    loginDetailsErrors.password
                  }
                  style={{
                    padding: "0.8rem",
                    borderRadius: "2rem",
                    textTransform: "none",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                  }}
                >
                  Sign In
                </Button>
              </Box>

              <Box mt={2} textAlign="center">
                <Typography variant="body2" color="textSecondary">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    style={{
                      textDecoration: "none",
                      color: "#4CAF50",
                      fontWeight: 600,
                    }}
                  >
                    Register here
                  </Link>
                </Typography>
              </Box>

              <Box mt={3} textAlign="center">
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Or continue with
                </Typography>
                <GoogleLogin
                  clientId="61039600269-esn789gidvkp8nlv9itnu8c1pjd759q4.apps.googleusercontent.com"
                  buttonText="Sign in with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    margin: "0 auto",
                  }}
                />
              </Box>
            </form>
          </Paper>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default LoginPageView;