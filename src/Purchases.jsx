import { purchaseData } from './purchaseData.js'

const Purchases = () => {
	return (
		<div className="min-h-screen bg-gray-200 p-6">
			<h1 className="font-bold text-center text-2xl text-gray-800 mb-8">Historial de Compras</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{purchaseData.map((purchase, index) => (
					<div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
						<h2 className="text-xl font-semibold text-gray-700 mb-2">
							{purchase.nombreProducto}
						</h2>
						<ul className="text-gray-600">
							<li><strong>Cantidad vendida:</strong> {purchase.cantidad}</li>
							<li><strong>Proveedor:</strong> {purchase.proveedor}</li>
							<li><strong>Precio por unidad:</strong> {purchase.precioPorUnidad}</li>
							<li><strong>Fecha de la compra:</strong> {purchase.fechaCompra}</li>
						</ul>
					</div>
				))}
			</div>
		</div>
		
	);
};

export default Purchases;