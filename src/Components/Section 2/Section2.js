import { Layout } from '../Layout/Layout.js';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Section2(){
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const totalQuestions = 12;

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
                        <div className="row-div row-col-div">
                            <div className="col-12-div">
                                <p variant="h1" className="user-heading"> Section B : Brand Tracking (Rabobank)</p>
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
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}> When thinking about businesses that provide banking and financial services, which providers
                                or brands first come to mind/are you aware of?</h2>

                            )}
                            {currentQuestion === 2 && (
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>From the list below, please select all the banking and financial services providers or brands
                                you have heard of before today, even if you listed them earlier: (Multi-response – rotate
                                order)</h2>
                            )}
                            {currentQuestion === 3 && (
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>Which of the following banking or financial service providers would you consider using in the
                            future? (Multi-response -  rotate order)</h2>
                            )}
                            {currentQuestion === 4 && (
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>Before today, which of the following banking or financial service providers have you looked
                            into or researched? (Multi-response - rotate order)</h2>
                            )}
                            {currentQuestion === 5 && (
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>And which banking and financial service providers do you use currently? (Multi-response –
                                    rotate order) Suggest change to- And which banking and financial service providers have you
                                    used or are currently using?</h2>
                            )}
                             {currentQuestion === 6 && (
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>Which of the following is your preferred bank? (Single response- rotate order)</h2>
                            )}
                            {currentQuestion === 7 && (
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>Which of the following do you associate with Rabobank?</h2>
                            )}
                            {currentQuestion === 8 && (
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>Which of the following do you associate with ANZ?</h2>
                            )}
                            {currentQuestion === 9 && (
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>Which of the following do you associate with BNZ?</h2>
                            )}
                            {currentQuestion === 10 && (
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>Which of the following do you associate with ASB?</h2>
                            )}
                            {currentQuestion === 11 && (
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>Which of the following do you associate with WESTPAC?</h2>
                            )}
                            {currentQuestion === 12 && (
                                <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>Which of the following banking brands have you read, seen or heard any advertising,
                            messages or content for recently?</h2>
                            )}
                           {/* <h2 style={{fontSize:'1.5rem', marginTop:'0px', marginBottom:'1rem'}}>What type of farm do you own, live or work on? (MULTI RESPONSE)</h2> */}
                        </div>
                        {currentQuestion === 1 && (
                        <div class='mb-3 pt-3'>
                            <textarea class='textarea' name id cols={'30'} rows={'5'} placeholder='OPEN ENDED'></textarea>
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
                                    ASB
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
                                    ANZ
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
                                    BNZ
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
                                    Kiwibank
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
                                    Rabobank
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
                                    TSB
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
                                    Westpac
                                    </label>
                                </div>
                            </div>
                        </div>
                        )}
                        {currentQuestion === 3 && (
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
                                    ASB
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
                                    ANZ
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
                                    BNZ
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
                                    Kiwibank
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
                                    Rabobank
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
                                    TSB
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
                                    Westpac
                                    </label>
                                </div>
                            </div>
                        </div>
                        )}
                        {currentQuestion === 4 && (
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
                                    ASB
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
                                    ANZ
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
                                    BNZ
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
                                    Kiwibank
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
                                    Rabobank
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
                                    TSB
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
                                    Westpac
                                    </label>
                                </div>
                            </div>
                        </div>
                        )}
                        {currentQuestion === 5 && (
                         <div class='mb-3 pt-3 wid-100'>
                            <div class='row' >
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    ASB
                                    </label>
                                </div>
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    ANZ
                                    </label>
                                </div>
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    BNZ
                                    </label>
                                </div>
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    Kiwibank
                                    </label>
                                </div>
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    Rabobank
                                    </label>
                                </div>
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    TSB
                                    </label>
                                </div>
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    Westpac
                                    </label>
                                </div>
                            </div>
                        </div>
                        )}
                         {currentQuestion === 6 && (
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
                                    ASB
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
                                    ANZ
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
                                    BNZ
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
                                    Kiwibank
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
                                    Rabobank
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
                                    TSB
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
                                    Westpac
                                    </label>
                                </div>
                            </div>
                        </div>
                        )}
                        {currentQuestion === 7 && (
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
                                    Are Agri Banking specialists
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
                                    Invests back into NZ
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
                                    Supports rural communities
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
                                    Is a brand I trust
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
                                    Is a leader in supporting sustainable farming
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
                                    Has staff based in rural communities
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
                                    Is the best bank for Agri lending
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
                                    Committed to agribusiness for the long term
                                    </label>
                                </div>
                            </div>
                        </div>
                        )}
                        {currentQuestion === 8 && (
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
                                    Are Agri Banking specialists
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
                                    Invests back into NZ
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
                                    Supports rural communities
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
                                    Is a brand I trust
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
                                    Is a leader in supporting sustainable farming
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
                                    Has staff based in rural communities
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
                                    Is the best bank for Agri lending
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
                                    Committed to agribusiness for the long term
                                    </label>
                                </div>
                            </div>
                        </div>
                        )}
                        {currentQuestion === 9 && (
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
                                    Are Agri Banking specialists
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
                                    Invests back into NZ
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
                                    Supports rural communities
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
                                    Is a brand I trust
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
                                    Is a leader in supporting sustainable farming
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
                                    Has staff based in rural communities
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
                                    Is the best bank for Agri lending
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
                                    Committed to agribusiness for the long term
                                    </label>
                                </div>
                            </div>
                        </div>
                        )}
                        {currentQuestion === 10 && (
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
                                    Are Agri Banking specialists
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
                                    Invests back into NZ
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
                                    Supports rural communities
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
                                    Is a brand I trust
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
                                    Is a leader in supporting sustainable farming
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
                                    Has staff based in rural communities
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
                                    Is the best bank for Agri lending
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
                                    Committed to agribusiness for the long term
                                    </label>
                                </div>
                            </div>
                        </div>
                        )}
                        {currentQuestion === 11 && (
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
                                    Are Agri Banking specialists
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
                                    Invests back into NZ
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
                                    Supports rural communities
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
                                    Is a brand I trust
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
                                    Is a leader in supporting sustainable farming
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
                                    Has staff based in rural communities
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
                                    Is the best bank for Agri lending
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
                                    Committed to agribusiness for the long term
                                    </label>
                                </div>
                            </div>
                        </div>
                        )}
                        {currentQuestion === 12 && (
                        <div class='mb-3 pt-3'>
                            <div class='row' >
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    ASB
                                    </label>
                                </div>
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    ANZ
                                    </label>
                                </div>
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                        BNZ
                                    </label>
                                </div>
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    Kiwibank
                                    </label>
                                </div>
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    Rabobank
                                    </label>
                                </div>
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    SBS
                                    </label>
                                </div>
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    TSB
                                    </label>
                                </div>
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    Westpac
                                    </label>
                                </div>
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    Co-operative Bank
                                    </label>
                                </div>
                                <div className='col-md-3 mb-1'>
                                    <input
                                        type='checkbox'
                                        className='btn-check'
                                        id='btn-checked'
                                        defaultChecked
                                        autoComplete='off'
                                    />
                                    <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                    Heartland Bank
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
                            {currentQuestion===12 ?
                            <button
                                type='button'
                                className='btn btn-outline-primary'
                                onClick={handleNext}
                                disabled={currentQuestion === 12}
                            >
                            Submit
                            </button>
                            :
                            <button
                                type='button'
                                className='btn btn-outline-primary'
                                onClick={handleNext}
                                disabled={currentQuestion === 12}
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

export default Section2;