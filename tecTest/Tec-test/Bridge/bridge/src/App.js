
import './App.css';
import React, {useState} from 'react';
import { Home } from './components/home';
import { Question1 } from './components/question1';
import { Result } from './components/result';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Question2 } from './components/question2';
import { Question3 } from './components/question3';

function App() {
    let [suplierProdState, setSuplierProdState] = useState({});
    let [quotationOrderRefState, setQuotationOrderRefState] = useState({});
    let [findProductRefState, setFindProductRefState] = useState({});
    let [raiseOrderRefState, setRaiseOrderRefState] = useState({});
    let [athoriseSellRefState, setAthoriseSellRefState] = useState({});
    let [payProviderRefState, setPayProviderRefState] = useState({});
    let [deliverProductRefState, setDeliverProductRefState] = useState({});
    let [invoiceCheckRefState, setInvoiceCheckRefState] = useState({});
    let [placeOrderRefState, setPlaceOrderRefState] = useState({});
    let [question1State, setquestion1State] = useState({});
    let [question2State, setquestion2State] = useState({});
    let [question3State, setquestion3State] = useState({});
    let receivesuplierProdRef = (refs) => {
        setSuplierProdState(refs)
    }
    let receiveQuotationOrderRef = (refs) => {
        setQuotationOrderRefState(refs)
    }
    let receiveFindProductRef = (refs) => {
        setFindProductRefState(refs)
    }
    let receiveRaiseOrderRef = (refs) => {
        setRaiseOrderRefState(refs)
    }
    let receiveAthoriseSellRef = (refs) => {
        setAthoriseSellRefState(refs)
    }
    let receivePayProviderRef = (refs) => {
        setPayProviderRefState(refs)
    }
    let receiveDeliverProductRef = (refs) => {
        setDeliverProductRefState(refs)
    }
    let receiveInvoiceCheckRef = (refs) => {
        setInvoiceCheckRefState(refs)
    }
    let receivePlaceOrderRef = (refs) => {
        setPlaceOrderRefState(refs)
    }
    let getquestion1 = (question1) => {
        setquestion1State(question1)
    }
    let getquestion2 = (question2) => {
        setquestion2State(question2)
    }
    let getquestion3 = (question3) => {
        setquestion3State(question3)
    }
  return (
    <React.Fragment>
                    <pre>{JSON.stringify(question1State)}</pre>
         <Routes>
           <Route path = {'/'} element={<Navigate to = {'/home'}/>}/>
           <Route path = {'/home'} element =
           {
                <Home
                    sendsuplierProdState = {receivesuplierProdRef}
                    sendQuotationOrderState = {receiveQuotationOrderRef}
                    sendReceiveFindProductRef = {receiveFindProductRef}
                    sendRaiseOrderRef = {receiveRaiseOrderRef}
                    sendAthoriseSellRef = {receiveAthoriseSellRef}
                    sendPayProvider = {receivePayProviderRef}
                    sendDeliverProduct = {receiveDeliverProductRef}
                    sendInvoiceCheck = {receiveInvoiceCheckRef}
                    sendPlaceOrder = {receivePlaceOrderRef}
                />
           }/>
           <Route path = {'/question1'} element = {<Question1  sendQuestion1= {getquestion1}/>}/>
           <Route path = {'/question2'} element = {<Question2 sendQuestion2= {getquestion2}/>}/>
           <Route path = {'/question3'} element = {<Question3 sendQuestion3= {getquestion3}/>}/>
           <Route path = {'/result'} element =
           {<Result
                questionOne = {question1State}
                questionTwo = {question2State}
                questionThree = {question3State}
                suplierProd = {suplierProdState}
                quotationOrder = {quotationOrderRefState}
                findProduct = {findProductRefState}
                raiseOrder = {raiseOrderRefState}
                athoriseSell = {athoriseSellRefState}
                payProvider = {payProviderRefState}
                deliveryProduct = {deliverProductRefState}
                invoiceCkeck = {invoiceCheckRefState}
                placeOrder = {placeOrderRefState}
            />}/>
       </Routes>
    </React.Fragment>
  );
}

export default App;
