import React, { useState, useEffect } from 'react';
import Filter from './Filter';

const Purchases = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const url = 'https://api.jsonbin.io/v3/b/66cf6100e41b4d34e42695c3';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.record);
        setFilteredData(result.record); // Inicialmente, los datos filtrados son todos los datos
      } catch (e) {
        console.log('Error fetching data:', e);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (filters) => {
    const filtered = data.filter((item) => {
      return (
        (filters.id === '' || item.id.toString().includes(filters.id)) &&
        (filters.registrador === '' || item.registradoPor.toLowerCase().includes(filters.registrador.toLowerCase())) &&
        (filters.codigo === '' || item.codigo.toString().includes(filters.codigo)) &&
        (filters.proveedor === '' || item.proveedor.toLowerCase().includes(filters.proveedor.toLowerCase())) &&
        (filters.tipo === '' || item.tipo.toLowerCase().includes(filters.tipo.toLowerCase()))
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <Filter onFilter={handleFilter} />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-300">ID</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Nombre del Producto</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Cantidad</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Proveedor</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Fecha de Compra</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Código</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Tipo</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Registrado Por</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Productos</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.nombreProducto}</td>
              <td className="py-2 px-4 border-b">{item.cantidad}</td>
              <td className="py-2 px-4 border-b">{item.proveedor}</td>
              <td className="py-2 px-4 border-b">{item.fechaCompra}</td>
              <td className="py-2 px-4 border-b">{item.codigo}</td>
              <td className="py-2 px-4 border-b">{item.tipo}</td>
              <td className="py-2 px-4 border-b">{item.registradoPor}</td>
              <td className="py-2 px-4 border-b">{item.productos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Purchases;