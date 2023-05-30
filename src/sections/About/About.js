import React from "react";
import {
  useTheme,
  Grid,
  Typography,
  makeStyles,
  Box,
  useMediaQuery,
} from "@material-ui/core";
import SectionContainer from "../../containers/SectionContainer";
import Skills from "../../components/Skills";
import Avatar from "../../components/Avatar";
import { useTranslation } from "react-i18next";

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();
  return (
    <SectionContainer id="about" title={t("menu_about")} maxWidth="md">
      <Grid container spacing={0} alignItems="center" style={{ width: "100%" }}>
        {isMobile && (
          <Grid item xs={12} md={5} className={classes.gridItemWrapper}>
            <Box mb={6}>
              <Avatar />
            </Box>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={7}
          className={classes.gridItemWrapper}
          style={{ flexDirection: "column", alignItems: "space-around" }}
        >
          <Box mb={4}>
            <Typography variant="body1">
              Full-Stack (FE-heavy) Developer with 5+ years of hands-on
              experience building web and mobile apps with JavaScript, Java,
              Angular, Spring Boot, React, Flutter, HTML/CSS and delivering
              exceptional customer experiences. Great at communication,
              understanding project requirements, and delivering scalable code
              in a timely fashion. Adept at contributing to a highly
              collaborative work environment, finding solutions, and determining
              customer satisfaction.
            </Typography>
          </Box>
          <Skills />
        </Grid>
        {!isMobile && (
          <Grid item xs={12} md={5} className={classes.gridItemWrapper}>
            <Avatar />
          </Grid>
        )}
      </Grid>
    </SectionContainer>
  );
};

const useStyles = makeStyles((theme) => ({
  gridItemWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default About;
