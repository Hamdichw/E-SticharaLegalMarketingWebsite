/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import Logo from 'components/logo';
import { Link } from 'components/link';
import FooterWidget from 'components/footer/widget';
import { menuItems, footerNav } from './footer.data';
import { rgba } from 'polished';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footerTopInner}>
          {menuItems.map(({ id, title, items }) => (
            <FooterWidget key={id} title={title} items={items} />
          ))}
        </Box>
      </Container>
      <Container>
        <Box sx={styles.footerInner}>
          <Box sx={styles.copyright}>
            <Logo sx={styles.logo} light />
            <Text as="span">
              Copyright by {new Date().getFullYear()} PFE TEAM
            </Text>
          </Box>

          
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#10132D',
    pt: 9,
  },
  footerTopInner: {
    gap: [30, 50, 50, 50, 30,200],
    display: ['flex'], // Changed to flex
    justifyContent: 'left', // Aligns items with space between them
    alignItems: 'center', // Aligns items vertically centered
    mb: [null, null, null, 7],
    margin: "0px 30px"
},

  footerInner: {
    borderTop: [null, null, null, `1px solid ${rgba('white', 0.15)}`],
   
    padding: ['30px 0 20px', null, null, '30px 0 35px', '35px 0 40px'],
  },
  copyright: {
    display: ['flex'],
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      fontSize: '14px',
      lineHeight: 1.29,
      color: 'white',
      mt: ['18px', '18px', '7px'],
    },
  },
  logo: {
    mr: 3,
  },
  footerNav: {
    listStyle: 'none',
    margin: ['15px 0 0', '15px 0 0', '0'],
    padding: 0,
    display: ['flex'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, 'flex-start'],
    'li + li': {
      ml: ['18px', null, '20px'],
      '@media only screen and (max-width: 400px)': {
        mb: '10px',
      },
    },
    a: {
      color: 'white',
      fontSize: [1, null, null, 2],
      textDecoration: 'none',
    },
  },
};
