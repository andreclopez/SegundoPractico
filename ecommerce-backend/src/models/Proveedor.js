import { DataTypes } from 'sequelize';

const defineProveedor = (sequelize) => {
  const Proveedor = sequelize.define('Proveedor', {
    cuit: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'proveedores',
    timestamps: false,
  });

  return Proveedor; 
};

export default defineProveedor;
