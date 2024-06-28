/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-25 21:29:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-28 16:32:52
 * @FilePath: /online-course-project/src/app/frontendev/page.js
 */
"use client";

import styles from "@/components/course.module.css";
import CourseList from "@/components/CourseList";
import FilterSelection from "@/components/FilterSelection";
import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const FrontendevPage = () => {
  const options = ["HTML", "CSS", "JavaScript", "React", "Vue", "Angular"];

  const courses = [
    {
      courseId: "FE101",
      title: "Introduction to HTML & CSS",
      description: "string",
      lecturer: "Jane Smith",
      category: "FE",
      image_url: "/images/image01.webp",
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
    },
    {
      courseId: "FE102",
      title: "Advanced JavaScript Techniques",
      description: "string",
      lecturer: "Jane Smith",
      category: "FE",
      image_url: "/images/image01.webp",
      videos: [
        {
          id: "FE10201",
          title: "Advanced JavaScript Techniques #0",
          description: "Introduction",
          youtube_id: "string",
          duration: "6:10",
          order: "number",
          iframe: "https://www.youtube.com/embed/6v2L2UGZJAM",
        },
      ],
      published: "2024-02-10",
    },
    {
      courseId: "FE103",
      title: "Responsive Web Design with Flexbox",
      description: "string",
      lecturer: "Emily Johnson",
      category: "FE",
      image_url: "/images/image01.webp",
      videos: [
        {
          id: "FE10301",
          title: "Responsive Web Design with Flexbox #0",
          description: "Introduction",
          youtube_id: "string",
          duration: "6:10",
          order: "number",
          iframe: "https://www.youtube.com/embed/6v2L2UGZJAM",
        },
      ],
      published: "2024-02-10",
    },
  ];

  //   const courses = [
  //     {
  //       courseId: "FE101",
  //       title: "Introduction to HTML & CSS",
  //       lecturer: "John Doe",
  //       postDate: "2024-01-15",
  //     },
  //     {
  //       courseId: "FE102",
  //       title: "Advanced JavaScript Techniques",
  //       lecturer: "Jane Smith",
  //       postDate: "2024-02-10",
  //     },
  //     {
  //       courseId: "FE103",
  //       title: "Responsive Web Design with Flexbox",
  //       lecturer: "Emily Johnson",
  //       postDate: "2024-03-05",
  //     },
  //     {
  //       courseId: "FE104",
  //       title: "Building Interactive UIs with React",
  //       lecturer: "Michael Brown",
  //       postDate: "2024-04-12",
  //     },
  //     {
  //       courseId: "FE105",
  //       title: "State Management in React with Redux",
  //       lecturer: "Chris Davis",
  //       postDate: "2024-05-20",
  //     },
  //     {
  //       courseId: "FE106",
  //       title: "Web Performance Optimization",
  //       lecturer: "Patricia Garcia",
  //       postDate: "2024-06-18",
  //     },
  //   ];
  return (
    <div>
      <MainNav />
      <Box
        className={styles.courseBackground}
        style={{
          backgroundImage: "url('/images/image01.webp')",
        }}
      >
        <Container className={styles.courseMainContainer}>
          <Stack spacing={2} sx={{ width: { xs: "100%" } }}>
            <Typography variant="h1" className={styles.coursePageTitle}>
              Front End Development
            </Typography>
            <Typography variant="h2" className={styles.coursePageSubTitle}>
              Step into the realm of front-end engineering and explore the
              fascinating world of web development.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              <Button variant="contained" color="primary">
                See your roadmap
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container
        sx={{
          pt: { xs: 8 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack direction="row" spacing={2}>
          <Box>
            <FilterSelection filter={options} />
          </Box>
          <Box>
            <CourseList courses={courses} />
          </Box>
        </Stack>
        <Stack spacing={2} mt={8}>
          <Pagination
            className={styles.pagination}
            count={5}
            showFirstButton
            showLastButton
          />
        </Stack>
      </Container>

      <Footer />
    </div>
  );
};

export default FrontendevPage;
