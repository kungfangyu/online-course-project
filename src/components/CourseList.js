/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-26 15:28:27
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-26 18:56:03
 * @FilePath: /online-course-project/src/components/CourseList.js
 */
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const CourseList = ({ frontendCourses }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Grid container spacing={2} justifyContent="space-around">
      {frontendCourses.map((course) => {
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
              <CardActionArea onClick={() => setPaymentType("bankTransfer")}>
                <CardMedia
                  component="img"
                  height="194"
                  image="/images/image01.webp"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lecture: {course.lecturer}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Post Date: {course.postDate}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing>
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CourseList;
