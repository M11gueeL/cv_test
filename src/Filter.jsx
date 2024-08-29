import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    id: '',
    registrador: '',
    codigo: '',
    proveedor: '',
    tipo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleFilter = () => {
    onFilter(filters);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        name="id"
        placeholder="Filtrar por ID"
        value={filters.id}
        onChange={handleChange}
        className="p-2 border border-gray-300 mr-2"
      />
      <input
        type="text"
        name="registrador"
        placeholder="Filtrar por Registrador"
        value={filters.registrador}
        onChange={handleChange}
        className="p-2 border border-gray-300 mr-2"
      />
      <input
        type="text"
        name="codigo"
        placeholder="Filtrar por Código"
        value={filters.codigo}
        onChange={handleChange}
        className="p-2 border border-gray-300 mr-2"
      />
      <input
        type="text"
        name="proveedor"
        placeholder="Filtrar por Proveedor"
        value={filters.proveedor}
        onChange={handleChange}
        className="p-2 border border-gray-300 mr-2"
      />
      <input
        type="text"
        name="tipo"
        placeholder="Filtrar por Tipo"
        value={filters.tipo}
        onChange={handleChange}
        className="p-2 border border-gray-300 mr-2"
      />
      <button onClick={handleFilter} className="p-2 bg-blue-500 text-white">
        Filtrar
      </button>
    </div>
  );
};

export default Filter;