import { DataTypes } from 'sequelize';

const definePedido = (sequelize) => {
  const Pedido = sequelize.define('Pedido', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Producto comprado'
  },
  estado: {
    type: DataTypes.ENUM('activo', 'cerrado', 'cancelado'), 
    allowNull: false,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Usuario que realizo la compra'
  },
  idCuponDescuento: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'cupones',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL', 
  }
}, {
  tableName: 'pedidos',
  timestamps: false,
});

return Pedido

};

export default definePedido;