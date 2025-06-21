import React, { useState } from "react";
import { Box, Grid, Typography, Button, Input } from "@mui/material";
import axios from "axios";
import { useCupon } from "../hooks/useCupon";

const CuponDescuento = () => {
  const [codigo, setCodigo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const { aplicarCupon, quitarCupon, cuponActivo } = useCupon();

  const manejarAplicar = async () => {
    if (!codigo.trim()) {
      setMensaje("Por favor ingresa un código de cupón.");
      return;
    }
    try {
      const res = await axios.get(`/api/cupones/validar/${codigo.trim()}`);
      if (res.data && res.data.activo) {
        aplicarCupon(res.data);
        setMensaje(`Cupón "${res.data.nombreCupon}" (${res.data.porcentajeDescuento}%) aplicado con éxito.`);
      } else {
        quitarCupon();
        setMensaje("El código de cupón ingresado no es válido o ha expirado.");
      }
    } catch {
      quitarCupon();
      setMensaje("Error al validar el cupón. Intenta nuevamente.");
    }
  };

  const manejarQuitar = () => {
    quitarCupon();
    setMensaje("Cupón eliminado.");
    setCodigo("");
  };

  return (
    <Box
      sx={{
        height: 300,
        justifyContent: "center",
        alignContent: "center",
        p: 2,
        background: "#5a2a2a",
      }}
    >
      <Grid
        container
        direction="column"
        sx={{
          height: '100%',
          width: '100%',
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          background: "#fdf6f0",
        }}
      >
        <Grid>
          <Typography variant="h2" color="#5a2a2a" textAlign="center">
            ¿Tenés un cupón de descuento?
          </Typography>
        </Grid>

        <Grid>
          <Typography paragraph color="#5a2a2a" textAlign="center">
            Ingresa tu código aquí
          </Typography>
        </Grid>

        <Grid item xs={12} textAlign="center">
          <Grid textAlign='center'>
          <Input
            placeholder="Código de descuento"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            sx={{
              backgroundColor: "#5a2a2a",
              color: "#fdf6f0",
              borderRadius: 1,
              paddingLeft: 1,
              marginBottom: 1,
            }}
          />
          </Grid>
          <Button
            variant="contained"
            onClick={manejarAplicar}
            sx={{
              backgroundColor: "#5a2a2a",
              "&:hover": {
                backgroundColor: "#3e1e1e",
              },
            }}
          >
            Aplicar cupón
          </Button>

        {cuponActivo && (
            <Button
              variant="outlined"
              color="secondary"
              onClick={manejarQuitar}
            >
              Quitar cupón
            </Button>
        )}

        {mensaje && (
            <Typography
              color={cuponActivo ? "green" : "red"}
              textAlign="center"
              mt={2}
            >
              {mensaje}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CuponDescuento;
