import React, { Component } from "react";
// import CardDetails from "../Data/CardDetails";

class Cart extends Component {
  constructor(props) {
    super();
    this.state = {
      ...props,
    };

    this.rate = [];
    for (let i = 0; i < this.state.rating; i++) {
      this.rate.push(<div className="bi-star-fill"></div>);
    }
  }

  toggleButton = () => {
    this.setState({ inCart: !this.state.inCart });
  };

  toggleButton = () => {
    this.setState({ inCart: !this.state.inCart });
  };
  render() {
    const {
      imageUrl,
      productName,
      currency,
      MRP,
      sellingPrice,
      priceRange,
      sale,
      buyOptions,
      inCart,
    } = this.state;
    const rate = this.rate;
    return (
      <div className="col mb-5">
        <div className="card h-100">
          {/* <!-- Sale badge--> */}

          {sale ? (
            <div
              style={{ top: "0.5rem", right: "0.5rem" }}
              className="badge bg-dark text-white position-absolute"
            >
              Sale
            </div>
          ) : (
            ""
          )}

          {/* <!-- Product image--> */}
          <img className="card-img-top" src={imageUrl} alt="..." />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{productName}</h5>
              {/* <!-- Product reviews--> */}
              <div className="d-flex justify-content-center small text-warning mb-2">
                {rate}
              </div>
              {/* <!-- Product price--> */}
              {priceRange ? (
                `${currency}${priceRange.start} - ${currency}${priceRange.end}`
              ) : MRP ? (
                <>
                  <span className="text-muted text-decoration-line-through">
                    {currency}
                    {MRP}
                  </span>
                  {" " + currency}
                  {sellingPrice}
                </>
              ) : (
                `${currency}${sellingPrice}`
              )}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={this.toggleButton}
                disabled={inCart}
              >
                {buyOptions}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
