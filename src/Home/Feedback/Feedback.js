import React from 'react';

const Feedback = () => {
    return (
        <div>
            <div className="w-50 mx-5 justify-content-center">
                <div className="mb-3 mt-5">
                    <label className="form-label">Your Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Your Comment</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button className="btn-info">Submit</button>
            </div>
        </div>
    );
};

export default Feedback;