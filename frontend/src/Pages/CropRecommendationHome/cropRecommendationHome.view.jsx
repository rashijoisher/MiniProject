//built in modules
import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  useMediaQuery,
  Box,
  Paper,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import styled from "styled-components";

const ContentContainer = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, ${green[500]} 0%, ${green[700]} 100%);
`;

const Title = styled(motion.h5)`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Description = styled(Typography)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: white;
  margin-bottom: 2rem;
`;

const StyledButton = styled(Button)`
  background: white;
  color: ${green[700]};
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(0, 0, 0, .2);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    background: white;
    box-shadow: 0 4px 8px 2px rgba(0, 0, 0, .3);
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%);
  }
`;

const buttonVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: { duration: 0.5, type: "spring", stiffness: 100 },
  },
  visible: {
    opacity: 1,
    x: "0",
  },
  hover: {
    scale: 1.05,
    originX: 0,
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.2, duration: 0.8, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      delay: 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
};

const CropRecommendationHomeView = () => {
  const mediatheme = useTheme();
  const matches = useMediaQuery(mediatheme.breakpoints.up("md"));
  const history = useHistory();
  
  return (
    <ContentContainer>
      <Title variants={titleVariants} initial="hidden" animate="visible">
        Crop Recommendation
      </Title>
      <Box>
        <Grid container alignItems="center" spacing={4} style={{ margin: 0, width: '100%' }}>
          {matches && (
            <Grid item xs={12} md={6}>
              <Paper elevation={0} style={{ padding: "2rem", background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)" }}>
                <Description>
                  Agriculture in India plays a major role in the economy and
                  employment. 70% of Indian population directly relies on
                  agriculture. This project focuses on solving multiple
                  problems which the farmers would face. The common difficulty
                  present among the Indian farmers is, they don't opt for the
                  proper crop based on their soil requirements. Due to this,
                  they face a serious setback in productivity. This problem of
                  the farmers has been solved through precision agriculture.
                  In this project, we propose a system which would suggest
                  crops based on the results obtained using a machine learning
                  approach. The system maps the soil and crop data to predict
                  the list of suitable crops for the soil. Hence it leaves
                  upon the user to decide on the crop to be sown. Thus, the
                  system helps to provide knowledge to the dilettante farmers.
                </Description>

                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  style={{ width: "200px", margin: "auto" }}
                >
                  <StyledButton
                    fullWidth
                    onClick={() => history.push("/cropRecommendation")}
                  >
                    Get Started
                  </StyledButton>
                </motion.div>
              </Paper>
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            <ImageContainer
              drag
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src="https://cff2.earth.com/uploads/2019/02/15172904/New-method-to-increase-crop-growth-can-help-feed-growing-population-730x410.jpg"
                alt="crops"
                style={{
                  width: "100%",
                  height: matches ? "400px" : "300px",
                  objectFit: "cover",
                }}
              />
            </ImageContainer>
            {!matches && (
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                style={{ marginTop: "2rem" }}
              >
                <StyledButton
                  fullWidth
                  onClick={() => history.push("/cropRecommendation")}
                >
                  Get Started
                </StyledButton>
              </motion.div>
            )}
          </Grid>
        </Grid>
      </Box>
    </ContentContainer>
  );
};

export default CropRecommendationHomeView;