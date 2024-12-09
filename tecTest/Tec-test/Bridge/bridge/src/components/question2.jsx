import React, {useState} from 'react';
import { Link } from "react-router-dom";

export const Question2 = (props) => {
    let [state, setState] = useState({
        value: ''
    });

    const question2 = (e) => {
        if (isNaN(e.target.value)) {
          return;
        }
        const onlyNums = e.target.value.replace(/[^0-9]/g, "");
        setState({
          [e.target.name]: onlyNums,
        });
        props.sendQuestion2(state)
      };
    return (
        <React.Fragment>
             <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className='text-danger'>Calculating Your Total cost</h4>
                    </div>
                </div>
               <div className="row">
                   <div className="col-xs-7">
                   <Link to= {'/question1'} className='btn btn-danger ms-2'>
                        <i class="fa fa-arrow-circle-left"></i>
                    </Link>
                    <span>Approximatly how many unique purchase orders are raised per
                        annum for these item</span>
                    <Link to= {'/question3'} className='btn btn-danger ms-2'>
                        <i class="fa fa-arrow-circle-right"></i>
                    </Link>
                   </div>
                   <div className="col-xs-5">
                       <form action="">
                           <div className="form-group">
                           <input type="number"
                            name = "value"
                            value = {state.value}
                            onChange={(e) => question2(e)} class="form-control"  placeholder="Enter Number" />
                           </div>
                       </form>
                   </div>
               </div>
            </div>
        </React.Fragment>
    )
}
