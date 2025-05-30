import React from 'react';
import { Box, Typography, Container, Grid, Link, Paper, Divider } from '@mui/material';
import { Email, Phone, LocationOn, Business } from '@mui/icons-material';

export const Contact = () => {
  return (
    <Box component='section' sx={{ py: 1, px: 2, background: '#fff' }}>
      <Container maxWidth='lg'>
        {/* Überschrift */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant='h3' fontWeight='bold' gutterBottom>
            KONTAKT
          </Typography>
          <Typography variant='subtitle1' sx={{ color: '#666' }}>
            Wir freuen uns auf Ihre Nachricht
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Kontaktinformationen */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={1}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 3,
                backgroundColor: '#fff',
                border: '1px solid #ddd'
              }}>
              <Typography variant='h6' fontWeight='bold' gutterBottom sx={{ mb: 3 }}>
                Kontaktinformationen
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Phone sx={{ mr: 2, color: '#000' }} />
                  <Typography variant='body1'>
                    <Link href='tel:0791752080' underline='hover' color='inherit'>
                      079 175 20 80
                    </Link>
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email sx={{ mr: 2, color: '#000' }} />
                  <Typography variant='body1'>
                    <Link href='mailto:info@plannic.ch' underline='hover' color='inherit'>
                      info@plannic.ch
                    </Link>
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ mb: 4 }}>
                <Typography variant='subtitle1' fontWeight='bold' gutterBottom sx={{ display: 'flex', alignItems: 'center', color: '#000' }}>
                  <Business sx={{ mr: 1 }} /> Rechnungs- & Postadresse
                </Typography>
                <Typography variant='body1' sx={{ pl: 4 }}>
                  Thurfeldstrasse 17a
                  <br />
                  9215 Schönenberg
                </Typography>
              </Box>

              <Box>
                <Typography variant='subtitle1' fontWeight='bold' gutterBottom sx={{ display: 'flex', alignItems: 'center', color: '#000' }}>
                  <Business sx={{ mr: 1 }} /> Büro Frauenfeld
                </Typography>
                <Typography variant='body1' sx={{ pl: 4 }}>
                  Gewerbestrasse 3
                  <br />
                  8500 Frauenfeld
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Teamkontakte */}
          <Grid item xs={12} md={6}>
            <Typography variant='h6' fontWeight='bold' gutterBottom sx={{ mb: 3 }}>
              Unser Team
            </Typography>

            <Grid container spacing={3}>
              {/* Person 1 */}
              <Grid item xs={12} sm={6}>
                <Paper
                  elevation={1}
                  sx={{
                    borderRadius: 3,
                    p: 3,
                    height: '100%',
                    border: '1px solid #ddd',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 2
                    },
                    backgroundColor: '#fff'
                  }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: '#000',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      fontWeight: 'bold',
                      fontSize: '1.2rem'
                    }}>
                    LJ
                  </Box>
                  <Typography variant='h6' fontWeight='bold' gutterBottom>
                    Liridon Jaja
                  </Typography>
                  <Typography variant='body2' sx={{ color: '#444' }} gutterBottom>
                    Geschäftsführer
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant='body2' sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Phone fontSize='small' sx={{ mr: 1, color: '#000' }} />
                      <Link href='tel:0791752080' underline='hover' color='inherit'>
                        079 175 20 80
                      </Link>
                    </Typography>
                    <Typography variant='body2' sx={{ display: 'flex', alignItems: 'center' }}>
                      <Email fontSize='small' sx={{ mr: 1, color: '#000' }} />
                      <Link href='mailto:l.jaja@plannic.ch' underline='hover' color='inherit'>
                        l.jaja@plannic.ch
                      </Link>
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* Person 2 */}
              <Grid item xs={12} sm={6}>
                <Paper
                  elevation={1}
                  sx={{
                    borderRadius: 3,
                    p: 3,
                    height: '100%',
                    border: '1px solid #ddd',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 2
                    },
                    backgroundColor: '#fff'
                  }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: '#000',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      fontWeight: 'bold',
                      fontSize: '1.2rem'
                    }}>
                    MJ
                  </Box>
                  <Typography variant='h6' fontWeight='bold' gutterBottom>
                    Muhamed Jonuzi
                  </Typography>
                  <Typography variant='body2' sx={{ color: '#444' }} gutterBottom>
                    Architekt
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant='body2' sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Phone fontSize='small' sx={{ mr: 1, color: '#000' }} />
                      <Link href='tel:0765677975' underline='hover' color='inherit'>
                        076 567 79 75
                      </Link>
                    </Typography>
                    <Typography variant='body2' sx={{ display: 'flex', alignItems: 'center' }}>
                      <Email fontSize='small' sx={{ mr: 1, color: '#000' }} />
                      <Link href='mailto:m.jonuzi@plannic.ch' underline='hover' color='inherit'>
                        m.jonuzi@plannic.ch
                      </Link>
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Karte */}
        <Box sx={{ mt: 8 }}>
          <Typography variant='h6' fontWeight='bold' gutterBottom sx={{ mb: 3 }}>
            Standort
          </Typography>
          <Paper elevation={1} sx={{ borderRadius: 3, overflow: 'hidden', border: '1px solid #ddd' }}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                pb: '40%',
                height: 0
              }}>
              <iframe
                title='Plannic Bürokarte'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.587324994654!2d9.00629627689862!3d47.53569079321271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b1b5e2ea706e1%3A0xa4698a0a0bdf44d!2sThurfeldstrasse%2017a%2C%209215%20Sch%C3%B6nenberg%20an%20der%20Thur!5e0!3m2!1sen!2sch!4v1717071929317!5m2!1sen!2sch'
                width='100%'
                height='100%'
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  border: 0
                }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                rel='noopener noreferrer'></iframe>
            </Box>
            <Box
              sx={{
                p: 3,
                bgcolor: '#fff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
              <Typography variant='body2'>
                <strong>Hauptsitz:</strong> Thurfeldstrasse 17a, 9215 Schönenberg
              </Typography>
              <Link
                href='https://maps.google.com?q=Thurfeldstrasse+17a,+9215+Schönenberg'
                target='_blank'
                rel='noopener'
                variant='body2'
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  color: '#000'
                }}>
                <LocationOn fontSize='small' sx={{ mr: 0.5 }} />
                In Karten öffnen
              </Link>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};
