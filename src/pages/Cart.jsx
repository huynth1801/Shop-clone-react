import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../UI/CommonSection";
import { RiDeleteBin6Line } from "react-icons/ri";
import { cartActions } from "../components/redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <div>
          <div>
            <div>
              {cartItems.length === 0 ? (
                <h2 className="text-xl font-semibold text-center pt-4">
                  No item added to the cart
                </h2>
              ) : (
                <table className="w-full">
                  <thead
                    className="text-xs text-gray-700 uppercase
                                bg-gray-300"
                  >
                    <tr>
                      <th scope="col" class="px-4 py-3">
                        Image
                      </th>
                      <th scope="col" class="px-4 py-3">
                        Title
                      </th>
                      <th scope="col" class="px-4 py-3">
                        Price
                      </th>
                      <th scope="col" class="px-4 py-3">
                        Quantity
                      </th>
                      <th scope="col" class="px-4 py-3">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr key={index} item={item} />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="flex items-center my-4">
              <div className="mx-auto text-center">
                <h4 className="font-semibold text-2xl py-2">Subtotal</h4>
                <span className="text-xl">${totalAmount}</span>
              </div>
              <div className="flex flex-col mx-auto gap-4">
                <button className="border border-solid rounded-lg bg-red-500 text-white p-2">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
                <button className="border border-solid rounded-lg bg-sky-500 text-white p-2">
                  <Link to="/checkout">Checkout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
    localStorage.removeItem("items", JSON.stringify(item));
  };

  return (
    <tr class="bg-white border-b  text-center justify-center items-center">
      <td>
        <img
          src={item.imgUrl}
          alt=""
          className="w-[80px] h-[80px] object-cover mx-auto"
        />
      </td>
      <td class="px-6 py-4">{item.productName}</td>
      <td class="px-6 py-4">${item.price}</td>
      <td class="px-6 py-4">{item.quantity}</td>

      <td class="px-6 py-4 justify-center">
        <RiDeleteBin6Line
          className="mx-auto hover:cursor-pointer"
          onClick={deleteProduct}
        />
      </td>
    </tr>
  );
};

export default Cart;
