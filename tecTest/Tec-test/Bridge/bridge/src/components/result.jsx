import React from 'react';

export const Result = (props) => {
    return (
        <React.Fragment>
            <pre>{JSON.stringify(props.questionOne)}</pre>
            <pre>{JSON.stringify(props.questionTwo)}</pre>
            <pre>{JSON.stringify(props.questionThree)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className='text-danger'>Calculating Your Total cost - your result</h4>
                    </div>
                </div>
               <div className="row">
                   <div className="col">
                        <p className="h2">By utilizing the Bridge Sales Enablement Agency Calculator
                        organization can simplify the process associated with indirect procurement and unlock
                         signigficant typical savings of up to 60% of process costs </p>
                         <p>Based on what you have told us about your process we can estimate that the following costs
                            are being insured within your procurement process
                         </p>
                   </div>
                    <div className="col cost price">
                            <div className="row justify-content-between">
                                <div className="col-xs-10">
                                   Supplier and product
                                </div>
                                <div className="col-xs-2 bg-danger">
                                {
                                    props.suplierProd && props.questionOne.value?
                                    <p>{(props.suplierProd)*(props.questionThree.value)}</p>:''
                                }
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-xs-10">
                                   Quotation to order Process
                                </div>
                                <div className="col-xs-2 bg-danger">
                                {
                                    props.suplierProd && props.questionOne.value?
                                    <p>{Number(props.suplierProd)*(props.questionOne.value)}</p>:''
                                }
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-xs-10">
                                   Expediating & receiving orders
                                </div>
                                <div className="col-xs-2 bg-danger">
                                {
                                    props.suplierProd && props.questionOne.value?
                                    <p>{Number(props.suplierProd)*(props.questionOne.value)}</p>:''
                                }
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-xs-10">
                                   Processing Invoices
                                </div>
                                <div className="col-xs-2 bg-danger">
                                {
                                    props.suplierProd && props.questionOne.value?
                                    <p>{Number(props.suplierProd)*(props.questionOne.value)}</p>:''
                                }

                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-xs-10">
                                   Paying suppliers
                                </div>
                                <div className="col-xs-2 bg-danger">
                                    {
                                         props.suplierProd && props.questionOne.value?
                                         <p>{Number(props.suplierProd)*(props.questionOne.value)}</p>:''
                                    }
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-xs-10">
                                   Total Process Cost (Year)
                                </div>
                                <div className="col-xs-2 bg-danger">{
                                    props.suplierProd && props.questionOne.value?
                                        <p>{Number(props.suplierProd)*(props.questionOne.value)}</p>: ''
                                    }
                                </div>
                            </div>
                        </div>
               </div>
            </div>
        </React.Fragment>
    )
}
