import { useState } from 'react';
import './Reviews.css'

const Reviews = () => {

    const [msgVis, setMsgVis] = useState(false);
    const [titleVis, setTitleVis] = useState(true);
    const [formVis, setFormVis] = useState(true);
    

    function submitFcn(e) {
        e.preventDefault();
        setMsgVis(true);
        setFormVis(false);
        setTitleVis(false);

        setTimeout(() => {
            setMsgVis(false);
            setTitleVis(true);
            setFormVis(true);
        }, 5000);

    }


    return (
        <div className='reviews' id='reviews'>
            
            <div className='row'>
                <div className='col col-1-of-2'>
                  <p style={{color: "gold", textAlign: "center",fontSize: "30px", fontWeight: "bold"}}>Lots of Satisfied Customers !</p>
                  <div className='comment' style={{marginBottom: "10px"}}>
                    <p>
                    <span>&#8220;&#8220; </span>
                    Excellent repair shop! They were able to identify what issue my Iphone 12
                    and were prompt to fix it. Furthermore, they were transparent on repair costs. I can only recommend
                    this shop !
                    <span> &#8220;&#8220;</span>
                    </p>
                    <p>By <span><i>Anonymous</i></span></p>
                  </div>
                  <div className="comment">
                    <p>
                    <span>&#8220;&#8220; </span> They somehow do their part to save the planet by extending the lifetime of damaged devices.
                    Given their excellent job, I can only recommend their services. I also greatly their coffee ! 
                    <span> &#8220;&#8220;</span>
                    </p>
                    <p>By <span><i>Ralph</i></span></p>
                  </div>
                  <div className='comment'>
                    <p>
                    <span>&#8220;&#8220; </span>
                    They have one of the friedliest and competent staff I've seen. 
                    I've had numerous devices (including laptops) repaired here and they were able to work 
                    back normally !   
                    <span> &#8220;&#8220;</span>
                    </p>
                    <p>By <span><i>Sophia</i></span></p>
                  </div>
                  <div className='comment'>
                    <p>
                    <span>&#8220;&#8220; </span> I really appreciate their 30-day money back guarantee. That gave me some reassurance
                    before I handed them my Galaxy Tab S8. Fortunately, I didn't have to return the item given their
                    outstanding services.
                    <span> &#8220;&#8220;</span>
                    </p>
                    <p>By <span><i>Nancy</i></span></p>
                  </div>
                </div>
                <div className='col col-2-of-2'>
                    {msgVis? <h1 id="reviewThanks" style={{textAlign: "center", marginTop: "140px"}}>Thanks For the Review !</h1>: null}
                    {titleVis? <div id='reviewTitle' style={{marginBottom: "40px", marginTop: "32px"}}><h2 >Provide us a feedback</h2></div>:null};
                    {formVis? <form className='reviews-form' id="reviewsForm" onSubmit={(e)=>{submitFcn(e)}}>
                        <div className='form-line' id='form-line-1'>
                            <label>Name</label>
                            <input type={"text"} className="field" required></input>
                        </div>
                        <div className='form-line' id='form-line-2'>

                            <label>Email</label>
                            <input type={"email"} className="field"></input>
                        </div>
                        <div className='form-line' id='form-line-3'>
                            <label>Phone number</label>
                            <input type={"tel"} className="field"></input>
                        </div>
                        <div className='form-line' id='form-line-4'>
                            <label className='required'>Describe your experience</label>
                            <textarea required></textarea>
                        </div>
                        <input type={"submit"} value={"Submit Feedback"} className="btn btn-solid" ></input>
                    </form> : null}
                </div>
            </div>
        </div>
    );
};

export default Reviews;