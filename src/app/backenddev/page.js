/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-25 21:29:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-26 19:31:01
 * @FilePath: /online-course-project/src/app/backenddev/page.js
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

const BackendDevPage = () => {
  const options = ["Node.js", "Express", "MongoDB", "SQL", "Python", "Django"];

  const backendCourses = [
    {
      courseId: "BE101",
      title: "Introduction to Node.js & Express",
      lecturer: "Alice Johnson",
      postDate: "2024-01-15",
    },
    {
      courseId: "BE102",
      title: "Advanced MongoDB Techniques",
      lecturer: "Robert Smith",
      postDate: "2024-02-10",
    },
    {
      courseId: "BE103",
      title: "SQL Database Management",
      lecturer: "Jessica Brown",
      postDate: "2024-03-05",
    },
    {
      courseId: "BE104",
      title: "Building APIs with Python and Flask",
      lecturer: "David Wilson",
      postDate: "2024-04-12",
    },
    {
      courseId: "BE105",
      title: "Web Development with Django",
      lecturer: "Daniel Miller",
      postDate: "2024-05-20",
    },
    {
      courseId: "BE106",
      title: "Scalable Back-End Architecture",
      lecturer: "Emma Martinez",
      postDate: "2024-06-18",
    },
  ];

  return (
    <div>
      <MainNav />
      <Box
        className={styles.courseBackground}
        style={{
          backgroundImage: "url('/images/backend-image.webp')",
        }}
      >
        <Container className={styles.courseMainContainer}>
          <Stack spacing={2} sx={{ width: { xs: "100%" } }}>
            <Typography variant="h1" className={styles.coursePageTitle}>
              Back End Development
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
            <CourseList courses={backendCourses} />
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

export default BackendDevPage;
