//built in modules
import React from "react";
import { motion } from "framer-motion";
import {
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  Typography,
  Box,
  Button,
  useMediaQuery,
  CircularProgress,
  Paper,
  Divider,
  Grid,
  Tooltip,
  Card,
  CardContent,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import NatureIcon from "@material-ui/icons/Nature";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import EmojiNatureIcon from "@material-ui/icons/EmojiNature";
import InfoIcon from "@material-ui/icons/Info";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EcoIcon from "@material-ui/icons/Eco";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const PredictCropApproach2View = ({
  page,
  handlePageChange,
  envfactors,
  location,
  locationval,
  handleLocationChange,
  handleLocationvalChange,
  npkValues,
  handleNpkChange,
  crop,
  handlePredictCropApproach2,
  spin,
  setSpin,
  handleProgressChange,
}) => {
  const mediatheme2 = useTheme();
  const matches = useMediaQuery(mediatheme2.breakpoints.up("sm"));
  const matchesforxl = useMediaQuery(mediatheme2.breakpoints.up("lg"));

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
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
            <Box display="flex" alignItems="center">
              <EcoIcon style={{ color: "#4CAF50", fontSize: "2rem", marginRight: "1rem" }} />
              <Typography variant="h5" style={{ fontWeight: 600, color: "#2C3E50" }}>
                NPK Values Input
              </Typography>
            </Box>
            
            <Card 
              variant="outlined" 
              style={{ 
                maxWidth: "200px",
                borderRadius: "12px",
                border: "1px solid rgba(76, 175, 80, 0.3)",
                background: "rgba(76, 175, 80, 0.05)"
              }}
            >
              <CardContent style={{ padding: "0.75rem" }}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Typography variant="body2" color="textSecondary">Location:</Typography>
                  <Typography variant="body2" style={{ fontWeight: "bold" }}>
                    {locationval.toUpperCase()}
                  </Typography>
                </Box>
                <Box mt={1} textAlign="right">
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      handlePageChange(2);
                      handleProgressChange(0);
                    }}
                  >
                    Change
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Divider style={{ marginBottom: "2rem" }} />

          <Box textAlign="center" mb={4}>
            <Typography variant="subtitle1" color="textSecondary" paragraph>
              Enter your soil's Nitrogen, Phosphorus, and Potassium values to get personalized crop recommendations
            </Typography>
          </Box>

          <Grid container spacing={4} justify="center">
            <Grid item xs={12} md={8}>
              <Box mb={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Nitrogen (N)</InputLabel>
                  <OutlinedInput
                    value={npkValues.nitrogen}
                    onChange={handleNpkChange}
                    labelWidth={90}
                    type="number"
                    id="nitrogen"
                    name="nitrogen"
                    placeholder="Enter nitrogen value"
                    startAdornment={
                      <InputAdornment position="start">
                        <NatureIcon style={{ color: "#4CAF50" }} />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <Tooltip title="Measured in parts per million (ppm)">
                          <InfoIcon style={{ color: "#9E9E9E", fontSize: "1rem" }} />
                        </Tooltip>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>

              <Box mb={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Phosphorus (P)</InputLabel>
                  <OutlinedInput
                    value={npkValues.phosphorus}
                    onChange={handleNpkChange}
                    labelWidth={115}
                    type="number"
                    id="phosphorus"
                    name="phosphorus"
                    placeholder="Enter phosphorus value"
                    startAdornment={
                      <InputAdornment position="start">
                        <NaturePeopleIcon style={{ color: "#2196F3" }} />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <Tooltip title="Measured in parts per million (ppm)">
                          <InfoIcon style={{ color: "#9E9E9E", fontSize: "1rem" }} />
                        </Tooltip>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>

              <Box mb={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Potassium (K)</InputLabel>
                  <OutlinedInput
                    value={npkValues.potassium}
                    onChange={handleNpkChange}
                    labelWidth={105}
                    type="number"
                    id="potassium"
                    name="potassium"
                    placeholder="Enter potassium value"
                    startAdornment={
                      <InputAdornment position="start">
                        <EmojiNatureIcon style={{ color: "#FF9800" }} />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <Tooltip title="Measured in parts per million (ppm)">
                          <InfoIcon style={{ color: "#9E9E9E", fontSize: "1rem" }} />
                        </Tooltip>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
            </Grid>
          </Grid>

          {npkValues.nitrogen && npkValues.phosphorus && npkValues.potassium && crop && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box 
                mt={4} 
                p={3} 
                textAlign="center" 
                bgcolor="rgba(76, 175, 80, 0.1)" 
                borderRadius="0.8rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <CheckCircleIcon style={{ color: "#4CAF50", marginRight: "0.5rem" }} />
                  <Typography variant="h6">
                    Recommended Crop: <strong>{crop.toUpperCase()}</strong>
                  </Typography>
                </Box>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  onClick={() => {
                    handlePageChange(7);
                  }}
                  style={{
                    marginTop: "1rem",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    backgroundColor: "#4CAF50",
                    borderRadius: "2rem"
                  }}
                >
                  Predict Crop Yield
                </Button>
              </Box>
            </motion.div>
          )}

          {npkValues.nitrogen && npkValues.phosphorus && npkValues.potassium && !crop && (
            <Box textAlign="center" mt={4}>
              {spin ? (
                <CircularProgress style={{ color: "#4CAF50" }} />
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    onClick={() => {
                      setSpin(true);
                      setTimeout(handlePredictCropApproach2, 2000);
                    }}
                    style={{
                      paddingLeft: "2rem",
                      paddingRight: "2rem",
                      backgroundColor: "#4CAF50",
                      borderRadius: "2rem"
                    }}
                  >
                    Predict Recommended Crop
                  </Button>
                </motion.div>
              )}
            </Box>
          )}

          <Box mt={4} textAlign="center">
            <Typography variant="body2" color="textSecondary">
              NPK values help us determine the appropriate crop for your soil composition.
              Higher accuracy in these values leads to better recommendations.
            </Typography>
          </Box>
        </motion.div>
      </Paper>
    </Box>
  );
};

export default PredictCropApproach2View;
