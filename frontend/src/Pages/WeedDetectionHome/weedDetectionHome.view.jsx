//built in modules
import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Grid,
  Typography,
  Button,
  useMediaQuery,
  Box,
  Paper,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import styled from "styled-components";

const ContentContainer = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
`;

const Title = styled(motion.h5)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Description = styled(Typography)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 2rem;
`;

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #2196F3 30%, #21CBF3 90%);
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(33, 203, 243, .3);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px 2px rgba(33, 203, 243, .4);
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%);
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

const WeedDetectionHomeView = () => {
  const history = useHistory();
  const mediatheme2 = useTheme();
  const matches = useMediaQuery(mediatheme2.breakpoints.up("md"));

  return (
    <ContentContainer>
      <Title variants={titleVariants} initial="hidden" animate="visible">
        Weed Detection
      </Title>
      <Box>
        <Grid container alignItems="center" spacing={4} style={{ margin: 0, width: '100%' }}>
          {matches && (
            <Grid item xs={12} md={6}>
              <Paper elevation={0} style={{ padding: "2rem", background: "rgba(255, 255, 255, 0.9)" }}>
                <Description>
                  Agriculture in India plays a major role in the economy and
                  employment. 70% of Indian population directly relies on
                  agriculture. This project focuses on solving multiple
                  problems which the farmers would face. The common difficulty
                  present among the Indian farmers is, they don't opt for the
                  proper crop based on their soil requirements. Due to this,
                  they face a serious setback in productivity. This problem of
                  the farmers has been solved through precision agriculture.
                  Another problem which farmers while crop production is weed
                  growth. Farmers are often concerned that weeds may reduce
                  crop yields. Weeds use the same nutrients that crop plants
                  use. This project would solve this problem by distinguishing
                  between crops and weeds using machine learning
                  classification techniques. So, this would be super helpful
                  for farmers and would eventually increase crop
                  yield/production.
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
                    onClick={() => history.push("/weedDetection")}
                  >
                    Detect Weed
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
                src="https://i.guim.co.uk/img/media/538955ce854fce14ee4b688239838776b50e87a9/0_26_1280_768/master/1280.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b5146dd44bed6d9f903b5b65838aba4f"
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
                  onClick={() => history.push("/weedDetection")}
                >
                  Detect Weed
                </StyledButton>
              </motion.div>
            )}
          </Grid>
        </Grid>
      </Box>
    </ContentContainer>
  );
};

export default WeedDetectionHomeView;
