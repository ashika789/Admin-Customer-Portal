import React, { Component } from "react";
import { connect } from "react-redux";
import { map, isEmpty, size } from "lodash";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  InputGroup,
  Row,
  Table,
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Product Images
import { getCartData } from "../../store/actions";

class EcommerceCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      breadcrumbItems: [
        { title: "Ecommerce", link: "#" },
        { title: "Estimate", link: "#" },
      ],
    };
  }

  componentDidMount() {
    const {
      cartData: { products },
      onGetCartData,
    } = this.props;
    onGetCartData();
    this.setState({ productList: products });
  }

  componentDidUpdate(prevProps) {
    const {
      cartData: { products },
    } = this.props;
    if (
      !isEmpty(products) &&
      size(products) !== size(prevProps.cartData.products)
    ) {
      this.setState({ productList: products });
    }
  }

  removeCartItem = (id) => {
    let productList = this.state.productList;
    const filtered = productList.filter(function (item) {
      return item.id !== id;
    });

    this.setState({ productList: filtered });
  };

  countUP = (id, prev_data_attr) => {
    this.setState({
      productList: this.state.productList.map((p) =>
        p.id === id ? { ...p, data_attr: prev_data_attr + 1 } : p
      ),
    });
  };

  countDown = (id, prev_data_attr) => {
    this.setState({
      productList: this.state.productList.map((p) =>
        p.id === id ? { ...p, data_attr: prev_data_attr - 1 } : p
      ),
    });
  };

  render() {
  
    const { productList } = this.state;

    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs
              title="Estimate"
              breadcrumbItems={this.state.breadcrumbItems}
            />
            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>


                  <div class="progress mb-3" style={{height: "10px"}}>
                      <div class="progress-bar bg-danger" role="progressbar" style={{"width": "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">Order Products</div>
                 <div class="progress-bar bg-warning" role="progressbar" style={{"width": "20%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">Event Info</div>

                  <div class="progress-bar bg-info" role="progressbar" style={{"width": "20%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">Estimate</div>
                  </div>
                                            


                  <div class="col-md-4">
                          <div class="mb-3 position-relative">
                              <label for="validationTooltipUsername" class="form-label">Invoice ID</label>
                              <div class="input-group">
                                  <div class="input-group-prepend">
                                      <span class="input-group-text"
                                          id="validationTooltipUsernamePrepend">#</span>
                                  </div>
                                  <input type="text" class="form-control" id="validationTooltipUsername"
                                      placeholder="ABP123"
                                      aria-describedby="validationTooltipUsernamePrepend" required />
                                  <div class="invalid-tooltip">
                                      Please enter a valid ID #
                                  </div>
                              </div>
                          </div>
                      </div>


 <hr /> 
            {/*To and From*/}
                 <div class="row" style={{ "display" :"flex"}}>
                  <div class="column" style={{"flex": 1}}>
                    <h4>From:</h4>
                <p> Shoprite Liquors Hamilton</p> 
                 <p>  3161 Quakerbridge Rd </p> 
                <p>  Hamilton Township, NJ 08619 </p> 
                
                </div>
                  <div class="column" style={{"flex": 1}}>
                    <h4>To:</h4>
                <p> Customer Name </p> 
                 <p>  Customer Address Road </p> 
               <p> City, State, Zip</p> 
             
                  </div>
                </div>

{/*Date*/}
                 <div class="row mb-3">
            <label for="example-date-input" class="col-form-label" >Date</label>
            <div class="col-sm-2">
                <input class="form-control" type="date" value="2021-08-19" id="example-date-input" align="left" />
            </div>
        </div>



                    <div className="table-responsive">
                      <Table className="table align-middle mb-0 table-nowrap">
                        <thead className="bg-light">
                          <tr>
                            <th >Product Desc</th>
                            <th >Price</th>
                            <th style={{ width: "120px" }}>Quantity</th>
                            <th >Total</th>
                            <th >Edit</th>
                            <th className="text-center" style={{ width: "30px" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {map(productList, (product) => (
                            <tr key={product.id}>
                              
                              <td>
                                <h5 className="font-size-14 text-truncate">
                                  <Link
                                    to={
                                      "/ecommerce-product-details/" + product.id
                                    }
                                    className="text-dark"
                                  >
                                    {product.name}
                                  </Link>
                                </h5>
                                <p className="mb-0">
                                  Style :{" "}
                                  <span className="fw-medium">
                                    {product.color}
                                  </span>
                                </p>
                              </td>

                                <td>$ {product.price}</td>

                              <td>
                                <div
                                  style={{ width: "120px" }}
                                  className="product-cart-touchspin"
                                >
                                  <InputGroup className="bootstrap-touchspin bootstrap-touchspin-injected">
                                    <span className="input-group-btn input-group-prepend">
                                      <Button
                                        color=""
                                        className="bootstrap-touchspin-up"
                                        onClick={() => {
                                          this.countDown(
                                            product.id,
                                            product.data_attr
                                          );
                                        }}
                                      >
                                        -
                                      </Button>
                                    </span>

                                    <Input
                                      type="text"
                                      value={product.data_attr}
                                      name="demo_vertical"
                                      readOnly
                                      className="form-control"
                                    />
                                    <span className="input-group-btn input-group-append">
                                      <Button
                                        color=""
                                        className="bootstrap-touchspin-down"
                                        onClick={() => {
                                          this.countUP(
                                            product.id,
                                            product.data_attr
                                          );
                                        }}
                                      >
                                        +
                                      </Button>
                                    </span>
                                  </InputGroup>
                                </div>
                              </td>

                             <td>$ {product.total}</td>

                              <td class="text-center">
                                                            <a class="btn btn-outline-secondary btn-sm edit" title="Edit">
                                                                <i class="fas fa-pencil-alt"></i>
                                                            </a>
                                                        </td>



                              <td style={{ width: "100px" }} className="text-center">
                                <Link
                                  to="#"
                                  onClick={() =>
                                    this.removeCartItem(product.id)
                                  }
                                  className="action-icon text-danger"
                                >
                                  {" "}
                                  <i className="mdi mdi-trash-can font-size-18" />
                                </Link>
                              </td>
                            </tr>
                          ))}
                          <tr className="bg-light text-end">
                            <th scope="row" colSpan="5">
                              Sub Total :
                            </th>

                            <td>$ 1530</td>
                          </tr>
                          <tr className="bg-light text-end">
                            <th scope="row" colSpan="5">
                              Discount :
                            </th>

                            <td>- $ 30</td>
                          </tr>
                          <tr className="bg-light text-end">
                            <th scope="row" colSpan="5">
                              Shipping Charge :
                            </th>

                            <td>$ 25</td>
                          </tr>
                          <tr className="bg-light text-end">
                            <th scope="row" colSpan="5">
                              Total :
                            </th>

                            <td>$ 1525</td>
                          </tr>
                        </tbody>
                      </Table>
<br />
          <a href="/ecommerce-checkout"> 
                   <button type="button" class="btn btn-primary waves-effect waves-light" style={{float:'left'}} >
                      <i class="ri-arrow-left-line ms-2"></i> Event Info
                      </button>
                    </a> 

                    <a href="/ecommerce-invoice"> 
                   <button type="button" class="btn btn-primary waves-effect waves-light" style={{float:'right'}} >
                          Final Invoice <i class="ri-arrow-right-line ms-2"></i> 
                      </button>
                    </a> 



                           
                                                <div class="p-3">
                                                    <p>A warning message when user declines</p>
                                                    <button type="button" class="btn btn-primary waves-effect waves-light" id="sa-warning">Click me</button>
                                                </div>
                                      
                                    

                                     <div class="button-items" style={{float:'right'}}>
                                            
                                          

                                          
                                            <button type="button" class="btn btn-danger waves-effect waves-light" id="sa-warning">
                                                <i class="ri-close-line align-middle me-2"></i> Decline
                                            </button>
                                     


                                             <a href= "ecommerce-return-invoice.html">
                                            <button type="button" class="btn btn-success waves-effect waves-light">
                                                <i class="ri-check-line align-middle me-2"></i> Approve
                                            </button>
                                            </a>

                                        </div>


                    </div>
                    <br />
                        


                  </CardBody>

                  

                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

EcommerceCart.propTypes = {
  cartData: PropTypes.any,
  onGetCartData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cartData: state.Ecommerce.cartData,
});

const mapDispatchToProps = (dispatch) => ({
  onGetCartData: () => dispatch(getCartData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EcommerceCart));
