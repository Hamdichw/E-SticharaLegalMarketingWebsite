/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import privacy from 'assets/images/privacy.png';

const Security = () => {
  return (
    <section sx={styles.section} id="features">
      <Container>
        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={privacy} alt="privacy" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            title=" Unrivaled Security for Legal Professionals"
            description="Welcome to our lawyer platform, where your data's security is our top priority. With specialized security measures tailored for legal professionals, we ensure the utmost protection for your sensitive information. Our robust data centers guarantee uninterrupted access with a stellar 99.9% uptime. Through advanced encryption technologies, including S/MIME message encryption, your communications remain shielded from any potential threats. Trust in our platform for the peace of mind you deserve, knowing your clients' confidential data is in the safest hands possible."
          />
        </Box>
      </Container>
    </section>
  );
};

export default Security;

const styles = {
  section: {
    pt: [6, null, null, null, 10, 14],
    pb: [6, null, null, 8, 10, 11],
  },
  grid: {
    display: ['flex', null, null, 'grid'],
    alignItems: 'center',
    gap: [null, null, null, 6, 14],
    flexDirection: ['column-reverse', null, null, 'unset'],
    gridTemplateColumns: ['1fr', null, null, 'repeat(2, 1fr)', '1fr 470px'],
  },
  heading: {
    textAlign: ['center', null, null, 'left'],
    h3: {
      fontSize: [3, null, null, 8, 11],
      lineHeight: 1.53,
    },
  },
  illustration: {
    alignItems: 'center',
    mt: [8, null, 0],
  },
};
