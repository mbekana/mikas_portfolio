import React, { useState } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Grid, makeStyles } from "@material-ui/core";
import Card from "./Card";
import ExtendedCard from "./ExtendedCard";
// import { projectList } from "../../data";
import { useTranslation } from "react-i18next";
import Dispute from "../../assets/images/request_history.png";
import Inventory from "../../assets/images/Inventory_dashboard.png";
import Salary from "../../assets/images/Salary_Advancement.png";
import Flutter from "../../assets/images/miki.jpg";
import EtTranslate from "../../assets/images/translation.jpg";
import Construction from "../../assets/images/construction.jpg";
const projectList = [
  {
    id: 1,
    title: "Dispute Management System",
    technologies: ["React JS", "Node JS", "MongoDB"],
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    frontImage: Dispute,
  },
  {
    id: 2,
    title: "Inventory Management System",
    technologies: ["React JS"],
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    frontImage: Inventory,
  },
  {
    id: 3,
    title: "Salary Advancement",
    technologies: ["React JS", "Node JS", "MongoDB"],
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    frontImage: Salary,
  },

  {
    id: 4,
    title: "Customer Onboarding",
    technologies: ["Flutter", "Spring Boot", "Angular", "MSSQL"],
    backgroundImage:
      "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    frontImage: Flutter,
    description:
      "Lowering support costs can greatly reduce pain points and improve the customer experience.",
  },

  {
    id: 5,
    title: "Ethio Translate",
    technologies: ["React JS", "Node JS", "MongoDB"],
    backgroundImage:
      "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    frontImage: EtTranslate,
  },

  {
    id: 6,
    title: "Site Construction Management",
    technologies: ["React", "Spring Boot", "AWS", "OAuth 2.0", "MS Sql"],
    backgroundImage:
      "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    frontImage: Construction,
  },
];

const ProjectsGallery = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState(null);

  const getSelected = (id) => projectList.find((elem) => elem.id === id);
  return (
    <AnimateSharedLayout type="crossfade">
      <Grid container spacing={4} className={classes.galleryContainer}>
        {projectList.map((item, k) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={item.id}
            classes={{ item: classes.item }}
          >
            <Card
              id={item.id}
              title={item.title}
              overview={item.description}
              backgroundImage={item.backgroundImage}
              frontImage={item.frontImage}
              technologies={item.technologies}
              onClick={() => setSelectedId(item.id)}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
            />
          </Grid>
        ))}
      </Grid>
      <AnimatePresence>
        {selectedId && (
          <ExtendedCard
            key={selectedId}
            id={selectedId}
            title={getSelected(selectedId).title}
            overview={t(`projects_${selectedId}_extended_overview`)}
            backgroundImage={getSelected(selectedId).backgroundImage}
            frontImage={getSelected(selectedId).frontImage}
            technologies={getSelected(selectedId).technologies}
            handleClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

const useStyles = makeStyles((theme) => ({
  galleryContainer: {
    overflow: "visible",
    width: "100%",
    margin: "0 auto",
  },
  item: {
    overflow: "visible",
  },
}));

export default ProjectsGallery;
