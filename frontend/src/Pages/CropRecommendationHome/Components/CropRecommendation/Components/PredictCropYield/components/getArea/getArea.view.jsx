//built in modules
import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormGroup,
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  Grid,
  Card,
  CardContent,
  Tooltip,
} from "@material-ui/core";
import LandscapeIcon from "@material-ui/icons/Landscape";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import PersonIcon from "@material-ui/icons/Person";
import InfoIcon from "@material-ui/icons/Info";

const GetAreaView = ({
  page,
  handlePageChange,
  area,
  handleAreaChange,
  areaval,
  handleAreaValChange,
}) => {
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
          <Box display="flex" alignItems="center" mb={3}>
            <SquareFootIcon style={{ color: "#FF9800", fontSize: "2rem", marginRight: "1rem" }} />
            <Typography variant="h5" style={{ fontWeight: 600, color: "#2C3E50" }}>
              Land Area Information
            </Typography>
          </Box>

          <Divider style={{ marginBottom: "2rem" }} />

          <Box textAlign="center" mb={4}>
            <Typography variant="subtitle1" color="textSecondary" paragraph>
              We need to know your land area to calculate the expected crop yield
            </Typography>
          </Box>

          <FormControl component="fieldset" style={{ width: "100%" }}>
            <RadioGroup
              value={area}
              onChange={(e, value) => {
                handleAreaChange(parseInt(value));
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
                        border: area === 0 ? "2px solid #FF9800" : "1px solid rgba(0, 0, 0, 0.12)",
                        backgroundColor: area === 0 ? "rgba(255, 152, 0, 0.05)" : "white",
                        opacity: !userDetails["area"] ? 0.7 : 1
                      }}
                    >
                      <FormControlLabel
                        value={0}
                        control={<Radio color="primary" />}
                        label={
                          <Box display="flex" alignItems="center">
                            <PersonIcon style={{ marginRight: "1rem", color: "#FF9800" }} />
                            <Typography variant="body1">Use Area from Profile</Typography>
                          </Box>
                        }
                        disabled={!userDetails["area"]}
                        style={{ width: "100%" }}
                      />
                      {!userDetails["area"] && (
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
                        border: area === 1 ? "2px solid #FF9800" : "1px solid rgba(0, 0, 0, 0.12)",
                        backgroundColor: area === 1 ? "rgba(255, 152, 0, 0.05)" : "white"
                      }}
                    >
                      <FormControlLabel
                        value={1}
                        control={<Radio color="primary" />}
                        label={
                          <Box display="flex" alignItems="center">
                            <LandscapeIcon style={{ marginRight: "1rem", color: "#FF9800" }} />
                            <Typography variant="body1">Enter Area Manually</Typography>
                          </Box>
                        }
                        style={{ width: "100%" }}
                      />

                      {area === 1 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          <Box mt={3} ml={4} mr={4}>
                            <Divider style={{ marginBottom: "1.5rem" }} />
                            <FormControl fullWidth variant="outlined">
                              <InputLabel>Land Area</InputLabel>
                              <OutlinedInput
                                labelWidth={80}
                                type="number"
                                id="area"
                                name="area"
                                value={areaval}
                                onChange={handleAreaValChange}
                                placeholder="Enter your land area"
                                startAdornment={
                                  <InputAdornment position="start">
                                    <SquareFootIcon style={{ color: "#FF9800" }} />
                                  </InputAdornment>
                                }
                                endAdornment={
                                  <InputAdornment position="end">
                                    <Typography variant="body2" color="textSecondary">m²</Typography>
                                    <Tooltip title="Enter your land area in square meters">
                                      <InfoIcon style={{ color: "#9E9E9E", fontSize: "1rem", marginLeft: "4px" }} />
                                    </Tooltip>
                                  </InputAdornment>
                                }
                              />
                            </FormControl>
                          </Box>
                        </motion.div>
                      )}
                    </Paper>
                  </motion.div>
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>

          {(area === 0 || (area === 1 && areaval)) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box 
                mt={4} 
                p={3} 
                textAlign="center" 
                bgcolor="rgba(255, 152, 0, 0.1)" 
                borderRadius="0.8rem"
              >
                <Typography variant="h6" gutterBottom>
                  Total Land Area: <strong>{areaval} m²</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  This information will be used to calculate expected crop yield
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  onClick={() => {
                    handlePageChange(8);
                  }}
                  style={{
                    marginTop: "1rem",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    backgroundColor: "#FF9800",
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
              Land area helps us calculate the potential yield of your crop. 
              More accurate measurements will result in more accurate yield predictions.
            </Typography>
          </Box>
        </motion.div>
      </Paper>
    </Box>
  );
};

export default GetAreaView;
