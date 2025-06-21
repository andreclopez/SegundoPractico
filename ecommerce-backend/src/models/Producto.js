import { DataTypes } from 'sequelize';

const defineProducto = (sequelize) => {
  const Producto = sequelize.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagenUrl: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fechaAlta:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  oferta: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  descuento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 100,
    },
  },
  cuitProveedor: {
    type: DataTypes.BIGINT,
    allowNull: true,
    references:{
      model: 'proveedores',
      key: 'cuit'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idCategoria: {
      type: DataTypes.INTEGER,
      references:{
        model: 'categorias',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
}, {
  tableName: 'productos',
  timestamps: false,
});

return Producto;

}

export default defineProducto;
