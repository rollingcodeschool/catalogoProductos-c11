import { Button, Table, Pagination  } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { productosData } from "../../data/productosPrueba";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const Administrador = ({ setProductos, productos, borrarProducto }) => {
  // Estados para la paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 5; // Cantidad de registros a mostrar por página
  //Estado para controlar si el botón de carga de productos está deshabilitado
  const [
    botonCargarProductosDeshabilitado,
    setBotonCargarProductosDeshabilitado,
  ] = useState(false);

  //verificar si hay productos al cargar el componente o cuando 'productos' cambia
  useEffect(() => {
    if (productos && productos.length > 0) {
      setBotonCargarProductosDeshabilitado(true);
    } else {
      setBotonCargarProductosDeshabilitado(false);
    }
  }, [productos]); // Este efecto se ejecuta cada vez que el array 'productos' cambia

  // funcion que carga los productos de prueba
  const cargarProductosPrueba = () => {
    setProductos(productosData);
  };

  // --- Lógica de Paginación ---
  // 1. Calcular el índice del último producto de la página actual
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  // 2. Calcular el índice del primer producto de la página actual
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  // 3. Obtener los productos que se mostrarán en la página actual
  const productosActuales = productos.slice(
    indicePrimerProducto,
    indiceUltimoProducto
  );

  // 4. Calcular el número total de páginas
  const numeroTotalPaginas = Math.ceil(productos.length / productosPorPagina);

  // 5. Crear los elementos de paginación
  const paginacionItems = [];
  for (let i = 1; i <= numeroTotalPaginas; i++) {
    paginacionItems.push(
      <Pagination.Item
        key={i}
        active={i === paginaActual}
        onClick={() => setPaginaActual(i)}
      >
        {i}
      </Pagination.Item>
    );
  }
  // --- Fin Lógica de Paginación ---

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <div>
          <Link className="btn btn-primary" to={"/administrador/crear"}>
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
          <Button
            className="btn btn-info ms-2 text-light"
            onClick={cargarProductosPrueba}
            // deshabilito el boton si ya tenemos productos cargados, se habilita si el array productos esta vacio
            disabled={botonCargarProductosDeshabilitado}
          >
            <i className="bi bi-database-fill-add"></i>
          </Button>
        </div>
      </div>
      <hr />
      {/* Mensaje si no hay productos */}
      {productos.length === 0 ? (
        <p className="text-center">
          No hay productos cargados. Carga algunos productos de prueba o agrega
          uno nuevo.
        </p>
      ) : (
        <>
          <Table responsive striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>Cod</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>URL de Imagen</th>
                <th>Categoria</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapeamos solo los productos de la página actual */}
              {productosActuales.map((producto, indice) => (
                <ItemProducto
                  key={producto.id}
                  producto={producto}
                  // El índice de la fila debe ajustarse por la página actual
                  fila={indicePrimerProducto + indice + 1}
                  borrarProducto={borrarProducto}
                ></ItemProducto>
              ))}
            </tbody>
          </Table>
           {/* Componente de Paginación */}
          <div className="d-flex justify-content-center mt-3">
            <Pagination>
              <Pagination.Prev
                onClick={() => setPaginaActual(paginaActual - 1)}
                disabled={paginaActual === 1}
              />
              {paginacionItems}
              <Pagination.Next
                onClick={() => setPaginaActual(paginaActual + 1)}
                disabled={paginaActual === numeroTotalPaginas}
              />
            </Pagination>
          </div>
        </>
      )}
    </section>
  );
};

export default Administrador;
