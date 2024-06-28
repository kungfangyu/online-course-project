/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-27 18:00:55
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-28 17:36:03
 * @FilePath: /online-course-project/src/components/CourseContent.js
 */
"use client";

import styles from "@/components/course.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Fade from "@mui/material/Fade";
import { useState } from "react";

import MovieIcon from "@mui/icons-material/Movie";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

const CourseContent = ({ courseVideos, courseId }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <Box mt={4}>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          "& .MuiAccordion-region": {
            height: expanded ? "auto" : 0,
          },
          "& .MuiAccordionDetails-root": {
            display: expanded ? "block" : "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className={styles.chapterTitle}>Chapter 0</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ padding: "0 16px 32px" }}>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              justifyContent: "space-around",
            }}
          >
            {courseVideos.map((video) => (
              <Link key={video.id} href={`/frontendev/${courseId}/${video.id}`}>
                <ListItem disableGutters secondaryAction={video.duration}>
                  <MovieIcon className={styles.watchIcon} />
                  <ListItemText ml={4} primary={video.title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CourseContent;
