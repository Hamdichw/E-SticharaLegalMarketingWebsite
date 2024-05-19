/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Image as Img } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import app from 'assets/images/app.png';
import appStore from 'assets/images/app-store.png';
import googlePlay from 'assets/images/google-play.png';

const MobileApp = () => {
  const handleDownloadClick = () => {
    window.open('https://www.mediafire.com/file/zyiejzalq2a4dpb/app-release.apk/file', '_blank');
};
  return (
    <section sx={styles.section}  id="mobileApp" >
      <Container>
        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={app} alt="privacy" />
          </Flex>
          <Box>
            <SectionHeading
              sx={styles.heading}
              title="Beyond on limitation with our android and iOS mobile application"
              description="E-Stichara Legal's mobile application offers a seamless and intuitive platform for accessing professional legal consultation. Users can easily browse through lawyer profiles, schedule online consultations, and manage legal documents securely, all from their mobile device. With features like secure document sharing and real-time chat with lawyers, clients can efficiently address their legal concerns anytime, anywhere. E-Stichara Legal's mobile app makes quality legal advice just a tap away."
            />
            <Flex sx={styles.buttonGroup}>
              <Img src={appStore} alt="appStore"  />
              <Img src={googlePlay} sx={{ ml: 3 }} alt="googlePlay" onClick={handleDownloadClick}/>
            </Flex>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default MobileApp;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [6, null, null, 8, 10, 11],
  },
  grid: {
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    alignItems: 'center',
    gap: [null, null, null, 6, null, 14],
    gridTemplateColumns: ['1fr', null, null, 'repeat(2, 1fr)', '445px 500px'],
    justifyContent: 'center',
  },
  illustration: {
    alignItems: 'center',
    mt: [8, null, null, 0],
  },
  heading: {
    textAlign: ['center', null, null, 'left'],
    h3: {
      fontSize: [3, null, null, 6, 10, 11],
      lineHeight: 1.53,
    },
  },
  buttonGroup: {
    alignItems: 'center',
    justifyContent: ['center', null, null, 'unset'],
    mt: [4, null, null, 10],
    img: {
      maxWidth: ['120px', null, null, 'none'],
    },
  },
};
