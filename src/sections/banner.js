/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from "react";
import { rgba } from "polished";
import { jsx, Flex, Container, Heading, Text, Button } from "theme-ui";
import Image from "components/image";
import Play from "components/icons/play";
import dynamic from "next/dynamic";
// import ModalVideo from 'react-modal-video';
const ModalVideo = dynamic(
  () => {
    return import("react-modal-video");
  },
  { ssr: false }
);
import banner from "assets/images/home.png";

const Banner = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  const handleDownloadClick = () => {
    window.open('https://www.mediafire.com/file/60ikoemnrcad4od/e-stichara-legal-1.0.0+Setup.exe/file', '_blank');
};
  return (
    <section id="home" sx={styles.section}>
      <Container sx={styles.container}>
        <div sx={styles.content}>
          <Heading as="h1">
            Elevate Your Legal Experience: Seamless Consultations, Electronic
            Signatures, and Real-time Chat
          </Heading>
          <Text as="p">Your E-stichara Legal for Remote Legal Solutions</Text>
          <Flex sx={styles.buttonGroup}>
            <Button
              variant="primary"
              sx={styles.btnPrimary}
              onClick={handleDownloadClick}
            >
              Download Application
            </Button>
            <Button
              variant="outlined"
              sx={styles.btnOutlined}
              onClick={handleClick}
            >
              Discover video <Play fill="white" />
            </Button>
            <ModalVideo
              channel="youtube"
              isOpen={videoOpen}
              videoId="GvSRUQlIrls"
              onClose={() => setVideoOpen(false)}
            />
          </Flex>
        </div>
        <Flex as="figure" sx={styles.illustration}>
          <Image src={banner} alt="banner" />
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    backgroundColor: "#213350",
    // pt: [8, null, null, null, 10, 14],
    // pb: [8, null, null, null, 10, 14],
    position: "relative",
    zIndex: 0,
    "::before": {
      backgroundColor: "white",
      content: `''`,
      position: "absolute",
      height: [30, null, null, 70, 85, 120],
      bottom: 0,
      width: "100%",
      zIndex: -1,
    },
  },
  container: {
    minHeight: [null, null, null, null, null, "100vh"],
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  content: {
    maxWidth: [null, null, null, 570, 690],
    textAlign: "center",
    marginTop: [18, null, null, 22, 180],
    h1: {
      color: "white",
      fontSize: [5, null, null, 10, 12],
      lineHeight: 1.2,
    },
    p: {
      color: rgba("white", 0.8),
      fontSize: [1, null, null, 2],
      marginTop: [3, null, null, 6],
    },
  },
  buttonGroup: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: [6, null, null, 8],
    position: "relative",
    zIndex: 2,
    button: {
      px: ["12px", null, null, "18px"],
    },
  },
  btnPrimary: {},
  btnOutlined: {
    borderColor: rgba("white", 0.25),
    color: "white",
    ml: 3,
    svg: {
      ml: 2,
    },
  },
  illustration: {
    transform: ["scale(1.20)", null, null, "none"],
    alignItems: "center",
    display: "flex",
    marginTop: [4, null, null, 4, 5],
  },
};

