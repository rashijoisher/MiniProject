//built in modules
import React from "react";
import { motion } from "framer-motion";
import { Typography, Box, Button, Paper, Grid } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";

const FertilizerQuestionView = ({ handleYes, handleNo }) => {
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
            <LocalFloristIcon
              style={{ fontSize: "4rem", color: "#4CAF50", marginBottom: "1rem" }}
            />
            <Typography variant="h4" gutterBottom style={{ fontWeight: 600, color: "#2C3E50" }}>
              NPK Value Prediction
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" paragraph>
              Choose how you want to determine soil nutrient values
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Paper
                  elevation={2}
                  style={{
                    padding: "1.5rem",
                    height: "100%",
                    borderRadius: "0.8rem",
                    border: "1px solid rgba(76, 175, 80, 0.3)",
                    cursor: "pointer",
                  }}
                  onClick={handleYes}
                >
                  <Box display="flex" flexDirection="column" alignItems="center" height="100%">
                    <DoneIcon style={{ fontSize: "2.5rem", color: "#4CAF50", marginBottom: "1rem" }} />
                    <Typography variant="h6" gutterBottom align="center">
                      Predict NPK Values
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center">
                      Our ML model will analyze your location and crop data to predict the essential Nitrogen, Phosphorus, and Potassium values in your soil.
                    </Typography>
                    <Box flexGrow={1} />
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginTop: "1.5rem" }}
                      fullWidth
                      onClick={handleYes}
                    >
                      Use Prediction
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Paper
                  elevation={2}
                  style={{
                    padding: "1.5rem",
                    height: "100%",
                    borderRadius: "0.8rem",
                    border: "1px solid rgba(33, 150, 243, 0.3)",
                    cursor: "pointer",
                  }}
                  onClick={handleNo}
                >
                  <Box display="flex" flexDirection="column" alignItems="center" height="100%">
                    <HelpOutlineIcon style={{ fontSize: "2.5rem", color: "#2196F3", marginBottom: "1rem" }} />
                    <Typography variant="h6" gutterBottom align="center">
                      Enter NPK Values Manually
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center">
                      If you already know your soil's NPK values from a soil test or other source, you can enter them manually.
                    </Typography>
                    <Box flexGrow={1} />
                    <Button
                      variant="contained"
                      style={{ marginTop: "1.5rem", backgroundColor: "#2196F3", color: "white" }}
                      fullWidth
                      onClick={handleNo}
                    >
                      Enter Manually
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          <Box mt={4} textAlign="center">
            <Typography variant="body2" color="textSecondary">
              NPK values represent the levels of Nitrogen (N), Phosphorus (P), and Potassium (K) in your soil, 
              which are essential nutrients for plant growth.
            </Typography>
          </Box>
        </motion.div>
      </Paper>
    </Box>
  );
};

export default FertilizerQuestionView;
