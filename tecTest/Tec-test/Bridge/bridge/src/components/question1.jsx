import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

export const Question1 = (props) => {
    let [state, setState] = useState({
        value: ''
    });

    const question1 = (e) => {
        // if (isNaN(e.target.value)) {
        //   return;
        // }
        // const onlyNums = e.target.value.replace(/[^0-9]/g, "");
        setState({
          [e.target.name]: e.target.value,
        });
        props.sendQuestion1(state)
      };

      useEffect(()=> {
        //here you will have correct value in userInput
    },[state])

    //   let getquestion1 = (setState)=>{
    //     props.sendQuestion1(setState)
    // }
    return (
        <React.Fragment>
             {/* <pre>{JSON.stringify(state)}</pre> */}
             <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className='text-danger'>Calculating Your Total cost</h4>
                    </div>
                </div>
               <div className="row">
                   <div className="col-xs-7">
                    <Link to= {'/home'} className='btn btn-danger ms-2'>
                        <i class="fa fa-arrow-circle-left"></i>
                    </Link>
                    <span>What is your approximate annual Spend on industrial items</span>
                    <Link to= {'/question2'} className='btn btn-danger ms-2'>
                        <i class="fa fa-arrow-circle-right"></i>
                    </Link>
                   </div>
                   <div className="col-xs-5">
                       <form action="">
                           <div className="form-group">
                           <input type="number"
                           name = "value"
                           value = {state.value}
                           onChange={(e) => question1(e)} class="form-control"  placeholder="Enter Number" />
                           </div>
                       </form>
                   </div>
               </div>
            </div>
        </React.Fragment>
    )
}
