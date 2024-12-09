 import React from 'react';


 export const FormComponent = () => {
     return (
        <React.Fragment>
            <details>
                <summary>Step 1: Your details</summary>
                <div class="content">
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" />
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" />
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" /> Remember me</label>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
                </div>
            </details>
            <details>
                <summary>These work with just <strong>CSS</strong> and <strong>Semantic HTML</strong> 👍</summary>
                <div class="content">
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi unde, ex rem voluptates autem aliquid veniam quis temporibus repudiandae illo, nostrum, pariatur quae! At animi modi dignissimos corrupti placeat voluptatum!
                    </p>
                    <img src="https://placebear.com/400/200" alt=""/>
                    <p>
                    Facilis ducimus iure officia quos possimus quaerat iusto, quas, laboriosam sapiente autem ab assumenda eligendi voluptatum nisi eius cumque, tempore reprehenderit optio placeat praesentium non sint repellendus consequuntur? Nihil, soluta.
                    </p>
                </div>
            </details>
            <details>
                <summary>Click or Tap <strong>ANYWHERE</strong> to expand with a <strong>Sliding Effect</strong></summary>
                <div class="content">
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi unde, ex rem voluptates autem aliquid veniam quis temporibus repudiandae illo, nostrum, pariatur quae! At animi modi dignissimos corrupti placeat voluptatum!
                    </p>
                    <img src="https://placebear.com/400/200" alt=""/>
                    <p>
                    Facilis ducimus iure officia quos possimus quaerat iusto, quas, laboriosam sapiente autem ab assumenda eligendi voluptatum nisi eius cumque, tempore reprehenderit optio placeat praesentium non sint repellendus consequuntur? Nihil, soluta.
                    </p>
                </div>
            </details>
        </React.Fragment>
    )
 }
