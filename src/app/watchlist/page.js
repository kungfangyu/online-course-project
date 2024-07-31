/*
 * @Author: Fangyu Kung
 * @Date: 2024-07-01 17:27:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-31 19:57:16
 * @FilePath: /online-course-project/src/app/watchlist/page.js
 */

"use client";

import { deleteCourseFromWatchList, getWatchList } from "@/api/watchlist";
import styles from "@/components/course.module.css";
import MainNav from "@/components/MainNav";
import WatchCard from "@/components/WatchCard";
import { parseJwt } from "@/helps/parseJWT";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useCallback, useEffect, useState } from "react";

const WatchListPage = () => {
  const [courses, setCourses] = useState([]);

  const fetchWatchList = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = parseJwt(token).id;
      const response = await getWatchList(userId);
      setCourses(response.data.items);
      console.log(response.data);
      if (!token) {
        throw new Error("User is not authenticated");
      }
      console.log(token);
    } catch (error) {
      console.error("Error fetching watchList:", error);
    }
  }, []);

  const handleRemoveCourse = async (courseId) => {
    try {
      const token = localStorage.getItem("token");
      const userId = parseJwt(token).id;
      if (!token) {
        throw new Error("User is not authenticated");
      }
      const response = await deleteCourseFromWatchList(userId, courseId);
      if (response.status === 200) {
        fetchWatchList();
      } else {
        console.error(
          "Failed to remove course from watchList:",
          response.message
        );
      }
    } catch (error) {
      console.error("Error removing course from watchList:", error);
    }
  };

  useEffect(() => {
    fetchWatchList();
  }, [fetchWatchList]);

  return (
    <>
      <MainNav />
      <Box className={styles.courseDetailBackground}>
        <Container className={styles.courseMainContainer}>
          <Typography variant="h1" className={styles.courseDetailPageTitle}>
            Watch List
          </Typography>
          <Divider />
        </Container>
        <Container>
          <WatchCard
            courses={courses}
            handleRemoveCourse={handleRemoveCourse}
          />
        </Container>
      </Box>
    </>
  );
};

export default WatchListPage;
