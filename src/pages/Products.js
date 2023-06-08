import { Link } from "react-router-dom"

const products = [
    {id: 'p1', title: 'Product 1'},
    {id: 'p2', title: 'Product 2'},
    {id: 'p3', title: 'Product 3'}
]

const ProductsPage = () =>
    <>
        <h1>The Products Page</h1>
        <ul>
            {products.map(prod => <li key={prod.id}><Link to={prod.id}>{prod.title}</Link></li>)}
        </ul>
    </>

export default ProductsPage