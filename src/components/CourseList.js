/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-26 15:28:27
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-31 18:53:48
 * @FilePath: /online-course-project/src/components/CourseList.js
 */
import { addCourseToWatchList } from "@/api/watchlist";
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

const CourseList = ({ courses, category, isLogin }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [courseId, setCourseId] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  const handleAddToWatch = async (courseId) => {
    try {
      // 从 localStorage 中获取 token
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User is not authenticated");
      }

      const userId = parseJwt(token).id;
      const response = await addCourseToWatchList(userId, courseId);
      setIsAdd(true);
      console.log("Course added to watchList:", response.data);
    } catch (error) {
      console.error("Error adding course to watchList:", error);
    }
  };

  const handleClick = (courseId) => {
    if (isLogin) {
      setCourseId(courseId);
      handleAddToWatch(courseId);
    } else {
      console.log("Please login first");
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
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite disabled={!isLogin} />}
                  onChange={() => {
                    console.log("click");
                    handleClick(course.courseId);
                  }}
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
