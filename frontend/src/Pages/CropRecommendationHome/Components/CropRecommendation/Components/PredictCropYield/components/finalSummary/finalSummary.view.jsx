//built in modules
import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Typography,
  Box,
  Button,
  Paper,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ReplayIcon from "@material-ui/icons/Replay";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import NatureIcon from "@material-ui/icons/Nature";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import EmojiNatureIcon from "@material-ui/icons/EmojiNature";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LandscapeIcon from "@material-ui/icons/Landscape";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const FinalSummaryView = ({
  approach,
  chosenstate,
  locationval,
  crop,
  npkValues,
  areaval,
  seasonval,
  cropyield,
  handlePageChange,
  handleProgressChange,
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
            <LocalFloristIcon style={{ color: "#4CAF50", fontSize: "2.5rem", marginRight: "1rem" }} />
            <Typography variant="h5" style={{ fontWeight: 600, color: "#2C3E50" }}>
              Prediction Summary
            </Typography>
          </Box>

          <Divider style={{ marginBottom: "2rem" }} />

          <Grid container spacing={3}>
            {/* Location Information */}
            <Grid item xs={12}>
              <Card variant="outlined" style={{ borderRadius: "12px" }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <LocationOnIcon style={{ color: "#2196F3", marginRight: "0.5rem" }} />
                    <Typography variant="h6">Location</Typography>
                  </Box>
                  <Typography variant="body1">
                    State: <strong>{chosenstate}</strong>
                  </Typography>
                  <Typography variant="body1">
                    District: <strong>{locationval}</strong>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Crop Information */}
            <Grid item xs={12}>
              <Card variant="outlined" style={{ borderRadius: "12px" }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <LocalFloristIcon style={{ color: "#4CAF50", marginRight: "0.5rem" }} />
                    <Typography variant="h6">Crop</Typography>
                  </Box>
                  <Typography variant="body1">
                    Recommended Crop: <strong>{crop}</strong>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* NPK Values */}
            <Grid item xs={12}>
              <Card variant="outlined" style={{ borderRadius: "12px" }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <NatureIcon style={{ color: "#4CAF50", marginRight: "0.5rem" }} />
                    <Typography variant="h6">Soil Nutrients (NPK)</Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Typography variant="body1">
                        Nitrogen: <strong>{npkValues.nitrogen} ppm</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body1">
                        Phosphorus: <strong>{npkValues.phosphorus} ppm</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body1">
                        Potassium: <strong>{npkValues.potassium} ppm</strong>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Area and Season */}
            <Grid item xs={12} md={6}>
              <Card variant="outlined" style={{ borderRadius: "12px" }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <LandscapeIcon style={{ color: "#FF9800", marginRight: "0.5rem" }} />
                    <Typography variant="h6">Land Area</Typography>
                  </Box>
                  <Typography variant="body1">
                    Area: <strong>{areaval} m²</strong>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card variant="outlined" style={{ borderRadius: "12px" }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <CalendarTodayIcon style={{ color: "#9C27B0", marginRight: "0.5rem" }} />
                    <Typography variant="h6">Growing Season</Typography>
                  </Box>
                  <Typography variant="body1">
                    Season: <strong>{seasonval}</strong>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Yield Prediction */}
            <Grid item xs={12}>
              <Card variant="outlined" style={{ borderRadius: "12px" }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <WbSunnyIcon style={{ color: "#FFC107", marginRight: "0.5rem" }} />
                    <Typography variant="h6">Yield Prediction</Typography>
                  </Box>
                  <Typography variant="h4" style={{ color: "#4CAF50", fontWeight: 600 }}>
                    {cropyield} kg/m²
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box mt={4} display="flex" justifyContent="center" spacing={2}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                color="primary"
                variant="contained"
                style={{ margin: "0.5rem" }}
                startIcon={<HomeIcon />}
                onClick={() => history.push("/home")}
              >
                Back to Home
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                color="primary"
                variant="contained"
                style={{ margin: "0.5rem" }}
                startIcon={<ReplayIcon />}
                onClick={() => {
                  handlePageChange(1);
                  handleProgressChange(-1);
                }}
              >
                Start New Prediction
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Paper>
    </Box>
  );
};

export default FinalSummaryView; 