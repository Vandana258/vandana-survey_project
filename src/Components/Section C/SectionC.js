import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
// import SendIcon from '@mui/icons-material/Send';

function SectionC() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [rangeValue, setRangeValue] = useState(0);
    const totalQuestions = 5;
    const [answers, setAnswers] = useState({});
    const [questionsAnswered, setQuestionsAnswered] = useState(new Array(totalQuestions).fill(false));

    useEffect(() => {
        const updateQuestionsAnswered = () => {
            const updated = new Array(totalQuestions).fill(false);
            console.log('updated',updated);
            for (let i = 1; i <= totalQuestions; i++) {
                const questionText = getQuestionText(i);
                updated[i - 1] = answers[questionText] && answers[questionText].length > 0;
            }
            console.log('questionsAnswered',questionsAnswered);
            setQuestionsAnswered(updated);
        };

        updateQuestionsAnswered();
    }, [answers]);

    const answeredCount = questionsAnswered.filter(Boolean).length;
    console.log('answeredCount',answeredCount);

    const getQuestionText = (questionNumber) => {
        switch (questionNumber) {
            case 1:
                return "In the next 12 months, do you expect general economic conditions for all farms/farmers to";
            case 2:
                return "And in the next 12 months, do you expect economic conditions for your farm to";
            case 3:
                return "How old are you?";
            case 4:
                return "And are you…";
            case 5:
                return "What Region do you live in? [SR]";
            default:
                return "";
        }
    };

    const handleRangeChange = (event) => {
        const value = event.target.value;
        console.log('value',value);
        setRangeValue(value);

        const questionText = getQuestionText(currentQuestion);
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionText]: [value]
        }));
        console.log('answer of range',answers);
    };

    const handleSubmit = async () => {
        const section = "Section C";
        const questionText = getQuestionText(currentQuestion);
        try {
            const response = await axios.post("http://localhost:3005/saveSurveyAnswers", {
                section,
                question: questionText,
                answers: answers[questionText] || []
            });
    
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Data saved successfully!',
                    customClass: {
                        popup: 'swal2-popup',
                        confirmButton: 'addEditCancelBtn addItemBtn',
                    }
                }).then(() => {
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Save Failed',
                    text: response.data.message,
                    customClass: {
                        popup: 'swal2-popup',
                        confirmButton: 'addEditCancelBtn addItemBtn',
                    }
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Save Failed',
                text: 'You have not marked any question. please mark the question',
                customClass: {
                    popup: 'swal2-popup',
                    confirmButton: 'addEditCancelBtn addItemBtn',
                }
            });
            console.error("Save Error:", error);
        }
    };

    const isMultiResponseQuestion = (questionNumber) => {
        const multiResponseQuestions = [0];
        return multiResponseQuestions.includes(questionNumber);
    };

    const handleCheckboxChange = (option) => {
        const questionText = getQuestionText(currentQuestion);
        setAnswers(prevAnswers => {
            const currentAnswers = prevAnswers[questionText] || [];

            if (isMultiResponseQuestion(currentQuestion)) {
                // For multi-response questions
                const optionIndex = currentAnswers.indexOf(option);

                if (optionIndex === -1) {
                    return { ...prevAnswers, [questionText]: [...currentAnswers, option] };
                } else {
                    return {
                        ...prevAnswers,
                        [questionText]: currentAnswers.filter(item => item !== option),
                    };
                }
            } 
            else {
                // For single-response questions
                if (currentAnswers.includes(option)) {
                    return { ...prevAnswers, [questionText]: [] };
                } else {
                    return { ...prevAnswers, [questionText]: [option] };
                }
            }
        });
    };
    
    const handleBack = () => {
        setCurrentQuestion(prev => prev - 1);
    };

    const handleNext = async () => {
        const section = "Section C";
        const questionText = getQuestionText(currentQuestion);
        const currentAnswers = answers[questionText] || [];
        if (currentAnswers.length === 0) {
            setCurrentQuestion(prev => prev + 1);
            return;
        }
        try {
            const response = await axios.post("http://localhost:3005/saveSurveyAnswers", {
                section,
                question: questionText,
                answers: currentAnswers
            });
            console.log('response', response);

            if (response.data.success) {
                setCurrentQuestion(prev => prev + 1);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Save Failed',
                    text: response.data.message,
                    customClass: {
                        popup: 'swal2-popup',
                        confirmButton: 'addEditCancelBtn addItemBtn',
                    }
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Save Failed',
                text: 'An error occurred while saving answers. Please try again later.',
                customClass: {
                    popup: 'swal2-popup',
                    confirmButton: 'addEditCancelBtn addItemBtn',
                }
            });
            console.error("Save Error:", error);
        }
    };

    const questionText = getQuestionText(currentQuestion);
    const currentAnswers = answers[questionText] || [];

    return (
        <div className="section-content">
            <div className="page">
                <div className="User-container">
                    <div className="row-div row-col-div">
                        <div className="col-12-div">
                            <p className="user-heading slide-in"> Section C : Additional Demographics and Profiling Info</p>
                        </div>
                    </div>
                    <div className='d-flex-jc-sb'>
                            <p variant="h1" style={{ fontSize: '1.3rem' }}>
                                Question: {currentQuestion} / {totalQuestions}
                            </p>
                            <div className='d-flex'>
                                <button type="button" class="btn btn-primary m-r-10- he-mt-mb ft-we-600 bg-color">
                                    Answered<span class="badge text-bg-secondary m-l-10">{answeredCount} </span>
                                </button>
                                <button type="button" class="btn btn-primary he-mt-mb ft-we-600 bg-color-ques">
                                    Total Questions<span class="badge text-bg-secondary m-l-10">{totalQuestions} </span>
                                </button>
                            </div>
                        </div>
                </div>

                <div className="page-user">
                    <div className="row-div row-col-div-ques">
                        <div className="mb-3 text-left">
                            {currentQuestion === 1 && (
                                <h2 className='ques-color'>
                                    1. In the next 12 months, do you expect general economic conditions for all farms/farmers to
                                </h2>
                            )}
                            {currentQuestion === 2 && (
                                <h2 className='ques-color'>
                                    2. And in the next 12 months, do you expect economic conditions for your farm to
                                </h2>
                            )}
                            {currentQuestion === 3 && (
                                <h2 className='ques-color'>
                                    3. How old are you?
                                </h2>
                            )}
                            {currentQuestion === 4 && (
                                <h2 className='ques-color'>
                                    4. And are you…
                                </h2>
                            )}
                            {currentQuestion === 5 && (
                                <h2 className='ques-color'>
                                    5. What Region do you live in? [SR]
                                </h2>
                            )}
                        </div>
                        {currentQuestion === 1 && (
                            <div className='mb-3 pt-3'>
                                <div className='row'>
                                    {['Get a lot better', 'Get better', 'Stay the same', 'Get worse', 'Get a lot worse'].map(option => (
                                        <div className='col-md-6 mb-1' key={option}>
                                            <input
                                                type='checkbox'
                                                className='btn-check'
                                                id={`btn-checked-${option}`}
                                                onChange={() => handleCheckboxChange(option)}
                                                checked={currentAnswers.includes(option)}
                                            />
                                            <label
                                            className={`btn btn-outline w-100 d-flex align-items-center ${currentAnswers.includes(option) ? 'checked-label' : ''}`}
                                            htmlFor={`btn-checked-${option}`}>
                                                <input
                                                    type='checkbox'
                                                    className='form-check-input me-2 m-r-10'
                                                    id={`btn-checked-inner-${option}`}
                                                    onChange={() => handleCheckboxChange(option)}
                                                    checked={currentAnswers.includes(option)}
                                                />
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {currentQuestion === 2 && (
                            <div className='mb-3 pt-3'>
                                <div className='row'>
                                    {['Get a lot better', 'Get better', 'Stay the same', 'Get worse', 'Get a lot worse'].map(option => (
                                        <div className='col-md-6 mb-1' key={option}>
                                            <input
                                                type='checkbox'
                                                className='btn-check'
                                                id={`btn-checked-${option}`}
                                                onChange={() => handleCheckboxChange(option)}
                                                checked={currentAnswers.includes(option)}
                                            />
                                            <label 
                                            className={`btn btn-outline w-100 d-flex align-items-center ${currentAnswers.includes(option) ? 'checked-label' : ''}`}

                                            htmlFor={`btn-checked-${option}`}>
                                                <input
                                                    type='checkbox'
                                                    className='form-check-input me-2 m-r-10'
                                                    id={`btn-checked-inner-${option}`}
                                                    onChange={() => handleCheckboxChange(option)}
                                                    checked={currentAnswers.includes(option)}
                                                />
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {currentQuestion === 3 && (
                            <div className='mb-3 pt-3 wid-100'>
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
                            <div className='mb-3 pt-3'>
                                <div className='row'>
                                    {['Male', 'Female', 'Gender diverse', 'Prefer not to say'].map(option => (
                                        <div className='col-md-12 mb-1' key={option}>
                                            <input
                                                type='checkbox'
                                                className='btn-check'
                                                id={`btn-checked-${option}`}
                                                onChange={() => handleCheckboxChange(option)}
                                                checked={currentAnswers.includes(option)}
                                            />
                                            <label 
                                            className={`btn btn-outline w-100 d-flex align-items-center ${currentAnswers.includes(option) ? 'checked-label' : ''}`}
                                            htmlFor={`btn-checked-${option}`}>
                                                <input
                                                    type='checkbox'
                                                    className='form-check-input me-2 m-r-10'
                                                    id={`btn-checked-inner-${option}`}
                                                    onChange={() => handleCheckboxChange(option)}
                                                    checked={currentAnswers.includes(option)}
                                                />
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {currentQuestion === 5 && (
                            <div className='mb-3 pt-3'>
                                <div className='row'>
                                   {['Northland', 'Auckland', 'Waikato', 'Taranaki', 'Gisborne', 'Nelson',
                                        'Taranaki', 'Otago', 'Wellington', 'Tasman', 'Bay of Plenty', 'Hawke’s Bay', 'West Coast'
                                        , 'Canterbury', '  Marlborough', 'Southland', 'Chatham Islands']
                                        .map(option => (
                                        <div className='col-md-3 mb-1' key={option}>
                                            <input
                                                type='checkbox'
                                                className='btn-check'
                                                id={`btn-checked-${option}`}
                                                onChange={() => handleCheckboxChange(option)}
                                                checked={currentAnswers.includes(option)}
                                            />
                                            <label
                                            className={`btn btn-outline w-100 d-flex align-items-center ${currentAnswers.includes(option) ? 'checked-label' : ''}`}
                                            htmlFor={`btn-checked-${option}`}>
                                                <input
                                                    type='checkbox'
                                                    className='form-check-input me-2 m-r-10'
                                                    id={`btn-checked-inner-${option}`}
                                                    onChange={() => handleCheckboxChange(option)}
                                                    checked={currentAnswers.includes(option)}
                                                />
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div class='d-flex justify-content-between mb-3 wid-100 '>
                            <div>
                                {currentQuestion===1 ?
                                // <button
                                //     type='button'
                                //     className='btn btn-outline-secondary'
                                //     onClick={handleBack}
                                // >
                                //     <i className="bi bi-chevron-left" style={{ marginRight: '4px' }}></i>
                                //     Back
                                // </button>
                                <Link to="/sectionB?question=12" className="btn btn-outline-secondary">
                                    <i class="bi bi-chevron-left" style={{marginLeft:'4px'}}></i>
                                    Back 
                                </Link>
                                :
                                <button
                                    type='button'
                                    className='btn btn-outline-secondary'
                                    onClick={handleBack}
                                >
                                    <i className="bi bi-chevron-left" style={{ marginRight: '4px' }}></i>
                                    Back
                                </button>
                                }
                                {/* <button
                                    type='button'
                                    className='btn btn-outline-secondary'
                                    onClick={handleBack}
                                >
                                    <i className="bi bi-chevron-left" style={{ marginRight: '4px' }}></i>
                                    Back
                                </button> */}
                            </div>
                            {currentQuestion===5 ?
                                <button
                                    type='button'
                                    className='btn btn-outline-primary'
                                    onClick={handleSubmit}
                                >
                                    Submit
                                    {/* <SendIcon style={{marginLeft:'4px', fontSize:'12px'}}/> */}
                                <i class="bi bi-send" style={{marginLeft:'4px'}}></i>
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
        </div>
    );
}

export default SectionC;
