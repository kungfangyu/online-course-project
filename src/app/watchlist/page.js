/*
 * @Author: Fangyu Kung
 * @Date: 2024-07-01 17:27:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-01 18:03:17
 * @FilePath: /online-course-project/src/app/watchlist/page.js
 */

"use client";

import styles from "@/components/course.module.css";
import MainNav from "@/components/MainNav";
import WatchCard from "@/components/WatchCard";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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
  {
    courseId: "FE104",
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

const WatchListPage = () => {
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
          <WatchCard courses={courses} />
        </Container>
      </Box>
    </>
  );
};

export default WatchListPage;
