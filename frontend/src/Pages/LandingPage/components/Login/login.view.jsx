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
  Divider,
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
        background: !matches 
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`
          : "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {matches && (
        <Grid item xs={12} sm={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={background}
              alt="crops"
              style={{
                height: "100vh",
                width: "100%",
                objectFit: "cover",
                filter: "brightness(0.8)",
              }}
            />
          </motion.div>
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
              padding: "2.5rem",
              borderRadius: "1.5rem",
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
            }}
          >
            <Box textAlign="center" mb={4}>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Typography 
                  variant="h4" 
                  style={{ 
                    fontWeight: 700, 
                    color: "#2C3E50",
                    marginBottom: "0.5rem",
                    background: "linear-gradient(45deg, #2C3E50 30%, #4CAF50 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Welcome Back
                </Typography>
              </motion.div>
              <Typography 
                variant="subtitle1" 
                color="textSecondary"
                style={{ marginBottom: "2rem" }}
              >
                Sign in to continue to your account
              </Typography>
            </Box>

            <form>
              <Box my={2}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
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
                      style={{ borderRadius: "1rem" }}
                      endAdornment={
                        <InputAdornment position="end">
                          <AccountCircleIcon style={{ color: "#4CAF50" }} />
                        </InputAdornment>
                      }
                    />
                    <FormHelperText error>{loginDetailsErrors.username}</FormHelperText>
                  </FormControl>
                </motion.div>
              </Box>

              <Box my={2}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
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
                      style={{ borderRadius: "1rem" }}
                      endAdornment={
                        <InputAdornment position="end">
                          <VpnKeyIcon style={{ color: "#4CAF50" }} />
                        </InputAdornment>
                      }
                    />
                    <FormHelperText error>{loginDetailsErrors.password}</FormHelperText>
                  </FormControl>
                </motion.div>
              </Box>

              <Box mt={4} mb={2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
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
                      borderRadius: "1rem",
                      textTransform: "none",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      background: "linear-gradient(45deg, #00b09b 0%, #96c93d 100%)",
                      boxShadow: "0 4px 15px rgba(0, 176, 155, 0.3)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "linear-gradient(45deg, #00b09b 0%, #96c93d 100%)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(0, 176, 155, 0.4)",
                      },
                    }}
                  >
                    Sign In
                  </Button>
                </motion.div>
              </Box>

              <Box my={3}>
                <Divider style={{ margin: "1rem 0" }} />
                <Typography 
                  variant="body2" 
                  color="textSecondary" 
                  align="center"
                  style={{ margin: "1rem 0" }}
                >
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

              <Box mt={3}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
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
                      borderRadius: "1rem",
                      boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .1)",
                    }}
                  />
                </motion.div>
              </Box>
            </form>
          </Paper>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default LoginPageView;