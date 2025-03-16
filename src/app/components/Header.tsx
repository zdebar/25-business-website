"use client"

import { Box, Button, Link } from '@mui/joy';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, backgroundColor: '#1976d2' }}>
      <Link href="/" sx={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
        Business Website
      </Link>
      <Box>
        <Button onClick={() => router.push('/about')} sx={{ color: 'white', mx: 2 }}>
          About
        </Button>
        <Button onClick={() => router.push('/services')} sx={{ color: 'white', mx: 2 }}>
          Services
        </Button>
        <Button onClick={() => router.push('/contact')} sx={{ color: 'white', mx: 2 }}>
          Contact
        </Button>
      </Box>
    </Box>
  );
};
