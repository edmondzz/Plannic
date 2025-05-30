import React, { useState } from 'react';
import { Box, Container, Typography, ToggleButton, Modal, Backdrop, Fade, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';

const yearData = {
  2020: [
    'https://source.unsplash.com/600x400/?architecture,2020-1',
    'https://source.unsplash.com/600x400/?architecture,2020-2',
    'https://source.unsplash.com/600x400/?architecture,2020-3'
  ],
  2021: [
    'https://source.unsplash.com/600x400/?architecture,2021-1',
    'https://source.unsplash.com/600x400/?architecture,2021-2',
    'https://source.unsplash.com/600x400/?architecture,2021-3'
  ],
  2022: [
    'https://source.unsplash.com/600x400/?architecture,2022-1',
    'https://source.unsplash.com/600x400/?architecture,2022-2',
    'https://source.unsplash.com/600x400/?architecture,2022-3'
  ],
  2023: [
    'https://source.unsplash.com/600x400/?architecture,2023-1',
    'https://source.unsplash.com/600x400/?architecture,2023-2',
    'https://source.unsplash.com/600x400/?architecture,2023-3'
  ],
  2024: [
    'https://source.unsplash.com/600x400/?architecture,2024-1',
    'https://source.unsplash.com/600x400/?architecture,2024-2',
    'https://source.unsplash.com/600x400/?architecture,2024-3'
  ],
  2025: [
    'https://source.unsplash.com/600x400/?architecture,2025-1',
    'https://source.unsplash.com/600x400/?architecture,2025-2',
    'https://source.unsplash.com/600x400/?architecture,2025-3',
    'https://source.unsplash.com/600x400/?architecture,2025-4'
  ],
  2026: [],
  2027: []
};

export const Home = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [open, setOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleYearChange = (event, newYear) => {
    if (newYear !== null) setSelectedYear(newYear);
  };

  const handleOpen = (imgUrl) => {
    setModalImg(imgUrl);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth='md'>
        <Typography variant='h4' fontWeight='bold' textAlign='center' gutterBottom>
          Projekte nach Jahren
        </Typography>

        {/* Timeline */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: isSmallScreen ? 'auto' : 'visible',
            justifyContent: isSmallScreen ? 'flex-start' : 'center',
            gap: 1,
            py: 1,
            px: 1,
            mt: 2,
            mb: 3,
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
          {Object.keys(yearData).map((year) => (
            <ToggleButton
              key={year}
              value={year}
              selected={selectedYear === year}
              onClick={() => handleYearChange(null, year)}
              sx={{
                flex: '0 0 auto',
                borderRadius: 2,
                px: 2,
                py: 1,
                color: selectedYear === year ? 'white' : '#444',
                backgroundColor: selectedYear === year ? 'primary.main' : '#f0f0f0',
                '&:hover': {
                  backgroundColor: selectedYear === year ? 'primary.dark' : '#e0e0e0'
                },
                transition: 'all 0.3s'
              }}>
              {year}
            </ToggleButton>
          ))}
        </Box>

        {/* Masonry Images */}
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {yearData[selectedYear].map((img, idx) => (
            <Box
              key={idx}
              component='img'
              src={img}
              alt={`project-${selectedYear}-${idx}`}
              onClick={() => handleOpen(img)}
              sx={{
                width: '100%',
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 4
                }
              }}
            />
          ))}
        </Masonry>
      </Container>

      {/* Image Modal */}
      <Modal open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '90vw',
              maxHeight: '90vh',
              outline: 'none',
              boxShadow: 6
            }}>
            <Box
              component='img'
              src={modalImg}
              alt='selected-project'
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                maxHeight: '90vh'
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};
