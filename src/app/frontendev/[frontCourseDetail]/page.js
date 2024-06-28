/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-26 19:50:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-28 17:22:54
 * @FilePath: /online-course-project/src/app/frontendev/[frontCourseDetail]/page.js
 */
"use client";
import CourseContent from "@/components/CourseContent";
import MainNav from "@/components/MainNav";
import styles from "@/components/course.module.css";
import LanguageIcon from "@mui/icons-material/Language";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Container, Stack, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import { useState } from "react";

const singleCourse = {
  courseId: "FE101",
  title: "Introduction to HTML & CSS",
  description: "description description description description",
  lecturer: "Jane Smith",
  category: "FE",
  image_url: "/images/image01.webp",
  language: "English",
  videos: [
    {
      id: "FE10101",
      title: "Introduction to HTML & CSS #0",
      description: "Introduction",
      youtube_id: "string",
      duration: "6:10",
      order: "1",
      iframe: "https://www.youtube.com/embed/6v2L2UGZJAM",
    },
    {
      id: "FE10102",
      title: "Introduction to HTML & CSS #1",
      description: "Introduction",
      youtube_id: "string",
      duration: "6:10",
      order: "2",
      iframe: "https://www.youtube.com/embed/6v2L2UGZJAM",
    },
  ],
  published: "2024-01-15",
};
const FrontCourseDetailPage = ({ courses }) => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(courses);

  return (
    <div>
      <MainNav />
      <Box className={styles.courseDetailBackground}>
        <Container className={styles.courseMainContainer}>
          <Stack spacing={2} sx={{ width: { xs: "100%" } }}>
            <Typography variant="h1" className={styles.courseDetailPageTitle}>
              {singleCourse.title}
            </Typography>
            <Typography
              variant="h2"
              className={styles.courseDetailPageSubTitle}
            >
              {singleCourse.description}
            </Typography>
            <Typography variant="text" mt={4} color="#8c8c8c">
              Lecturer: {singleCourse.lecturer}
            </Typography>
            <Typography
              variant="div"
              color="#8c8c8c"
              alignItems="center"
              display="flex"
            >
              <TipsAndUpdatesIcon />
              <Box mx={1}>Post Date: {singleCourse.published}</Box>
              <LanguageIcon />
              <Box mx={1}>Language: {singleCourse.language}</Box>
            </Typography>
          </Stack>
        </Container>
        {/* <Divider /> */}
        <Container>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value} centered>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Course Content" value="1" />
                  <Tab label="Lecturer Introduction" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <CourseContent
                  courseVideos={singleCourse.videos}
                  courseId={singleCourse.courseId}
                />
              </TabPanel>
              <TabPanel value="2">Lecturer Introduction</TabPanel>
            </TabContext>
          </Box>
        </Container>
        <Container></Container>
      </Box>
    </div>
  );
};

export default FrontCourseDetailPage;
