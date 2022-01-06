import './App.css';
import OrderProcess from './Components/OrderProcess/OrderProcess';
import Product from './Components/Product/Product';

function App() {
  
  const products = [
    {
      id: 1,
      nameProduct: 'Teclado',
      amount: 1,
      imgProduct: 'https://media.mipc.com.mx/catalog/product/cache/a3e2f5af97718a398e371e553c3d6784/k/5/k589-pngweb-3.png',
      costProduct: 10,
      description: 'teclado gamer'
    },
    {
      id: 2,
      nameProduct: 'Monitor',
      amount: 2,
      imgProduct: 'https://ari.com.ec/web/wp-content/uploads/90LM03G0-B019B0.png',
      costProduct: 100,
      description: 'Monitor gamer'
    },
    {
      id: 3,
      nameProduct: 'Mouse',
      amount: 3,
      imgProduct: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/896/208/products/m908-51-264b5a6506906ca5a815971129195099-1024-1024.png',
      costProduct: 30,
      description: 'mouse gamer'
    },
  ];

  let value = 0;

  const sumValues = (val) => {
    value += val.amount * val.costProduct;
  };

  products.forEach(sumValues);

  return (
    <>
      <OrderProcess 
      nameClient="Pedro"
      value={value}>
        {products.map(prod => (
          <Product key={prod.id} product={prod} />
        ))}
      </OrderProcess>
    </>
  );
}



export default App;
