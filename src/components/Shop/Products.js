import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_data = [
  {
    id:1,
    price:6,
    title:'My First book',
    description:'the first book I ever read'
  },
  {
    id:2,
    price:8,
    title:'My Second book',
    description:'the second book I ever read'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {Dummy_data.map((product) => (<ProductItem
          key={product.id}
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
