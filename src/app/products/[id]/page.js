'use client'
import { products } from '../../../data/products';
import { useParams } from 'next/navigation'

const ProductDetails = ({ product }) => {
    const params = useParams()
console.log(params);
const { id } = params;
console.log(id);
let data = products.find(p => p.id === parseInt(id));
// console.log(222);
if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Price: ${data.price}</p>

    </div>
  );
};



export default ProductDetails;
