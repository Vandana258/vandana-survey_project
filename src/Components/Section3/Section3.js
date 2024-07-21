import { Layout } from '../Layout/Layout.js';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Section3() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [rangeValue, setRangeValue] = useState(0);
    const totalQuestions = 5;

    const handleNext = () => {
        setCurrentQuestion(prev => prev + 1);
    };

    const handleBack = () => {
        setCurrentQuestion(prev => prev - 1);
    };

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
      };


    return (
        <Layout>
            <div className="section-content">
                {/* User Heading */}
                <div className="page">
                    <div className="User-container">
                        <div className="row-div row-col-div">
                            <div className="col-12-div">
                                <p variant="h1" className="user-heading"> Section C : Additional Demographics and Profiling Info</p>
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
                                <h2 style={{ fontSize: '1.5rem', marginTop: '0px', marginBottom: '1rem' }}>In the next 12 months, do you expect general economic conditions for all farms/farmers to</h2>
                            )}
                            {currentQuestion === 2 && (
                                <h2 style={{ fontSize: '1.5rem', marginTop: '0px', marginBottom: '1rem' }}>And in the next 12 months, do you expect economic conditions for your farm to</h2>
                            )}
                            {currentQuestion === 3 && (
                                <h2 style={{ fontSize: '1.5rem', marginTop: '0px', marginBottom: '1rem' }}>How old are you?</h2>
                            )}
                            {currentQuestion === 4 && (
                                <h2 style={{ fontSize: '1.5rem', marginTop: '0px', marginBottom: '1rem' }}>And are you…</h2>
                            )}
                            {currentQuestion === 5 && (
                                <h2 style={{ fontSize: '1.5rem', marginTop: '0px', marginBottom: '1rem' }}>What Region do you live in? [SR]</h2>
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
                                            Get a lot better
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
                                            Get better
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
                                            Stay the same
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
                                            Get worse
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
                                            Get a lot worse
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}
                        {currentQuestion === 2 && (
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
                                            Get a lot better
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
                                            Get better
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
                                            Stay the same
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
                                            Get worse
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
                                            Get a lot worse
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}
                        {currentQuestion === 3 && (
                            <div class='mb-3 pt-3 wid-100'>
                                <div className="range-container">
                                    <div className="range-slider">
                                    <input
                                        type="range"
                                        className="form-range wid-100 custom-range"
                                        id="customRange1"
                                        min="0"
                                        max="100"
                                        value={rangeValue}
                                        onChange={handleRangeChange}
                                        />
                                        <div className="range-slider-circle" style={{ left: `calc(${rangeValue}% - 12px)` }}>
                                        {rangeValue}
                                        </div>
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
                                            Male
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
                                            Female
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
                                            Gender Diverse
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
                                            Prefer not to say
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}
                         {currentQuestion === 5 && (
                            <div class='mb-3 pt-3'>
                                <div class='row' >
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                            Northland
                                        </label>
                                    </div>
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                            Auckland
                                        </label>
                                    </div>
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                            Waikato
                                        </label>
                                    </div>
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                            Bay of Plenty
                                        </label>
                                    </div>
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                            Gisborne
                                        </label>
                                    </div>
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                            Hawke's Bay
                                        </label>
                                    </div>
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                            Taranaki
                                        </label>
                                    </div>
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                        Chatham Islands
                                        </label>
                                    </div>
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                            Wellington
                                        </label>
                                    </div>
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                            Tasman
                                        </label>
                                    </div>
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                            Nelson
                                        </label>
                                    </div>
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                        Marlborough
                                        </label>
                                    </div>
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                        West Coast
                                        </label>
                                    </div> 
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                        Canterbury
                                        </label>
                                    </div>
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                        Otago
                                        </label>
                                    </div>
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                        Southland
                                        </label>
                                    </div>
                                    <div className='col-md-5 mb-1'>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id='btn-checked'
                                            defaultChecked
                                            autoComplete='off'
                                        />
                                        <label className='btn btn-outline w-100' htmlFor='btn-checked'>
                                        Manawatu-Wanganui
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
                            {currentQuestion===5 ?
                            <button
                                type='button'
                                className='btn btn-outline-primary'
                                onClick={handleNext}
                                disabled={currentQuestion === 5}
                            >
                            Submit
                            </button>
                            :
                            <button
                                type='button'
                                className='btn btn-outline-primary'
                                onClick={handleNext}
                                disabled={currentQuestion === 5}
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

export default Section3;