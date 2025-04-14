//built in modules
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Typography,
  Button,
  Box,
  CircularProgress,
  useMediaQuery,
  Paper,
  Card,
  CardContent,
  Grid,
  Divider,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const PredictCropView = ({
  page,
  location,
  locationval,
  handlePageChange,
  envfactors,
  handleCropChange,
  crop,
  handleLocationChange,
  handleNpkClick,
  handleLocationvalChange,
  showspinner,
  setShowSpinner,
  handlePredictCrop,
  handleProgressChange,
}) => {
  const mediatheme2 = useTheme();
  const matches = useMediaQuery(mediatheme2.breakpoints.up("sm"));
  const matchesforxl = useMediaQuery(mediatheme2.breakpoints.up("lg"));

  return (
    <>
      <div style={{ height: matchesforxl ? "80%" : "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: matches ? "flex-end" : "center",
            padding: "30px",
            marginTop: !matches && "60px",
          }}
        >
          <div
            style={{
              boxShadow:
                "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
              width: "300px",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-between",
              height: "10%",
              padding: "20px",
              marginTop: matches && !matchesforxl && "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography style={{ fontSize: "0.95em" }}>LOCATION</Typography>
              <Typography style={{ fontSize: "0.95em" }}>
                {locationval.toUpperCase()}
              </Typography>
            </div>
            <Box mt={2}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  handlePageChange(2);
                  handleProgressChange(0);
                }}
              >
                CHANGE LOCATION
              </Button>
            </Box>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "56%",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            maxWidth="800px"
            mx="auto"
            px={3}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={3}
                style={{
                  padding: "2rem",
                  borderRadius: "1rem",
                  background: "white",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                  width: "100%"
                }}
              >
                <Box display="flex" alignItems="center" mb={3}>
                  <WbSunnyIcon style={{ color: "#FF9800", fontSize: "2.5rem", marginRight: "1rem" }} />
                  <Typography variant="h5" style={{ fontWeight: 600, color: "#2C3E50" }}>
                    Environmental Factors
                  </Typography>
                </Box>

                <Divider style={{ marginBottom: "2rem" }} />

                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Card variant="outlined" style={{ height: "100%", borderRadius: "12px", border: "1px solid rgba(255, 152, 0, 0.3)" }}>
                      <CardContent>
                        <Box display="flex" alignItems="center" mb={2}>
                          <WbSunnyIcon style={{ color: "#FF9800", marginRight: "0.5rem" }} />
                          <Typography variant="h6" style={{ color: "#2C3E50" }}>
                            Rainfall
                          </Typography>
                        </Box>
                        <Box textAlign="center">
                          <Typography variant="h3" style={{ color: "#FF9800", fontWeight: 600 }}>
                            <CountUp end={envfactors.rainfall} duration={2.5} decimals={3} />
                          </Typography>
                          <Typography variant="h6" color="textSecondary">
                            cm
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Card variant="outlined" style={{ height: "100%", borderRadius: "12px", border: "1px solid rgba(255, 152, 0, 0.3)" }}>
                      <CardContent>
                        <Box display="flex" alignItems="center" mb={2}>
                          <WbSunnyIcon style={{ color: "#FF9800", marginRight: "0.5rem" }} />
                          <Typography variant="h6" style={{ color: "#2C3E50" }}>
                            Temperature
                          </Typography>
                        </Box>
                        <Box textAlign="center">
                          <Typography variant="h3" style={{ color: "#FF9800", fontWeight: 600 }}>
                            <CountUp end={envfactors.temperature} duration={2.5} decimals={3} />
                          </Typography>
                          <Typography variant="h6" color="textSecondary">
                            ºC
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Card variant="outlined" style={{ height: "100%", borderRadius: "12px", border: "1px solid rgba(255, 152, 0, 0.3)" }}>
                      <CardContent>
                        <Box display="flex" alignItems="center" mb={2}>
                          <WbSunnyIcon style={{ color: "#FF9800", marginRight: "0.5rem" }} />
                          <Typography variant="h6" style={{ color: "#2C3E50" }}>
                            Humidity
                          </Typography>
                        </Box>
                        <Box textAlign="center">
                          <Typography variant="h3" style={{ color: "#FF9800", fontWeight: 600 }}>
                            <CountUp end={envfactors.humidity} duration={2.5} decimals={3} />
                          </Typography>
                          <Typography variant="h6" color="textSecondary">
                            g.kg<sup>-1</sup>
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <Box mt={4} textAlign="center">
                  <Typography variant="body1" paragraph style={{ color: "#666" }}>
                    These environmental factors are crucial for determining the best crops for your location.
                  </Typography>
                  <Box mt={3}>
                    {showspinner ? (
                      <CircularProgress style={{ color: "#FF9800" }} />
                    ) : crop ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Card variant="outlined" style={{ 
                          marginBottom: "2rem", 
                          borderRadius: "12px", 
                          border: "1px solid rgba(255, 152, 0, 0.3)",
                          background: "rgba(255, 152, 0, 0.05)"
                        }}>
                          <CardContent>
                            <Box display="flex" alignItems="center" mb={2}>
                              <WbSunnyIcon style={{ color: "#FF9800", marginRight: "0.5rem" }} />
                              <Typography variant="h6" style={{ color: "#2C3E50" }}>
                                Recommended Crop
                              </Typography>
                            </Box>
                            <Box textAlign="center">
                              <Typography variant="h3" style={{ color: "#FF9800", fontWeight: 600 }}>
                                {crop.toUpperCase()}
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                        <Button
                          variant="contained"
                          size="large"
                          onClick={handleNpkClick}
                          style={{
                            backgroundColor: "#FF9800",
                            color: "white",
                            borderRadius: "2rem",
                            padding: "0.8rem 2rem"
                          }}
                        >
                          Predict NPK
                        </Button>
                      </motion.div>
                    ) : (
                      <Button
                        variant="contained"
                        size="large"
                        onClick={() => {
                          setShowSpinner(true);
                          setTimeout(handlePredictCrop, 2000);
                        }}
                        style={{
                          backgroundColor: "#FF9800",
                          color: "white",
                          borderRadius: "2rem",
                          padding: "0.8rem 2rem"
                        }}
                      >
                        Predict Crop
                      </Button>
                    )}
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default PredictCropView;
