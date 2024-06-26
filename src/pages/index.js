import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Faq from 'sections/faq';
import Testimonials from 'sections/testimonials';
import Security from 'sections/security';
import Addons from 'sections/addons';
import MobileApp from 'sections/mobile-app';
import Dashboard from 'sections/dashboard';
import UltimateFeatures from 'sections/ultimate-features';
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="E-stichara Legal"
          description="Elevate Your Legal Experience: Seamless Consultations, Electronic Signatures, and Real-time Chat"
        />
        <Banner />
        <Testimonials />
        <Security />
        <Addons />
        <Dashboard />
        {/* <UltimateFeatures /> */}
        <MobileApp />
      </Layout>
    </ThemeProvider>
  );
}
