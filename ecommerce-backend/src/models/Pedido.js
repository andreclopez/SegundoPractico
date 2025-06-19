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
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Usuario que realizo la compra'
  },
  idCuponDescuento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Cupon aplicado en la compra'
  }
}, {
  tableName: 'pedidos',
  timestamps: false,
});

return Pedido

};

export default definePedido;