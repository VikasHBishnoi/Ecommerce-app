import Layout from '../../components/Layout/Layout';
import React, { useEffect, useState } from 'react'
import { useCart } from '../../context/cart';
import { useAuth } from '../../context/auth';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth] = useAuth();
  // const navigate = useNavigate();
  const [total, setTotal] = useState();
  // Total Price calculate
  const totalPriceCalculater = () => {
    try {
      let totalPrice = 0;
      cart.map((product) => {
        return totalPrice += product.price;
      })
      setTotal(totalPrice);
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    totalPriceCalculater();
  })
  // Delete or Remvoe Item from Cart
  const removeCardItem = (id) => {
    try {
      const newCart = cart.filter((product) => {
        if ((id === "a") || (product._id !== id)) {
          return true;
        }
        else {
          id = "a";
          return false;
        }
      });
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      toast.success("Removed Item from cart");
      totalPriceCalculater();
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center bg-light p-2'>
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h1>
            <h4>
              {cart?.length > 0 ? `You Have ${cart.length} items in your cart ${auth.token ? "" : " and Please login to checkout"}` : 'Your Cart is empty'}
            </h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            {cart?.map((product, ind) => {
              return (
                <div className='row mb-2 card flex-row' key={ind}>
                  <div className='col-md-4 mt-2'>
                    <img
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                      className="card-img-top"
                      alt={product.name}
                      width='100px'
                    />
                  </div>
                  <div className='col-md-8 mt-2'>
                    <h4>{product.name}</h4>
                    <p>{product.description.substring(0, 30)}</p>
                    <h4>Price : ₹ {product.price}</h4>
                    <button className='btn btn-danger' onClick={() => { removeCardItem(product._id) }}>Remove</button>
                  </div>
                </div>
              )
            })
            }
          </div>
          <div className='col-md-4 text-center'>
            <h4>Cart Summary</h4>
            <hr />
            <p>Total | Checkout | Payment</p>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CartPage;