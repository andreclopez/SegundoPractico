import sequelize from "../db/connection.js";

import defineAdministrador from "./Administrador.js";
import defineCarrito from "./Carrito.js";
import defineCarritoxProducto from "./CarritoxProducto.js";
import defineCategoria from "./Categoria.js";
import defineCuponDescuento from "./CuponDescuento.js";
import definePago from "./Pago.js";
import definePedido from "./Pedido.js";
import definePedidoxProducto from "./PedidoxProducto.js";
import defineProducto from "./Producto.js";
import defineProveedor from "./Proveedor.js";
import defineUsuario from "./Usuario.js";

const Administrador = defineAdministrador(sequelize);
const Carrito = defineCarrito(sequelize);
const CarritoxProducto = defineCarritoxProducto(sequelize);
const Categoria = defineCategoria(sequelize);
const CuponDescuento = defineCuponDescuento(sequelize);
const Pago = definePago(sequelize);
const Pedido = definePedido(sequelize);
const PedidoxProducto = definePedidoxProducto(sequelize)
const Producto = defineProducto(sequelize);
const Proveedor = defineProveedor(sequelize);
const Usuario = defineUsuario(sequelize)


// Relaciones
Administrador.hasMany(Producto, { foreignKey: 'idAdministrador' });

Administrador.hasMany(Proveedor, { foreignKey: 'idAdministrador' })

Producto.belongsTo(Administrador, { foreignKey: 'idAdministrador' });

Proveedor.belongsTo(Administrador, { foreignKey: 'idAdministrador' });

CarritoxProducto.belongsTo(Carrito, { foreignKey: 'idCarrito' });

CarritoxProducto.belongsTo(Producto, { foreignKey: 'idProducto' });

Carrito.hasMany(CarritoxProducto, { foreignKey: 'idCarrito' });

Producto.hasMany(CarritoxProducto, { foreignKey: 'idProducto' });

Categoria.hasMany(Producto, { foreignKey: 'idCategoria' });

Producto.belongsTo(Categoria, { foreignKey: 'idCategoria' });

CuponDescuento.hasMany(Pedido, { foreignKey: 'idCuponDescuento' });

Usuario.hasMany(Pedido, { foreignKey: 'idUsuario' });

Pedido.belongsTo(Usuario, { foreignKey: 'idUsuario'});

Producto.hasMany(PedidoxProducto, { foreignKey: 'idProducto' });

Pedido.hasMany(PedidoxProducto, { foreignKey: 'idPedido' });

PedidoxProducto.belongsTo(Pedido, { foreignKey: 'idPedido' });

PedidoxProducto.belongsTo(Producto, { foreignKey: 'idProducto' });

Pedido.belongsTo(CuponDescuento, { foreignKey: 'idCuponDescuento' });

Pago.belongsTo(Pedido, { foreignKey: 'idPedido' });

Pedido.hasOne(Pago, { foreignKey: 'idPedido' });

Proveedor.hasMany(Producto, { foreignKey: 'cuitProveedor' });

Producto.belongsTo(Proveedor, { foreignKey: 'cuitProveedor' });

Usuario.hasMany(Carrito, { foreignKey: 'idUsuario' });

Carrito.belongsTo(Usuario, { foreignKey: 'idUsuario' });

export { 
    sequelize,
    Administrador,
    Carrito,
    CarritoxProducto,
    Categoria, 
    CuponDescuento,
    Pago,
    Pedido,
    PedidoxProducto,
    Producto, 
    Proveedor,
    Usuario,
};
