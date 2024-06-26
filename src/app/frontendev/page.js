/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-25 21:29:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-26 18:25:41
 * @FilePath: /online-course-project/src/app/frontendev/page.js
 */
"use client";

import CourseCard from "@/components/CourseCard";
import FilterSelection from "@/components/FilterSelection";
import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const FrontendevPage = () => {
  const options = ["HTML", "CSS", "JavaScript", "React", "Vue", "Angular"];

  return (
    <div>
      <MainNav />
      <Box
        sx={(theme) => ({
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, .4)",
          backgroundBlendMode: "multiply",
          backgroundImage: "url('/images/image01.webp')",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center, -350px",
        })}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack spacing={2} sx={{ width: { xs: "100%" } }}>
            <Typography
              variant="h1"
              sx={{
                alignSelf: "center",
                textAlign: "center",
                fontWeight: 700,
                color: "#fff",
                textShadow: "black 0.1em 0.1em 0.2em",
                fontSize: "clamp(2.5rem, 10vw, 3rem)",
              }}
            >
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
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </Stack>
        <Stack spacing={2} sx={{ mt: 8 }}>
          <Pagination
            sx={{ justifyContent: "center", display: "flex" }}
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

export default FrontendevPage;
