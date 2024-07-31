"use client";
import { getCourse } from "@/api/courses";
import styles from "@/components/course.module.css";
import CourseContent from "@/components/CourseContent";
import MainNav from "@/components/MainNav";
import { PopupAddComment } from "@/components/PopupAddComment";
import AddIcon from "@mui/icons-material/Add";
import LanguageIcon from "@mui/icons-material/Language";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const FrontCourseDetailPage = () => {
  const params = useParams();
  const courseId = params.frontCourseDetail;

  const [course, setCourse] = useState(null);
  const [value, setValue] = useState("1");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDesc, setCurrentDesc] = useState("");

  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (courseId) {
      const fetchCourses = async () => {
        try {
          const response = await getCourse(courseId);
          const result = response.data;
          setLoading(false);
          setCourse(result);
          if (result.videos && result.videos.length > 0) {
            setCurrentVideo(result.videos[0].videoUrl + "?rel=0");
            setCurrentTitle(result.videos[0].videoTitle);
            setCurrentDesc(result.videos[0].videoDescription);
          }
        } catch (error) {
          console.error("Error fetching course:", error);
          setError("Failed to load course data");
          setLoading(false);
        }
      };
      fetchCourses();
    }
  }, [courseId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!course) return <p>Course not found</p>;

  const handleVideoChange = (videoUrl, videoTitle, videoDescription) => {
    setCurrentVideo(videoUrl + "?rel=0");
    setCurrentTitle(videoTitle);
    setCurrentDesc(videoDescription);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MainNav />

      <Box className={styles.courseDetailBackground}>
        <Box pt={12}>
          <iframe
            width="100%"
            height="600"
            src={currentVideo}
            title={currentTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
        <Container className={styles.courseDetailTitleContainer}>
          <Stack spacing={2} sx={{ width: { xs: "100%" } }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: "clamp(2rem, 10vw, 2.5rem)",
                textShadow: "0.1em 0.1em 0.2em rgb(255, 255, 255)",
              }}
            >
              {currentTitle}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#8c8c8c",
                fontWeight: 400,
                fontSize: "clamp(0.6rem, 8vw, 1rem)",
              }}
            >
              {course.description}
            </Typography>
            <Typography variant="text" mt={4} color="#8c8c8c">
              Lecturer: {course.instructor}
            </Typography>
            <Typography
              variant="div"
              color="#8c8c8c"
              alignItems="center"
              display="flex"
            >
              <TipsAndUpdatesIcon />
              <Box mx={1}>Post Date: {course.postedDate}</Box>
              <LanguageIcon />
              <Box mx={1}>Language: {course.language}</Box>
            </Typography>
          </Stack>
        </Container>

        <Container sx={{ paddingBottom: "48px" }}>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value} centered>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Course Content" value="1" />
                  <Tab label="Lecturer Introduction" value="2" />
                  <Tab label="Course Feedback" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <CourseContent
                  courseVideos={course.videos}
                  courseId={course.courseId}
                  onVideoChange={handleVideoChange}
                />
              </TabPanel>
              <TabPanel value="2">{course.instructorInfo}</TabPanel>
              <TabPanel value="3">
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={() => setOpen(true)}
                >
                  Post Your Feedback
                </Button>
                {open && (
                  <PopupAddComment open={open} handleClose={handleClose} />
                )}
              </TabPanel>
            </TabContext>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default FrontCourseDetailPage;
