//built in modules
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  Typography,
  Box,
  Button,
  useMediaQuery,
  Paper,
  Card,
  CardContent,
  Grid,
  Divider,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import EcoIcon from "@material-ui/icons/Eco";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import NatureIcon from "@material-ui/icons/Nature";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import EmojiNatureIcon from "@material-ui/icons/EmojiNature";

const NpkPredictionView = ({
  page,
  handlePageChange,
  envfactors,
  crop,
  npkValues,
  handleNpkChange,
}) => {
  const mediatheme2 = useTheme();
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
          <Box display="flex" alignItems="center" mb={3}>
            <LocalFloristIcon style={{ color: "#4CAF50", fontSize: "2.5rem", marginRight: "1rem" }} />
            <Typography variant="h5" style={{ fontWeight: 600, color: "#2C3E50" }}>
              Soil Nutrient Analysis
            </Typography>
          </Box>

          <Divider style={{ marginBottom: "2rem" }} />

          <Box textAlign="center" mb={4}>
            <Typography variant="subtitle1" color="textSecondary" paragraph>
              Based on your location and crop selection, here are the predicted NPK values for your soil
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined" style={{ 
                height: "100%", 
                borderRadius: "12px", 
                border: "1px solid rgba(76, 175, 80, 0.3)",
                background: "rgba(76, 175, 80, 0.05)"
              }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <NatureIcon style={{ color: "#4CAF50", marginRight: "0.5rem" }} />
                    <Typography variant="h6" style={{ color: "#2C3E50" }}>
                      Nitrogen (N)
                    </Typography>
                  </Box>
                  <Box textAlign="center">
                    <Typography variant="h3" style={{ color: "#4CAF50", fontWeight: 600 }}>
                      <CountUp end={npkValues.nitrogen} duration={2.5} decimals={3} />
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      ppm
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card variant="outlined" style={{ 
                height: "100%", 
                borderRadius: "12px", 
                border: "1px solid rgba(33, 150, 243, 0.3)",
                background: "rgba(33, 150, 243, 0.05)"
              }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <NaturePeopleIcon style={{ color: "#2196F3", marginRight: "0.5rem" }} />
                    <Typography variant="h6" style={{ color: "#2C3E50" }}>
                      Phosphorus (P)
                    </Typography>
                  </Box>
                  <Box textAlign="center">
                    <Typography variant="h3" style={{ color: "#2196F3", fontWeight: 600 }}>
                      <CountUp end={npkValues.phosphorus} duration={2.5} decimals={3} />
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      ppm
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card variant="outlined" style={{ 
                height: "100%", 
                borderRadius: "12px", 
                border: "1px solid rgba(255, 152, 0, 0.3)",
                background: "rgba(255, 152, 0, 0.05)"
              }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <EmojiNatureIcon style={{ color: "#FF9800", marginRight: "0.5rem" }} />
                    <Typography variant="h6" style={{ color: "#2C3E50" }}>
                      Potassium (K)
                    </Typography>
                  </Box>
                  <Box textAlign="center">
                    <Typography variant="h3" style={{ color: "#FF9800", fontWeight: 600 }}>
                      <CountUp end={npkValues.potassium} duration={2.5} decimals={3} />
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      ppm
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box mt={4} textAlign="center">
            <Typography variant="body1" paragraph style={{ color: "#666" }}>
              These NPK values represent the essential nutrients in your soil. They are crucial for determining the appropriate fertilizer and crop management practices.
            </Typography>
            <Box mt={3}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    handlePageChange(7);
                  }}
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    borderRadius: "2rem",
                    padding: "0.8rem 2rem"
                  }}
                >
                  Choose Area
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Paper>
    </Box>
  );
};

export default NpkPredictionView;
