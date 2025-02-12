import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id :'p1',
    title : 'FirstProduct',
    description : 'this is my first product',
    price : 8
},
{
  id :'p2',
  title : 'SecondProduct',
  description : 'this is my second product',
  price : 6
},
{
  id :'p3',
  title : 'ThirdProduct',
  description : 'this is my third product',
  price : 10
}

]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>(<ProductItem
          key = {product.id}
          id = {product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;
