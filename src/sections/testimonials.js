/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Slider from 'react-slick';
import Testimonial from 'components/cards/testimonial';
import author1 from 'assets/images/clients/author1.png';
import author2 from 'assets/images/clients/author2.png';
import logo1 from 'assets/images/clients/logo1.png';
import logo2 from 'assets/images/clients/logo2.png';
import { rgba } from 'polished';

const data = [
  {
    id: 1,
    author: author1,
    logo: logo1,
    text: `I used this platform to get legal advice and was impressed by the quality of service. The lawyers were competent and resolved my issues efficiently.`,
    authorName: 'Ahmed Ben Salah',
    designation: 'Entrepreneur - Tunisia',
  },
  {
    id: 2,
    author: author2,
    logo: logo2,
    text: `The Lawyer platform helped me understand my legal rights in complex situations. I highly recommend their services to any man in need of legal assistance.`,
    authorName: 'Mohamed Khedher',
    designation: 'Law Student - Tunis',
  },
  {
    id: 3,
    author: author1,
    logo: logo1,
    text: `I am very satisfied with the advice I received on Lawyer. It helped me resolve a dispute quickly and at an affordable cost.`,
    authorName: 'Samir Gharbi',
    designation: 'Independent Professional - Tunisia',
  },
  {
    id: 4,
    author: author2,
    logo: logo2,
    text: `Lawyer's platform is a valuable resource for any man seeking reliable legal answers in Tunisia. Thank you for your excellent service!`,
    authorName: 'Karim Baccar',
    designation: 'Lawyer - Tunis',
  },
];



const settings = {
  arrows: false,
  dots: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <Slider sx={styles.slider} {...settings}>
          {data.map((testimonial) => (
            <Testimonial key={testimonial.id} data={testimonial} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    pt: [12, null, null, null, 10, 14],
    pb: [8, null, null, null, 10, 14],
  },
  slider: {
    '.slick-list': {
      // mx: [null, null, null, null, -2, 0],
    },
    '.slick-slide': {
      // mr: [null, null, null, null, 4, 0],
    },
    '.slick-dots': {
      display: 'flex !important',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: [3, null, null, 13],
      li: {
        mx: 1,
        display: 'flex',
      },
      button: {
        backgroundColor: rgba('#2D3D50', 0.15),
        borderRadius: 50,
        border: 0,
        cursor: 'pointer',
        padding: 0,
        overflow: 'hidden',
        textIndent: '-9999em',
        width: 10,
        height: 6,
        outline: 0,
        transition: 'all 0.3s ease-in-out 0s',
      },
      '.slick-active button': {
        backgroundColor: rgba('#2D3D50', 0.4),
        width: 20,
      },
    },
  },
};
