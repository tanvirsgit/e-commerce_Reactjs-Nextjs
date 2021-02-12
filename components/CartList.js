const CartList = ({ c }) => {
  return (
    <div className="row m-2">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <div className="row cartlistitem">
          <div className="col-md-4">
            <img src="https://picsum.photos/200" />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <h4 className="m-2">Product Name: {c.name}</h4>
                <h5 className="m-2">Product price:{c.price} </h5>
                <h5 className="m-2">Quantity:{c.quantity}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default CartList;
