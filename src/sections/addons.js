/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import addons from 'assets/images/addons.png';

const Addons = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <SectionHeading
            sx={styles.heading}
            title="Seamlessly Integrated with Advanced Electronic Signature Management"
            description="Experience seamless add-on management with our platform's integrated electronic signature solution. Just as our data centers boast top-notch security and surveillance with a reliable 99.9% uptime, our electronic signature feature ensures the utmost protection. With encryption at rest and end-to-end, alongside S/MIME message encryption for emails, your electronic signatures are safeguarded at every step. Trust in our platform for efficient and secure electronic signature management."
          />
          <Flex sx={styles.illustration}>
            <Image src={addons} alt="addons" />
          </Flex>
        </Box>
      </Container>
    </section>
  );
};

export default Addons;

const styles = {
  section: {
    pt: [6, null, null, 8, 10, 11],
    pb: [8, null, null, 12, null, 14],
  },
  grid: {
    display: 'grid',
    alignItems: 'center',
    gap: 6,
    gridTemplateColumns: ['1fr', null, null, 'repeat(2, 1fr)', '500px 1fr'],
  },
  heading: {
    textAlign: ['center', null, null, 'left'],
    h3: {
      fontSize: [3, null, null, 6, 11],
      lineHeight: 1.53,
    },
  },
  illustration: {
    alignItems: 'center',
  },
};
