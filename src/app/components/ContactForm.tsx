import { Box, Typography, Input, FormControl, FormLabel, Button, Container } from '@mui/joy';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message submitted!');
  };

  return (
    <Container>
      <Box sx={{ my: 5 }}>
        <Typography level="h2" sx={{ textAlign: 'center', mb: 3 }}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" variant="outlined" />
            </FormControl>
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" variant="outlined" />
            </FormControl>
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormControl>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Input id="message" variant="outlined"/>
            </FormControl>
          </Box>
          <Button variant="solid" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
