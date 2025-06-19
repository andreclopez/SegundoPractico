// src/models/Categoria.js
import { DataTypes } from 'sequelize';

const defineCategoria = (sequelize) => {
  const Categoria = sequelize.define('Categoria', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagenUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    activa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    tableName: 'categorias',
    timestamps: false,
  });

  return Categoria; 
};

export default defineCategoria;
