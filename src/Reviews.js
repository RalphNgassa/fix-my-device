import './Reviews.css'

const Reviews = () => {
    return (
        <div className='reviews'>
            
            <div className='row'>
                <div className='col col-1-of-2'>
                  <p style={{color: "gold", textAlign: "center",fontSize: "30px", fontWeight: "bold"}}>Lots of Satisfied Customers !</p>
                  <div className='comment'>
                    <p>
                    &quot;vitae ultricies leo integer malesuada nunc vel risus commodo viverra
                     maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare
                     arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor&quot;
                    </p>
                  </div>
                  <div className="comment">
                    <p >
                    &quot; vitae ultricies leo integer malesuada nunc vel risus commodo viverra
                     maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare
                     arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor&quot;
                    </p>
                  </div>
                  <div className='comment'>
                    <p>
                    &quot; vitae ultricies leo integer malesuada nunc vel risus commodo viverra
                     maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare
                     arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor&quot;
                    </p>
                  </div>
                </div>
                <div className='col col-2-of-2'>
                    <h2>Provide us a feedback</h2>
                    <form className='reviews-form'>
                        <div className='form-line' id='form-line-1'>
                            <label className='required'>Name</label>
                            <input type={"text"} className="field" ></input>
                        </div>
                        <div className='form-line' id='form-line-2'>

                            <label className='required'>Email</label>
                            <input type={"email"} className="field" ></input>
                        </div>
                        <div className='form-line' id='form-line-3'>
                            <label className='required'>Phone number</label>
                            <input type={"tel"} className="field" ></input>
                        </div>
                        <div className='form-line' id='form-line-4'>
                            <label className='required'>Describe your experience</label>
                            <textarea></textarea>
                        </div>
                        <input type={"submit"} value={"Submit Feedback"} className="btn btn-solid"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reviews;