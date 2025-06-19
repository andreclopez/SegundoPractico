import sequelize from "../db/connection.js";

import defineCategoria from "./Categoria.js";
import defineProducto from "./Producto.js";
import defineCuponDescuento from "./CuponDescuento.js";
import definePedido from "./Pedido.js";

const Categoria = defineCategoria(sequelize);
const Producto = defineProducto(sequelize);
const CuponDescuento = defineCuponDescuento(sequelize);
const Pedido = definePedido(sequelize);

// Relaciones
Categoria.hasMany(Producto, {
    foreignKey: 'categoriaId'
});

Producto.belongsTo(Categoria, {
    foreignKey: 'categoriaId'
});

CuponDescuento.hasMany(Pedido, {
    foreignKey: 'idCuponDescuento'
});

Pedido.belongsTo(CuponDescuento, {
    foreignKey: 'idCuponDescuento'
});

export { 
    sequelize,
    Categoria, 
    Producto, 
    CuponDescuento, 
    Pedido,
};
