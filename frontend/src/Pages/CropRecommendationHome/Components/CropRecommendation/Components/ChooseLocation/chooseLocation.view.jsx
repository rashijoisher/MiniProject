//built in modules
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { motion } from "framer-motion";
import {
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormGroup,
  FormControl,
  Box,
  useMediaQuery,
  Paper,
  Grid,
  Divider,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import MyLocationIcon from "@material-ui/icons/MyLocation";

//common components
import Dropdown from "../../../../../../Components/Dropdown";

const ChooseLocationView = ({
  page,
  location,
  locationval,
  disablebutton,
  handlePageChange,
  envfactors,
  handleCropChange,
  crop,
  handleLocationChange,
  handleNpkClick,
  handleEnvFactorsChange,
  handleLocationvalChange,
  allstates,
  alldistricts,
  handleStatesAPI,
  handleDistrictsAPI,
  chosenstate,
  handleStateChange,
  setChosenState,
  approach,
  handleWeatherUpdate,
}) => {
  const mediatheme2 = useTheme();
  const matches = useMediaQuery(mediatheme2.breakpoints.up("sm"));
  const matchesforxl = useMediaQuery(mediatheme2.breakpoints.up("lg"));

  const userDetails = useSelector(
    ({ userDetails }) => userDetails.userDetails,
    shallowEqual
  );
  
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
    >
      <Paper
        elevation={3}
        style={{
          width: "90%",
          maxWidth: "800px",
          padding: "2rem",
          borderRadius: "1rem",
          background: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box textAlign="center" mb={4}>
            <LocationOnIcon
              style={{ fontSize: "4rem", color: "#FF5722", marginBottom: "1rem" }}
            />
            <Typography variant="h4" gutterBottom style={{ fontWeight: 600, color: "#2C3E50" }}>
              Choose Your Location
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" paragraph>
              We use your location to provide accurate weather data and crop recommendations
            </Typography>
          </Box>
          
          <FormControl component="fieldset" style={{ width: "100%" }}>
            <RadioGroup
              value={location}
              onChange={(e, value) => {
                setChosenState("");
                handleLocationChange(parseInt(value));
                if (parseInt(value) === 2) {
                  handleStatesAPI();
                }
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Paper
                      elevation={1}
                      style={{
                        padding: "1.5rem",
                        borderRadius: "0.8rem",
                        border: location === 0 ? "2px solid #FF5722" : "1px solid rgba(0, 0, 0, 0.12)",
                        backgroundColor: location === 0 ? "rgba(255, 87, 34, 0.05)" : "white"
                      }}
                    >
                      <FormControlLabel
                        value={0}
                        control={<Radio color="primary" />}
                        label={
                          <Box display="flex" alignItems="center">
                            <MyLocationIcon style={{ marginRight: "1rem", color: "#FF5722" }} />
                            <Typography variant="body1">Use Current Location</Typography>
                          </Box>
                        }
                        style={{ width: "100%" }}
                      />
                    </Paper>
                  </motion.div>
                </Grid>
                
                <Grid item xs={12}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Paper
                      elevation={1}
                      style={{
                        padding: "1.5rem",
                        borderRadius: "0.8rem",
                        border: location === 1 ? "2px solid #FF5722" : "1px solid rgba(0, 0, 0, 0.12)",
                        backgroundColor: location === 1 ? "rgba(255, 87, 34, 0.05)" : "white",
                        opacity: !userDetails["state_name"] && !userDetails["district_name"] ? 0.7 : 1
                      }}
                    >
                      <FormControlLabel
                        value={1}
                        control={<Radio color="primary" />}
                        label={
                          <Box display="flex" alignItems="center">
                            <PersonPinIcon style={{ marginRight: "1rem", color: "#FF5722" }} />
                            <Typography variant="body1">Use Location from Profile</Typography>
                          </Box>
                        }
                        disabled={!userDetails["state_name"] && !userDetails["district_name"]}
                        style={{ width: "100%" }}
                      />
                      {!userDetails["state_name"] && !userDetails["district_name"] && (
                        <Box ml={4} mt={1}>
                          <Link to="/profile" style={{ color: "#3f51b5", textDecoration: "none" }}>
                            <Button size="small" color="primary">
                              Update profile to enable this option
                            </Button>
                          </Link>
                        </Box>
                      )}
                    </Paper>
                  </motion.div>
                </Grid>
                
                <Grid item xs={12}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Paper
                      elevation={1}
                      style={{
                        padding: "1.5rem",
                        borderRadius: "0.8rem",
                        border: location === 2 ? "2px solid #FF5722" : "1px solid rgba(0, 0, 0, 0.12)",
                        backgroundColor: location === 2 ? "rgba(255, 87, 34, 0.05)" : "white"
                      }}
                    >
                      <FormControlLabel
                        value={2}
                        control={<Radio color="primary" />}
                        label={
                          <Box display="flex" alignItems="center">
                            <EditLocationIcon style={{ marginRight: "1rem", color: "#FF5722" }} />
                            <Typography variant="body1">Choose Location Manually</Typography>
                          </Box>
                        }
                        style={{ width: "100%" }}
                      />
                      
                      {location === 2 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          <Box mt={3} ml={4} mr={4}>
                            <Divider style={{ marginBottom: "1.5rem" }} />
                            <Grid container spacing={2}>
                              <Grid item xs={12} md={6}>
                                <Dropdown
                                  label="State"
                                  options={allstates}
                                  value={chosenstate}
                                  handleChange={handleStateChange}
                                  id="state_name"
                                  name="state_name"
                                  variant="outlined"
                                  fullWidth
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Dropdown
                                  label="District"
                                  value={locationval}
                                  handleChange={handleLocationvalChange}
                                  options={alldistricts}
                                  id="district_name"
                                  name="district_name"
                                  variant="outlined"
                                  fullWidth
                                />
                              </Grid>
                            </Grid>
                          </Box>
                        </motion.div>
                      )}
                    </Paper>
                  </motion.div>
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
          
          {((location === 0 && locationval) ||
            location === 1 ||
            (location === 2 && locationval)) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box mt={4} p={3} textAlign="center" bgcolor="rgba(255, 87, 34, 0.1)" borderRadius="0.8rem">
                <Typography variant="h6" gutterBottom>
                  Selected Location: <strong>{locationval.toUpperCase()}</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  Weather data will be fetched for this location
                </Typography>
                <Button
                  onClick={async () => {
                    try {
                      await handleWeatherUpdate();
                      if (approach === 1) handlePageChange(3);
                      else handlePageChange(6);
                    } catch (err) {
                      console.error("Failed to update weather:", err);
                    }
                  }}
                  color="primary"
                  variant="contained"
                  size="large"
                  disabled={disablebutton}
                  style={{
                    marginTop: "1rem",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    backgroundColor: "#FF5722",
                    borderRadius: "2rem"
                  }}
                >
                  Continue
                </Button>
              </Box>
            </motion.div>
          )}
          
          <Box mt={4} textAlign="center">
            <Typography variant="body2" color="textSecondary">
              Your location helps us determine local weather patterns
              for more accurate recommendations.
            </Typography>
          </Box>
        </motion.div>
      </Paper>
    </Box>
  );
};

export default ChooseLocationView;
