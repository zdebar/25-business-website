import { Box, Typography, Container } from '@mui/joy';

export default function Services () {
  return (
    <Container>
      <Box sx={{ my: 5 }}>
        <Typography level="h2" sx={{ textAlign: 'center', mb: 3 }}>
          Our Services
        </Typography>
        <Typography level="body-md" sx={{ mb: 2 }}>
          - Service 1: Description of the first service.
        </Typography>
        <Typography level="body-md" sx={{ mb: 2 }}>
          - Service 2: Description of the second service.
        </Typography>
        <Typography level="body-md" sx={{ mb: 2 }}>
          - Service 3: Description of the third service.
        </Typography>
      </Box>
    </Container>
  );
};
