/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-27 18:07:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-28 18:00:30
 * @FilePath: /online-course-project/src/app/frontendev/[frontCourseDetail]/[courseVideoId]/page.js
 */
import MainNav from "@/components/MainNav";
import styles from "@/components/course.module.css";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Box, Container, Stack, Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
const CourseVideoPage = () => {
  const videoData = {
    title: "Introduction to HTML & CSS",
    description: "An introductory course on HTML and CSS.",
    lecturer: "Jane Smith",
    published: "2024-01-15",
    language: "English",
    youtubeUrl: "https://www.youtube.com/embed/6v2L2UGZJAM", // 示例 YouTube 影片 URL
  };

  return (
    <>
      <MainNav />
      <Box className={styles.courseDetailBackground}>
        <Container className={styles.courseMainContainer}>
          <Stack spacing={2} sx={{ width: { xs: "100%" } }}>
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
              <Box mx={1}>Post Date: {videoData.published}</Box>
              <Box mx={1}>Language: {videoData.language}</Box>
            </Typography>
            <Box mt={4}>
              <iframe
                width="100%"
                height="500"
                src={videoData.youtubeUrl}
                title={videoData.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
          </Stack>
        </Container>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Fab variant="extended" size="small" color="primary">
            <SkipPreviousIcon sx={{ mr: 1 }} />
            Previous Lecture
          </Fab>
          <Fab variant="extended" size="small" color="primary">
            <SkipNextIcon sx={{ mr: 1 }} />
            Next Lecture
          </Fab>
        </Container>
      </Box>
    </>
  );
};

export default CourseVideoPage;
