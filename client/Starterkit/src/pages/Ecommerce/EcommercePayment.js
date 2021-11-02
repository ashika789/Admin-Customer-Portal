import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Table,
    Input,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Card,
    Form,
    Label,
    CardBody,
    CardTitle,
} from 'reactstrap'

import { Link } from 'react-router-dom'

import classnames from 'classnames'

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb'

//Import Images
import img1 from '../../assets/images/product/img-1.png'
import img6 from '../../assets/images/product/img-6.png'

class EcommerceCheckout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orderSummary: [
                {
                    id: 1,
                    img: img1,
                    productTitle: 'Full sleeve T-shirt',
                    price: 240,
                    qty: 2,
                },
                {
                    id: 2,
                    img: img6,
                    productTitle: 'Half sleeve T-shirt',
                    price: 225,
                    qty: 1,
                },
            ],
            activeTab: 1,
            selectedGroup: null,
            breadcrumbItems: [
                { title: 'Ecommerce', link: '#' },
                { title: 'Payment', link: '#' },
            ],
        }
        this.toggleTab = this.toggleTab.bind(this)
        this.handleSelectGroup = this.handleSelectGroup.bind(this)
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            })
        }
    }

    handleSelectGroup = (selectedGroup) => {
        this.setState({ selectedGroup })
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        {/* Render Breadcrumb */}
                        <Breadcrumbs
                            title="Payment"
                            breadcrumbItems={this.state.breadcrumbItems}
                        />

                        <Row>
                            <Col lg="8">
                                <Card>
                                    <CardBody>
                                        <div
                                            class="progress mb-3"
                                            style={{ height: '10px' }}
                                        >
                                            <div
                                                class="progress-bar bg-danger"
                                                role="progressbar"
                                                style={{ width: '25%' }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                Order Products
                                            </div>
                                            <div
                                                class="progress-bar bg-warning"
                                                role="progressbar"
                                                style={{ width: '25%' }}
                                                aria-valuenow="50"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                Event Info
                                            </div>

                                            <div
                                                class="progress-bar bg-info"
                                                role="progressbar"
                                                style={{ width: '20%' }}
                                                aria-valuenow="60"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                Estimate
                                            </div>
                                            <div
                                                class="progress-bar bg-info"
                                                role="progressbar"
                                                style={{ width: '20%' }}
                                                aria-valuenow="80"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                Final Invoice
                                            </div>

                                            <div
                                                class="progress-bar bg-success"
                                                role="progressbar"
                                                style={{ width: '20%' }}
                                                aria-valuenow="100"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                Payment
                                            </div>
                                        </div>

                                        <div
                                            id="checkout-nav-pills-wizard"
                                            className="twitter-bs-wizard"
                                        >
                                            <TabContent
                                                activeTab={this.state.activeTab}
                                                className="twitter-bs-wizard-tab-content"
                                            >
                                                <TabPane tabId={1}>
                                                    <CardTitle className="h5">
                                                        Select how this order
                                                        was paid:
                                                    </CardTitle>
                                                    <p className="card-title-desc"></p>
                                                    <div class="row">
                                                        <div class="col-lg-4 col-sm-6">
                                                            <div>
                                                                <label class="form-label card-radio-label mb-3">
                                                                    <input
                                                                        type="radio"
                                                                        name="pay-method"
                                                                        id="pay-methodoption1"
                                                                        class="card-radio-input"
                                                                    />

                                                                    <span class="card-radio">
                                                                        <i class="fab fa-cc-mastercard font-size-24 align-middle me-2"></i>
                                                                        <span>
                                                                            Credit
                                                                            /
                                                                            Debit
                                                                            Card
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-4 col-sm-6">
                                                            <div>
                                                                <label class="form-label card-radio-label mb-3">
                                                                    <input
                                                                        type="radio"
                                                                        name="pay-method"
                                                                        id="pay-methodoption3"
                                                                        class="card-radio-input"
                                                                        checked="true"
                                                                    />

                                                                    <span class="card-radio">
                                                                        <i class="far fa-money-bill-alt font-size-24 align-middle me-2"></i>
                                                                        <span>
                                                                            Cash
                                                                            on
                                                                            Delivery
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPane>
                                                <TabPane
                                                    tabId={2}
                                                    id="v-pills-payment"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-payment-tab"
                                                >
                                                    <div>
                                                        <CardTitle className="h4">
                                                            Shipping information
                                                        </CardTitle>
                                                        <p className="card-title-desc">
                                                            It will be as simple
                                                            as occidental in
                                                            fact
                                                        </p>
                                                        <Row>
                                                            <Col lg={4} sm={6}>
                                                                <Card className="border rounded active shipping-address">
                                                                    <CardBody>
                                                                        <Link
                                                                            to="#"
                                                                            className="float-end ms-1"
                                                                        >
                                                                            Edit
                                                                        </Link>
                                                                        <h5 className="font-size-14 mb-4">
                                                                            Address
                                                                            1
                                                                        </h5>

                                                                        <h5 className="font-size-14">
                                                                            Bradley
                                                                            McMillian
                                                                        </h5>
                                                                        <p className="mb-1">
                                                                            109
                                                                            Clarksburg
                                                                            Park
                                                                            Road
                                                                            Show
                                                                            Low,
                                                                            AZ
                                                                            85901
                                                                        </p>
                                                                        <p className="mb-0">
                                                                            Mo.
                                                                            012-345-6789
                                                                        </p>
                                                                    </CardBody>
                                                                </Card>
                                                            </Col>
                                                            <Col lg={4} sm={6}>
                                                                <Card className="border rounded shipping-address">
                                                                    <CardBody>
                                                                        <Link
                                                                            to="#"
                                                                            className="float-end ms-1"
                                                                        >
                                                                            Edit
                                                                        </Link>
                                                                        <h5 className="font-size-14 mb-4">
                                                                            Address
                                                                            2
                                                                        </h5>

                                                                        <h5 className="font-size-14">
                                                                            Bradley
                                                                            McMillian
                                                                        </h5>
                                                                        <p className="mb-1">
                                                                            109
                                                                            Clarksburg
                                                                            Park
                                                                            Road
                                                                            Show
                                                                            Low,
                                                                            AZ
                                                                            85901
                                                                        </p>
                                                                        <p className="mb-0">
                                                                            Mo.
                                                                            012-345-6789
                                                                        </p>
                                                                    </CardBody>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </TabPane>
                                                <TabPane
                                                    tabId={3}
                                                    id="v-pills-confir"
                                                    role="tabpanel"
                                                >
                                                    <CardTitle className="h5">
                                                        Payment information
                                                    </CardTitle>
                                                    <p className="card-title-desc">
                                                        It will be as simple as
                                                        occidental in fact
                                                    </p>
                                                    <div>
                                                        <h5 className="font-size-14">
                                                            Payment method :
                                                        </h5>

                                                        <Row>
                                                            <Col lg={4} sm={6}>
                                                                <div>
                                                                    <Label className="form-label card-radio-label mb-3">
                                                                        <Input
                                                                            type="radio"
                                                                            name="pay-method"
                                                                            id="pay-methodoption1"
                                                                            className="card-radio-input"
                                                                        />

                                                                        <div className="card-radio">
                                                                            <i className="fab fa-cc-mastercard font-size-24 align-middle me-2"></i>
                                                                            <span>
                                                                                Credit
                                                                                /
                                                                                Debit
                                                                                Card
                                                                            </span>
                                                                        </div>
                                                                    </Label>
                                                                </div>
                                                            </Col>

                                                            <Col lg={4} sm={6}>
                                                                <div>
                                                                    <Label className="form-label card-radio-label mb-3">
                                                                        <Input
                                                                            type="radio"
                                                                            name="pay-method"
                                                                            id="pay-methodoption2"
                                                                            className="card-radio-input"
                                                                        />

                                                                        <div className="card-radio">
                                                                            <i className="fab fa-cc-paypal font-size-24 align-middle me-2"></i>
                                                                            <span>
                                                                                Paypal
                                                                            </span>
                                                                        </div>
                                                                    </Label>
                                                                </div>
                                                            </Col>

                                                            <Col lg={4} sm={6}>
                                                                <div>
                                                                    <Label className="form-label card-radio-label mb-3">
                                                                        <Input
                                                                            type="radio"
                                                                            name="pay-method"
                                                                            id="pay-methodoption3"
                                                                            className="card-radio-input"
                                                                        />

                                                                        <div className="card-radio">
                                                                            <i className="far fa-money-bill-alt font-size-24 align-middle me-2"></i>
                                                                            <span>
                                                                                Cash
                                                                                on
                                                                                Delivery
                                                                            </span>
                                                                        </div>
                                                                    </Label>
                                                                </div>
                                                            </Col>
                                                        </Row>

                                                        <h5 className="my-3 font-size-14">
                                                            For card Payment
                                                        </h5>
                                                        <div className="p-4 border">
                                                            <form>
                                                                <div className="mb-3">
                                                                    <Label
                                                                        className="form-label"
                                                                        for="cardnameInput"
                                                                    >
                                                                        Name on
                                                                        card
                                                                    </Label>
                                                                    <Input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="cardnameInput"
                                                                        placeholder="Name on Card"
                                                                    />
                                                                </div>

                                                                <div className="row">
                                                                    <Col
                                                                        lg={4}
                                                                        sm={6}
                                                                    >
                                                                        <div className="mb-3 mb-lg-0">
                                                                            <Label
                                                                                className="form-label"
                                                                                for="cardnumberInput"
                                                                            >
                                                                                Card
                                                                                Number
                                                                            </Label>
                                                                            <Input
                                                                                type="text"
                                                                                className="form-control"
                                                                                id="cardnumberInput"
                                                                                placeholder="0000 0000 0000 0000"
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                    <Col
                                                                        lg={4}
                                                                        sm={6}
                                                                    >
                                                                        <div className="mb-3 mb-lg-0">
                                                                            <Label
                                                                                className="form-label"
                                                                                for="expirydateInput"
                                                                            >
                                                                                Expiry
                                                                                date
                                                                            </Label>
                                                                            <Input
                                                                                type="text"
                                                                                className="form-control"
                                                                                id="expirydateInput"
                                                                                placeholder="MM/YY"
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                    <Col
                                                                        lg={4}
                                                                        sm={6}
                                                                    >
                                                                        <div className="mb-3 mb-lg-0">
                                                                            <Label
                                                                                className="form-label"
                                                                                for="cvvcodeInput"
                                                                            >
                                                                                CVV
                                                                                Code
                                                                            </Label>
                                                                            <Input
                                                                                type="text"
                                                                                className="form-control"
                                                                                id="cvvcodeInput"
                                                                                placeholder="Enter CVV Code"
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="mt-4 text-end">
                                                            <Link
                                                                to="#"
                                                                className="btn btn-success"
                                                            >
                                                                Complete order
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </TabPane>
                                            </TabContent>
                                            <ul className="pager wizard twitter-bs-wizard-pager-link">
                                                <li
                                                    className={
                                                        this.state.activeTab ===
                                                        1
                                                            ? 'previous'
                                                            : 'previous '
                                                    }
                                                >
                                                    <Link
                                                        to="/ecommerce-invoice"
                                                        onClick={() => {
                                                            this.toggleTab(
                                                                this.state
                                                                    .activeTab -
                                                                    1
                                                            )
                                                        }}
                                                    >
                                                        Final Invoice
                                                    </Link>
                                                </li>
                                                <li
                                                    className={
                                                        this.state.activeTab ===
                                                        3
                                                            ? 'next'
                                                            : 'next'
                                                    }
                                                >
                                                    <Link
                                                        to="/ecommerce-orders"
                                                        onClick={() => {
                                                            this.toggleTab(
                                                                this.state
                                                                    .activeTab +
                                                                    1
                                                            )
                                                        }}
                                                    >
                                                        Mark as Paid
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="checkout-order-summary">
                                    <CardBody>
                                        <div className="p-3 bg-light mb-4">
                                            <h5 className="font-size-14 mb-0">
                                                Order Summary{' '}
                                                <span className="float-end ms-2">
                                                    #SK2356
                                                </span>
                                            </h5>
                                        </div>
                                        <div className="table-responsive">
                                            <Table className="align-middle mb-0 table-nowrap">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th
                                                            style={{
                                                                width: '110px',
                                                            }}
                                                            scope="col"
                                                        >
                                                            Product
                                                        </th>
                                                        <th scope="col">
                                                            Product Desc
                                                        </th>
                                                        <th scope="col">
                                                            Price
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.orderSummary.map(
                                                        (orderitem, key) => (
                                                            <tr
                                                                key={
                                                                    '_orderSummary_' +
                                                                    key
                                                                }
                                                            >
                                                                <th scope="row">
                                                                    <img
                                                                        src={
                                                                            orderitem.img
                                                                        }
                                                                        alt="product-img"
                                                                        title="product-img"
                                                                        className="avatar-md"
                                                                    />
                                                                </th>
                                                                <td>
                                                                    <h5 className="font-size-14 text-truncate">
                                                                        <Link
                                                                            to="/ecommerce-product-details/1"
                                                                            className="text-dark"
                                                                        >
                                                                            {
                                                                                orderitem.productTitle
                                                                            }{' '}
                                                                        </Link>
                                                                    </h5>
                                                                    <p className="text-muted mb-0">
                                                                        ${' '}
                                                                        {
                                                                            orderitem.price
                                                                        }{' '}
                                                                        x{' '}
                                                                        {
                                                                            orderitem.qty
                                                                        }
                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    ${' '}
                                                                    {orderitem.price *
                                                                        orderitem.qty}
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                    <tr>
                                                        <td colSpan="2">
                                                            <h6 className="m-0 text-end">
                                                                Sub Total:
                                                            </h6>
                                                        </td>
                                                        <td>$ 705</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="3">
                                                            <div className="bg-soft-primary p-3 rounded">
                                                                <h5 className="font-size-14 text-primary mb-0">
                                                                    <i className="fas fa-shipping-fast me-2" />{' '}
                                                                    Shipping{' '}
                                                                    <span className="float-end">
                                                                        Free
                                                                    </span>
                                                                </h5>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="2">
                                                            <h6 className="m-0 text-end">
                                                                Total:
                                                            </h6>
                                                        </td>
                                                        <td>$ 705</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default EcommerceCheckout
