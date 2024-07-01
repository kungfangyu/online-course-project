/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-27 18:07:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-01 16:37:50
 * @FilePath: /online-course-project/src/app/frontendev/[frontCourseDetail]/[courseVideoId]/page.js
 */
"use client";

import MainNav from "@/components/MainNav";
import styles from "@/components/course.module.css";
import { FRONTEND_PATH } from "@/helps/variables";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useParams } from "next/navigation";

const CourseVideoPage = () => {
  const videoData = {
    title: "Introduction to HTML & CSS",
    description: "An introductory course on HTML and CSS.",
    lecturer: "Jane Smith",
    published: "2024-01-15",
    language: "English",
    youtubeUrl: "https://www.youtube.com/embed/6v2L2UGZJAM", // 示例 YouTube 影片 URL
  };

  const router = useParams();
  const courseDetailPath = `/${FRONTEND_PATH}/${router.frontCourseDetail}`;

  return (
    <>
      <MainNav />

      <Box className={styles.courseDetailBackground}>
        <Container className={styles.courseMainContainer}>
          <Stack spacing={2} sx={{ width: { xs: "100%" } }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                color="inherit"
                href={`/${FRONTEND_PATH}`}
              >
                Course List
              </Link>
              <Link underline="hover" color="inherit" href={courseDetailPath}>
                Course Details
              </Link>
              <Typography color="text.primary"> {videoData.title}</Typography>
            </Breadcrumbs>
            <Typography variant="h1" className={styles.courseDetailPageTitle}>
              {videoData.title}
            </Typography>
            <Typography
              variant="h2"
              className={styles.courseDetailPageSubTitle}
            >
              {videoData.description}
            </Typography>
            <Typography variant="text" mt={4} color="#8c8c8c">
              Lecturer: {videoData.lecturer}
            </Typography>
            <Typography
              variant="div"
              color="#8c8c8c"
              alignItems="center"
              display="flex"
            >
              <Box>Post Date: {videoData.published}</Box>
              <Box mx={1}>Language: {videoData.language}</Box>
            </Typography>
            <Box mt={4}>
              <iframe
                width="100%"
                height="500"
                src={videoData.youtubeUrl}
                title={videoData.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
          </Stack>
        </Container>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="text"
            color="primary"
            startIcon={<SkipPreviousIcon />}
          >
            Previous Lecture
          </Button>
          <Button variant="text" color="primary" endIcon={<SkipNextIcon />}>
            Next Lecture
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default CourseVideoPage;
