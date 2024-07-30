/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-27 18:00:55
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-30 23:02:10
 * @FilePath: /online-course-project/src/components/CourseContent.js
 */
"use client";

import styles from "@/components/course.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Fade from "@mui/material/Fade";
import { useState } from "react";

import MovieIcon from "@mui/icons-material/Movie";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const CourseContent = ({ courseVideos, onVideoChange }) => {
  const [expanded, setExpanded] = useState(true);
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
          mt: 4,
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
          <Typography className={styles.chapterTitle}>
            Course Chapters
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ padding: "0 16px 32px" }}>
          <List
            sx={{
              width: "100%",
              backgroundColor: "background.paper",
              justifyContent: "space-around",
            }}
          >
            {courseVideos.map((video, index) => (
              <ListItem
                key={index}
                disableGutters
                secondaryAction={video.duration}
              >
                <Button
                  onClick={() =>
                    onVideoChange(
                      video.videoUrl,
                      video.videoTitle,
                      video.videoDescription
                    )
                  }
                >
                  <MovieIcon className={styles.watchIcon} />
                  <ListItemText ml={4} primary={video.videoTitle} />
                </Button>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CourseContent;
