import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppAppBar from '../components/AppAppBar.tsx';
import Hero from '../components/Hero.tsx';
import LogoCollection from '../components/LogoCollection.tsx';
import Highlights from '../components/Highlights.tsx';
import Pricing from '../components/Pricing.tsx';
import Features from '../components/Features.tsx';
import Testimonials from '../components/Testimonials.tsx';
import FAQ from '../components/FAQ.tsx';
import Footer from '../components/Footer.tsx';
import { useGlobalTheme } from "../shared/hooks/useGlobalTheme.tsx";

export default function LandingPage() {

    const { mode, toggleColorMode } = useGlobalTheme();

  return (
      <>
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
      </>
  );
}
