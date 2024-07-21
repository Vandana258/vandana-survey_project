import { Layout } from '../Layout/Layout.js';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Section1(){
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const totalQuestions = 4;

    const handleNext = () => {
        setCurrentQuestion(prev => prev + 1);
      };
    
      const handleBack = () => {
        setCurrentQuestion(prev => prev - 1);
      };


    return(
        <Layout>
            <div className="section-content">
                {/* User Heading */}
                <div className="page">
                    <div className="User-container">
                        <div className="row-div row-col-div dis-flex">
                            <div className="col-12-div">
                                <p variant="h1" className="user-heading"> Section A : Introduction and Screening</p>
                            </div>
                            <div>
                                <p variant="h1" style={{fontSize:'1.3rem'}}>Question: {currentQuestion} / {totalQuestions}</p>
                            </div>
                        </div>
                    </div>
                </div> 

                {/* User content */}
                <div className="page page-user">
                    <div className="row-div row-col-div-ques">
                        <div className="mb-3 text-left">
                        {currentQuestion === 1 && (
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>What type of farm do you own, live or work on? (MULTI RESPONSE)</h2>
                            )}
                            {currentQuestion === 2 && (
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>What is the size of your property/farm in Hectares? If you own or manage more than one
                                farm, please think about the total size of the farms combined.</h2>
                            )}
                            {currentQuestion === 3 && (
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>And which of the following best describes your role on the property?</h2>
                            )}
                            {currentQuestion === 4 && (
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>And when it comes to decisions around your farm operation, which of the following best
                                describes your role in these decisions?</h2>
                            )}
                           {/* <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>What type of farm do you own, live or work on? (MULTI RESPONSE)</h2> */}
                        </div>
                        {currentQuestion === 1 && (
                        <div class='mb-3 pt-3'>
                          <div class='row' >
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    Sheep and Beef
                                </label>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                Dairy Farming
                                </label>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                Cropping
                                </label>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                Deer Farming
                                </label>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                Forestry
                                </label>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                Other (please specify)
                                </label>
                            </div>
                            </div>
                        </div>
                        )}
                        {currentQuestion === 2 && (
                        <div class='mb-3 pt-3 wid-100'>
                          <div class='row' >
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                1-20ha (Screen out)
                                </label>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                21-100ha
                                </label>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                101-250ha
                                </label>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                250ha +
                                </label>
                            </div>
                            </div>
                        </div>
                        )}
                        {currentQuestion === 3 && (
                        <div class='mb-3 pt-3'>
                          <div class='row' >
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                Owner-operator
                                </label>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                Manager
                                </label>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                Leasee
                                </label>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                Sharemilker / Contract Milker
                                </label>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                Other (please specify)
                                </label>
                            </div>
                            </div>
                        </div>
                        )}
                        {currentQuestion === 4 && (
                        <div class='mb-3 pt-3'>
                          <div class='row' >
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                I am solely responsible for decisions
                                </label>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                I am jointly responsible for decisions
                                </label>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <input
                                    type='checkbox'
                                    className='btn-check'
                                    id='btn-checked'
                                    defaultChecked
                                    autoComplete='off'
                                />
                                <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                I am not involved in decision making Screen out
                                </label>
                            </div>
                            </div>
                        </div>
                        )}
                        <div class='d-flex justify-content-between mb-3 wid-100 '>
                            <div>
                                {currentQuestion===1 ?
                                    ''
                                    :
                                    <button
                                    type='button'
                                    className='btn btn-outline-secondary'
                                    onClick={handleBack}
                                    disabled={currentQuestion === 1}
                                >
                                <i className="bi bi-chevron-left" style={{marginRight:'4px'}}></i> 
                                    Back
                                </button>
                                }
                             </div>
                                {currentQuestion===4 ?
                                <button
                                    type='button'
                                    className='btn btn-outline-primary'
                                    onClick={handleNext}
                                    disabled={currentQuestion === 4}
                                >
                                Submit
                                </button>
                                :
                                <button
                                    type='button'
                                    className='btn btn-outline-primary'
                                    onClick={handleNext}
                                    disabled={currentQuestion === 4}
                                >
                                Next
                                <i class="bi bi-chevron-right" style={{marginLeft:'4px'}}></i>
                                </button>
                                }
                        </div>
                    </div>
                </div>
            </div> 
        </Layout>
    );
}


export default Section1;

