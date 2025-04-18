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
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const buttonVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: { duration: 0.3, type: "spring", stiffness: 100 },
  },
  visible: {
    opacity: 1,
    x: "0",
  },
  hover: {
    scale: 1.1,
    originX: 0,
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.1, duration: 0.8 },
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
      duration: 0.3,
      type: "spring",
      stiffness: 100,
    },
  },
};

const AboutView = () => {
  const history = useHistory();
  const mediatheme2 = useTheme();
  const matches = useMediaQuery(mediatheme2.breakpoints.up("md"));

  return (
    <>
      <div style={{ background: "#eee", height: "100%" }}>
        <motion.h5 variants={titleVariants} initial="hidden" animate="visible">
          AgroHelper
        </motion.h5>
        <Box ml={matches && 4}>
          <Grid container alignItems="center">
            {matches && (
              <Grid item xs={12} md={6} style={{ padding: "0 0 0 70px" }}>
                <Box py={3}>
                  <Typography
                    style={{
                      textAlign: "justify",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      ❖
                      <p style={{ marginTop: "0px", marginLeft: "16px" }}>
                        It is very essential for the farmers to choose a crop
                        that best suits the land being used for cultivation.
                        Farmers should get benefited by cultivating the best
                        fitting crops rather than cultivating unsuitable crops.
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      ❖
                      <p style={{ marginTop: "0px", marginLeft: "16px" }}>
                        The common difficulty present among the Indian farmers
                        is, they don’t opt for the proper crop based on their
                        soil requirements. Due to this, they face a serious
                        setback in productivity.
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      ❖
                      <p style={{ marginTop: "0px", marginLeft: "16px" }}>
                        Choosing incorrect decisions would lead to crop failure,
                        and this would result in a complete loss to farmers.
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      ❖
                      <p style={{ marginTop: "0px", marginLeft: "16px" }}>
                        Weeds are the plants growing in the wrong place which
                        competes with crops for water, light, nutrients, and
                        space, causing reduction in yield. And in order to
                        remove weeds, farmers started using deadly poisons as
                        herbicides. By doing so they had success in increasing
                        productivity but they’ve forgotten the damage done to
                        the environment.
                      </p>
                    </div>
                  </Typography>
                </Box>

                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  style={{ width: "200px", height: "40px", margin: "auto" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/profile")}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "2px solid #eee",
                    }}
                  >
                    VIEW PROFILE
                  </Button>
                </motion.div>
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <motion.img
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                src="https://i.guim.co.uk/img/media/538955ce854fce14ee4b688239838776b50e87a9/0_26_1280_768/master/1280.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b5146dd44bed6d9f903b5b65838aba4f"
                alt="crops"
                style={{
                  width: matches ? "500px" : "250px",
                  height: matches ? "300px" : "215px",
                  border: "3px solid #eee",
                  boxShadow: "rgba(1, 1, 1, 0.2) 0px 20px 30px",
                }}
              />
              {!matches && (
                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/profile")}
                    style={{ margin: "30px" }}
                  >
                    VIEW PROFILE
                  </Button>
                </motion.div>
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default AboutView;
