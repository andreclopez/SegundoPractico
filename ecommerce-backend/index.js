import 'dotenv/config';
import express from 'express';
import { sequelize } from './src/models/index.js';
import routes from './src/routes/index.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // o el puerto de tu frontend
  credentials: true,
}));

// Ruta simple de prueba
app.get('/', (req, res) => {
  res.send('¡Backend funcionando correctamente!');
});

//Usar rutas impotadas
app.use('/api', routes);

// Middleware 404

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Iniciar servidor y probar conexión
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida correctamente.');

    await sequelize.sync({ force: true });
    console.log('✅ Tablas sincronizadas correctamente.');

    app.listen(PORT, () =>
      console.log(`Servidor corriendo en puerto ${PORT}`)
    );
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error);
  }
}

startServer();

