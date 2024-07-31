"use client";
import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";
import Slider from "@/components/Slider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const buttonRef = useRef(null);
  const gridItemsRef = useRef([]);
  gridItemsRef.current = [];

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.fromTo(
      subTitleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 1 }
    );

    gsap.fromTo(
      gridItemsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1.5, stagger: 0.2 }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !gridItemsRef.current.includes(el)) {
      gridItemsRef.current.push(el);
    }
  };

  return (
    <>
      <MainNav />
      <Box
        sx={(theme) => ({
          width: "100%",
          backgroundImage: "linear-gradient(180deg, #CEE5FD, #FFF)",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
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
              ref={titleRef}
              variant="h1"
              sx={{
                alignSelf: "center",
                textAlign: "center",
                fontWeight: 700,
                fontSize: "clamp(3.5rem, 10vw, 4rem)",
              }}
            >
              Chose Your Learning Paths
            </Typography>
            <Typography
              ref={subTitleRef}
              component="span"
              variant="h1"
              sx={{
                fontSize: "24px",
                color: "primary.main",
                textAlign: "center",
              }}
            >
              Improve your software skills
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              <Button ref={buttonRef} variant="contained" color="primary">
                Start now
              </Button>
            </Stack>
          </Stack>
          <Slider />
        </Container>
        <Container sx={{ mt: 12 }}>
          <Typography
            ref={titleRef}
            variant="h1"
            sx={{
              alignSelf: "center",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 10vw, 3rem)",
            }}
          >
            What is Your Learning Path?
          </Typography>
          <Grid
            justifyContent={"center"}
            container
            spacing={2}
            sx={{
              pt: { xs: 8, sm: 12 },
              pb: { xs: 8, sm: 12 },
            }}
          >
            <Grid item xs={3} ref={addToRefs}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Image
                  src="/images/availability-svgrepo-com.svg"
                  alt="Availability Icon"
                  width={150}
                  height={150}
                />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Front-End
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3} ref={addToRefs}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Image
                  src="/images/host-record-svgrepo-com.svg"
                  alt="Host Record Icon"
                  width={150}
                  height={150}
                />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Back-End
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3} ref={addToRefs}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Image
                  src="/images/cloud-backup-svgrepo-com.svg"
                  alt="Cloud Backup Icon"
                  width={150}
                  height={150}
                />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  DevOps
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3} ref={addToRefs}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Image
                  src="/images/touch-click-svgrepo-com.svg"
                  alt="Touch Click Icon"
                  width={150}
                  height={150}
                />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Testing
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ my: 12 }}>
          <Typography
            ref={subTitleRef}
            variant="h1"
            sx={{
              alignSelf: "center",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 10vw, 3rem)",
            }}
          >
            Why this platform is useful to you?
          </Typography>
          <Typography
            sx={{
              mt: 8,
              textAlign: "center",
              fontWeight: 500,
              fontSize: "24px",
            }}
          >
            This website offers aspiring software engineers free learning path
            guidance and courses. It helps you choose the right courses based on
            your desired specialization, whether it’s front-end, back-end,
            DevOps, or others. Access tailored educational content and start
            your journey to becoming a software engineer, all for free.
          </Typography>
        </Container>
      </Box>
      <Footer sx={{ mt: 12 }} />
    </>
  );
}
