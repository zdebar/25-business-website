import { Button, Typography, Container, Box } from '@mui/joy';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home () {
  return (
    <Container>
      <Header></Header>
      <Box sx={{ textAlign: 'center', my: 5 }}>
        <Typography level="h1">Welcome to Our Business</Typography>
        <Typography level="body-md" sx={{ my: 2 }}>
          We offer the best solutions for your business needs.
        </Typography>
        <Button variant="solid" color="primary" href="/contact">
          Contact Us
        </Button>
      </Box>
      <Footer></Footer>
    </Container>
  );
};


