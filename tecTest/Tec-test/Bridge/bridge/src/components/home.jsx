import React, {useRef, useEffect} from 'react';
import { Link } from "react-router-dom";

export const Home = (props) => {
    const suplierProdRef = useRef();
    const quotationOrderRef = useRef();
    const findProductRef = useRef();
    const raiseOrderRef = useRef();
    const athoriseSellRef = useRef();
    const payProviderRef = useRef();
    const deliverProductRef = useRef();
    const invoiceCheckRef = useRef();
    const placeOrderrRef = useRef();

    useEffect(() => {
        Number(props.sendsuplierProdState(suplierProdRef.current.innerHTML));
        Number(props.sendQuotationOrderState(quotationOrderRef.current.innerHTML));
        Number(props.sendReceiveFindProductRef(findProductRef.current.innerHTML));
        Number(props.sendRaiseOrderRef(raiseOrderRef.current.innerHTML));
        Number(props.sendAthoriseSellRef(athoriseSellRef.current.innerHTML));
        Number(props.sendPayProvider(payProviderRef.current.innerHTML));
        Number(props.sendDeliverProduct(deliverProductRef.current.innerHTML));
        Number(props.sendInvoiceCheck(invoiceCheckRef.current.innerHTML));
        Number(props.sendPlaceOrder(placeOrderrRef.current.innerHTML));
    })

    return (
        <React.Fragment>

            <div className="container overflow-hidden">
                <div className="row">
                    <div className="col">
                        <h4 className='text-danger'>Calculating Your Total cost</h4>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-4 ">
                        <div className="row cost">
                            <div className="col-1">
                                <i class="fa fa-check-circle"></i>
                            </div>
                            <div className="col-8">
                                <p>Identify your requirement</p>
                            </div>
                            <div className="col-3">
                                <div className='text-muted'>Estimate</div>
                                <span>£</span>
                                <span ref = {suplierProdRef}>6</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="row cost">
                            <div className="col-1">
                                <i class="fa fa-check-circle"></i>
                            </div>
                            <div className="col-8">
                                <p>Request a quotation</p>
                            </div>
                            <div className="col-3">
                                <div className='text-muted'>Estimate</div>
                                <span>£</span>
                                <span ref = {quotationOrderRef}>12</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="row cost">
                            <div className="col-1">
                                <i class="fa fa-check-circle"></i>
                            </div>
                            <div className="col-8">
                                <p>Find Products</p>
                            </div>
                            <div className="col-3">
                                <div className='text-muted'>Estimate</div>
                                <span>£</span>
                                <span ref = {findProductRef}>18</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-4 ">
                        <div className="row cost">
                            <div className="col-1">
                                <i class="fa fa-check-circle"></i>
                            </div>
                            <div className="col-8">
                                <p>Raise an order</p>
                            </div>
                            <div className="col-3">
                                <div className='text-muted'>Estimate</div>
                                <span>£</span>
                                <span ref = {raiseOrderRef}>24</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="row cost">
                            <div className="col-1">
                                <i class="fa fa-check-circle"></i>
                            </div>
                            <div className="col-8">
                                <p>Authorise sale</p>
                            </div>
                            <div className="col-3">
                                <div className='text-muted'>Estimate</div>
                                <span>£</span>
                                <span ref ={athoriseSellRef}>30</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="row cost">
                            <div className="col-1">
                                <i class="fa fa-check-circle"></i>
                            </div>
                            <div className="col-8">
                                <p>Pay provider</p>
                            </div>
                            <div className="col-3">
                                <div className='text-muted'>Estimate</div>
                                <span>£</span>
                                <span ref={payProviderRef}>36</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-4 ">
                        <div className="row cost">
                            <div className="col-1">
                                <i class="fa fa-check-circle"></i>
                            </div>
                            <div className="col-8">
                                <p>Deliver product</p>
                            </div>
                            <div className="col-3">
                                <div className='text-muted'>Estimate</div>
                                <span>£</span>
                                <span ref = {deliverProductRef}>42</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="row cost">
                            <div className="col-1">
                                <i class="fa fa-check-circle"></i>
                            </div>
                            <div className="col-8">
                                <p>Invoice check</p>
                            </div>
                            <div className="col-3">
                                <div className='text-muted'>Estimate</div>
                                <span>£</span>
                                <span ref={invoiceCheckRef}>48</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="row cost">
                            <div className="col-1">
                                <i class="fa fa-check-circle"></i>
                            </div>
                            <div className="col-8">
                                <p>Place Order</p>
                            </div>
                            <div className="col-3">
                                <div className='text-muted'>Estimate</div>
                                <span>£</span>
                                <span ref= {placeOrderrRef}>54</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-3 col-xs-offset-4 cost">
                        <span className='ms-auto'>Total</span>
                        <span className=''>£6</span>
                    </div>
                    <div className="col-3 cost bg-danger ">
                    <Link to= {'/question1'} className='btn btn-success ms-2'>
                        <i className="fa fa-plus-circle p-1"/>New
                    </Link>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
