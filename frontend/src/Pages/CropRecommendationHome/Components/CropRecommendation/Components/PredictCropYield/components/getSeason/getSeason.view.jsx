//built in modules
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  Button,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
  Paper,
  Divider,
  Grid,
  Card,
  CardContent,
  Tooltip,
} from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import UpdateIcon from "@material-ui/icons/Update";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useHistory } from "react-router-dom";

//common components
import Dropdown from "../../../../../../../../Components/Dropdown";

const GetSeasonView = ({
  page,
  handlePageChange,
  season,
  seasonval,
  handleSeasonChange,
  handleSeasonValChange,
  handleSeasonAPI,
  allseasons,
  cropyield,
  handlePredictCropYield,
  handleSeasonAutopredict,
}) => {
  const history = useHistory();

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
            <WbSunnyIcon style={{ color: "#9C27B0", fontSize: "2rem", marginRight: "1rem" }} />
            <Typography variant="h5" style={{ fontWeight: 600, color: "#2C3E50" }}>
              Growing Season Selection
            </Typography>
          </Box>

          <Divider style={{ marginBottom: "2rem" }} />

          <Box textAlign="center" mb={4}>
            <Typography variant="subtitle1" color="textSecondary" paragraph>
              Select the growing season to calculate accurate crop yield predictions
            </Typography>
          </Box>

          <FormControl component="fieldset" style={{ width: "100%" }}>
            <RadioGroup
              value={season}
              onChange={(e, value) => {
                const intValue = parseInt(value);
                handleSeasonChange(intValue);
                if (intValue === 0) {
                  handleSeasonAutopredict();
                } else if (intValue === 1) {
                  handleSeasonAPI();
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
                        border: season === 0 ? "2px solid #9C27B0" : "1px solid rgba(0, 0, 0, 0.12)",
                        backgroundColor: season === 0 ? "rgba(156, 39, 176, 0.05)" : "white"
                      }}
                    >
                      <FormControlLabel
                        value={0}
                        control={<Radio color="primary" />}
                        label={
                          <Box display="flex" alignItems="center">
                            <UpdateIcon style={{ marginRight: "1rem", color: "#9C27B0" }} />
                            <Typography variant="body1">Detect Season Automatically</Typography>
                          </Box>
                        }
                        style={{ width: "100%" }}
                      />
                      <Box ml={4} mt={1}>
                        <Typography variant="body2" color="textSecondary">
                          We'll determine the current growing season based on the month and your location
                        </Typography>
                      </Box>
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
                        border: season === 1 ? "2px solid #9C27B0" : "1px solid rgba(0, 0, 0, 0.12)",
                        backgroundColor: season === 1 ? "rgba(156, 39, 176, 0.05)" : "white"
                      }}
                    >
                      <FormControlLabel
                        value={1}
                        control={<Radio color="primary" />}
                        label={
                          <Box display="flex" alignItems="center">
                            <CalendarTodayIcon style={{ marginRight: "1rem", color: "#9C27B0" }} />
                            <Typography variant="body1">Select Season Manually</Typography>
                          </Box>
                        }
                        style={{ width: "100%" }}
                      />

                      {season === 1 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          <Box mt={3} ml={4} mr={4}>
                            <Divider style={{ marginBottom: "1.5rem" }} />
                            <Dropdown
                              label="Select Season"
                              value={seasonval}
                              options={allseasons}
                              handleChange={handleSeasonValChange}
                              id="seasonval"
                              name="seasonval"
                              variant="outlined"
                              fullWidth
                            />
                          </Box>
                        </motion.div>
                      )}
                    </Paper>
                  </motion.div>
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>

          {(season === 0 || (season === 1 && seasonval)) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box 
                mt={4} 
                p={3} 
                textAlign="center" 
                bgcolor="rgba(156, 39, 176, 0.1)" 
                borderRadius="0.8rem"
              >
                <Typography variant="h6" gutterBottom>
                  Selected Season: <strong>{seasonval && seasonval.trim().toUpperCase()}</strong>
                </Typography>
                
                {!cropyield ? (
                  <>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      Now you can predict the expected yield for your crop
                    </Typography>
                    <Button
                      color="primary"
                      variant="contained"
                      size="large"
                      onClick={() => {
                        handlePredictCropYield();
                      }}
                      style={{
                        marginTop: "1rem",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        backgroundColor: "#9C27B0",
                        borderRadius: "2rem"
                      }}
                    >
                      Calculate Yield
                    </Button>
                  </>
                ) : (
                  <Box>
                    <Card
                      variant="outlined"
                      style={{
                        margin: "1.5rem auto",
                        maxWidth: "400px",
                        borderRadius: "12px",
                        border: "1px solid rgba(156, 39, 176, 0.3)",
                        background: "white"
                      }}
                    >
                      <CardContent>
                        <Box display="flex" alignItems="center" mb={1}>
                          <ThumbUpIcon style={{ color: "#9C27B0", marginRight: "0.5rem" }} />
                          <Typography variant="h6">Expected Crop Yield</Typography>
                        </Box>
                        <Box textAlign="center" mt={2} mb={1}>
                          <Typography variant="h4" style={{ fontWeight: "bold", color: "#2C3E50" }}>
                            <CountUp end={cropyield} duration={3} decimals={2} /> kg
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            per square meter
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                    
                    <Button
                      color="primary"
                      variant="contained"
                      size="large"
                      onClick={() => {
                        handlePageChange(9);
                      }}
                      style={{
                        marginTop: "1rem",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        backgroundColor: "#4CAF50",
                        borderRadius: "2rem"
                      }}
                      startIcon={<CheckCircleIcon />}
                    >
                      Complete
                    </Button>
                  </Box>
                )}
              </Box>
            </motion.div>
          )}

          <Box mt={4} textAlign="center">
            <Typography variant="body2" color="textSecondary">
              Different seasons have different weather conditions which affect crop growth and yield.
              Accurate season information improves the precision of our predictions.
            </Typography>
          </Box>
        </motion.div>
      </Paper>
    </Box>
  );
};

export default GetSeasonView;
