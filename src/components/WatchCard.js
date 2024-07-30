/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-26 15:28:27
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-01 18:05:11
 * @FilePath: /online-course-project/src/components/WatchCard.js
 */
import { DeleteOutlined } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const WatchCard = ({ courses }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Grid container spacing={2} justifyContent="space-around">
      {courses.map((course) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={course.courseId}>
            <Card
              sx={{
                flexGrow: 1,
                outline: "1px solid",
                outlineColor: "#dee4ec",
                backgroundColor: "#fff",
                height: "100%",
              }}
            >
              <Link href={`/frontenddev/${course.courseId}`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="194"
                    image={course.image_url}
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
                      Post Date: {course.published}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions disableSpacing>
                <IconButton>
                  <DeleteOutlined />
                </IconButton>
                <IconButton
                  onClick={
                    <Link href={`/frontenddev/${course.courseId}`}></Link>
                  }
                >
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

export default WatchCard;
