/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-26 15:28:27
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-26 18:08:14
 * @FilePath: /online-course-project/src/components/CourseCard.js
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
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const CourseCard = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Card
      sx={{
        maxWidth: { sm: "100%", md: "50%" },
        flexGrow: 1,
        outline: "1px solid",
        outlineColor: "#dee4ec",
        backgroundColor: "#fff",
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
            JavaScript for Beginner
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lecture: Fane Kung
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Post Date: 2020/12/25
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
  );
};

export default CourseCard;
