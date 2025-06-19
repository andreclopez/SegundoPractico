import React from 'react';
import { Box, Grid, Typography, Button, Input } from '@mui/material';

const CuponDescuento = () => {
  return (
      <Box 
        sx={{
          height: 300,
          justifyContent: 'center',
          alignContent: 'center',
          p: 2,
          background:'#5a2a2a'
        }}
      >
        <Grid conteiner direction="column"
          sx={{
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
            background:'#fdf6f0'
          }}
        >
          <Grid>
            <Typography variant='h2' color='#5a2a2a' textAlign='center'>
              ¿Tenés un cupón de descuento?
            </Typography>
          </Grid>

          <Grid>
            <Typography paragraph color='#5a2a2a' textAlign='center'>
              Ingresa tu código aquí
            </Typography>
          </Grid>

          <Grid textAlign='center'>
            <Input placeholder='Código de descuento' sx={{ backgroundColor: '#5a2a2a', borderRadius: 1, paddingLeft: 1}} />
          </Grid>

          <Grid>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#5a2a2a',
                '&:hover': {
                backgroundColor: '#3e1e1e',
                },
              }}
            >
              Aplicar cupón
            </Button>
          </Grid>

        </Grid>
      </Box>
  )
}

export default CuponDescuento