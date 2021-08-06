import CardDetails from "../Data/CardDetails";
import Cart from "../pages/Cart";

const Cart1 = () => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {CardDetails.map(({ ...otherProps }, idx) => (
            <Cart key={idx} {...otherProps} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart1;
