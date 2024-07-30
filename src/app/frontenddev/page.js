/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-25 21:29:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-30 15:45:41
 * @FilePath: /online-course-project/src/app/frontenddev/page.js
 */
"use client";

import { getCourseList } from "@/api/courses";
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
import { useEffect, useState } from "react";

const FrontendPage = () => {
  const [courses, setCourses] = useState([]);
  const options = ["HTML", "CSS", "JavaScript", "React", "Vue", "Angular"];

  useEffect(() => {
    const fetchCoursesList = async () => {
      try {
        const response = await getCourseList("frontend");
        console.log(response.data);
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCoursesList();
  }, []);

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

export default FrontendPage;
