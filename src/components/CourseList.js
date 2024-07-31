/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-26 15:28:27
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-31 22:26:39
 * @FilePath: /online-course-project/src/components/CourseList.js
 */
import {
  addCourseToWatchList,
  deleteCourseFromWatchList,
} from "@/api/watchlist";
import { parseJwt } from "@/helps/parseJWT";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useState } from "react";

const CourseList = ({ courses, category, isLogin, fetchCoursesList }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [courseList, setCourseList] = useState(courses);

  const handleAddToWatch = async (courseId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User is not authenticated");
      }
      const userId = parseJwt(token).id;
      const response = await addCourseToWatchList(userId, courseId);
      fetchCoursesList();
      console.log("Course added to watchList:", response.data);
    } catch (error) {
      console.error("Error adding course to watchList:", error);
    }
  };

  const handleRemoveFromWatch = async (courseId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User is not authenticated");
      }

      const userId = parseJwt(token).id;
      const response = await deleteCourseFromWatchList(userId, courseId);
      if (response.status === 200) {
        console.log("Course removed from watchList:", response.message);
        fetchCoursesList();
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

  const handleClick = (courseId, isChecked) => {
    if (isLogin) {
      const updatedCourses = courseList.map((course) =>
        course.courseId === courseId ? { ...course, isAdd: isChecked } : course
      );
      setCourseList(updatedCourses);

      if (isChecked) {
        handleAddToWatch(courseId);
      } else {
        handleRemoveFromWatch(courseId);
      }
    }
  };

  return (
    <Grid container spacing={2}>
      {courses.map((course) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={course.courseId}>
            <Card
              sx={{
                flexGrow: 1,
                outline: "1px solid",
                outlineColor: "#dee4ec",
                backgroundColor: "#fff",
                height: "100%",
              }}
            >
              <Link href={`/${category}/${course.courseId}`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="194"
                    image={course.imageUrl}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {course.courseName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lecture: {course.instructor}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Post Date: {course.postedDate}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions disableSpacing>
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  checked={course.isAdd}
                  onChange={(event) => {
                    handleClick(course.courseId, event.target.checked);
                  }}
                  disabled={!isLogin}
                />
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CourseList;
