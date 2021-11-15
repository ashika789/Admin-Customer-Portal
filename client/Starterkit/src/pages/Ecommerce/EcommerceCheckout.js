import React, { Component } from 'react';

import {
    Container,
    Row,
    Col,
    Input,
    TabContent,
    TabPane,
    Card,
    Form,
    Label,
    CardBody,
    CardTitle,
} from 'reactstrap';

import { Link } from 'react-router-dom';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Images
import img1 from '../../assets/images/product/img-1.png';
import img6 from '../../assets/images/product/img-6.png';

class EcommerceCheckout extends Component {
    constructor(props) {
        super(props);
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
                { title: 'Event Info', link: '#' },
            ],
        };
        this.toggleTab = this.toggleTab.bind(this);
        this.handleSelectGroup = this.handleSelectGroup.bind(this);
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }

    handleSelectGroup = (selectedGroup) => {
        this.setState({ selectedGroup });
    };

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        {/* Render Breadcrumb */}
                        <Breadcrumbs
                            title="Event Info"
                            breadcrumbItems={this.state.breadcrumbItems}
                        />

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <div
                                            class="progress mb-3"
                                            style={{ height: '10px' }}
                                        >
                                            <div
                                                class="progress-bar bg-danger"
                                                role="progressbar"
                                                style={{ width: '20%' }}
                                                aria-valuenow="20"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                Order Products
                                            </div>
                                            <div
                                                class="progress-bar bg-warning"
                                                role="progressbar"
                                                style={{ width: '20%' }}
                                                aria-valuenow="40"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                Event Info
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
                                                        Please enter details
                                                        regarding your event:
                                                    </CardTitle>
                                                    <p className="card-title-desc"></p>
                                                    <Form>
                                                        <div>
                                                            <div>
                                                                <Row>
                                                                    <Col lg={4}>
                                                                        <div className="mb-4">
                                                                            <Label
                                                                                htmlFor="billing-name"
                                                                                className="form-label"
                                                                            >
                                                                                Order
                                                                                Alias
                                                                            </Label>
                                                                            <Input
                                                                                type="text"
                                                                                className="form-control"
                                                                                id="billing-name"
                                                                                placeholder="John & Amy's Wedding"
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={4}>
                                                                        <div className="mb-4">
                                                                            <Label
                                                                                htmlFor="billing-email-address"
                                                                                className="form-label"
                                                                            >
                                                                                Number
                                                                                of
                                                                                Guests
                                                                            </Label>
                                                                            <Input
                                                                                type="email"
                                                                                className="form-control"
                                                                                id="billing-email-address"
                                                                                placeholder="150"
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={4}>
                                                                        <div className="mb-4">
                                                                            <Label
                                                                                htmlFor="billing-phone"
                                                                                className="form-label"
                                                                            >
                                                                                Date
                                                                                &
                                                                                Time
                                                                            </Label>
                                                                            <input
                                                                                type="datetime-local"
                                                                                value="2021-08-19T13:45:00"
                                                                                className="form-control"
                                                                                id="billing-phone"
                                                                                placeholder="Enter your Phone no."
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                                <div className="mb-4">
                                                                    <Label
                                                                        htmlFor="billing-address"
                                                                        md="2"
                                                                        className="form-label"
                                                                    >
                                                                        Address
                                                                    </Label>
                                                                    <textarea
                                                                        className="form-control"
                                                                        id="billing-address"
                                                                        rows="3"
                                                                        placeholder="Enter full address"
                                                                    />
                                                                </div>
                                                                <Row>
                                                                    <Col lg={4}>
                                                                        <div className="mb-4 mb-lg-0">
                                                                            <Label
                                                                                className="form-label"
                                                                                for="billing-city"
                                                                            >
                                                                                City
                                                                            </Label>
                                                                            <Input
                                                                                type="text"
                                                                                className="form-control"
                                                                                id="billing-city"
                                                                                placeholder="Enter City"
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={4}>
                                                                        <div className="mb-0">
                                                                            <Label
                                                                                className="form-label"
                                                                                for="zip-code"
                                                                            >
                                                                                Zip
                                                                                /
                                                                                Postal
                                                                                code
                                                                            </Label>
                                                                            <Input
                                                                                type="text"
                                                                                className="form-control"
                                                                                id="zip-code"
                                                                                placeholder="Enter Postal code"
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </Form>
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
                                                            : 'previous'
                                                    }
                                                >
                                                    <Link
                                                        to="/ecommerce-cart"
                                                        onClick={() => {
                                                            this.toggleTab(
                                                                this.state
                                                                    .activeTab -
                                                                    1
                                                            );
                                                        }}
                                                    >
                                                        Previous
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
                                                        to="/ecommerce-estimate"
                                                        onClick={() => {
                                                            this.toggleTab(
                                                                this.state
                                                                    .activeTab +
                                                                    1
                                                            );
                                                        }}
                                                    >
                                                        Next
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
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

export default EcommerceCheckout;
