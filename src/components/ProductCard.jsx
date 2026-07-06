import { animated } from '@react-spring/web'


export default function ProductCard(props) {
    const product = props.product;
    return (
        <div initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
             className="product-card">
            <div className="image-card">
                <img src={product.image} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <div className="prices">
                <span className="current_price" >
                    {product.current_price} UAH
                </span>
                <span className="price" >
                    {product.old_price} UAH
                </span>
            </div>
            <div className="colors" >
                {product.colors.map((color, index) => (
                    <span key={index} title={color} />
                ))}
            </div>
        </div>
    );
};
