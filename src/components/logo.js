/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/logoEsticharalegal.png';
import logoDark from 'assets/images/logo-dark.svg';

export default function Logo({ isSticky, light, dark, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      {light ? (
        <Image src={logo} alt="E-STICHARA lEGAL logo" />
      ) : dark ? (
        <Image src={logoDark} alt="E-STICHARA lEGAL logo" />
      ) : (
        <Image src={isSticky ? logoDark : logo} alt="E-STICHARA lEGAL logo" />
      )}
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    img: {
      maxWidth: [128, null, '100%'],
    },
  },
};
