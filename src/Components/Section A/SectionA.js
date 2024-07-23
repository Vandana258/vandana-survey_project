import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function SectionA() {
    const totalQuestions = 4;
    const [answers, setAnswers] = useState({});
    const [questionsAnswered, setQuestionsAnswered] = useState(new Array(totalQuestions).fill(false));

    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialQuestion = parseInt(queryParams.get('question'), 10) || 1;
    console.log('initialQuestion',initialQuestion);

    const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);

    const getQuestionText = (questionNumber) => {
        switch (questionNumber) {
            case 1:
                return "What type of farm do you own, live or work on? (MULTI RESPONSE)";
            case 2:
                return "What is the size of your property/farm in Hectares? If you own or manage more than one farm, please think about the total size of the farms combined.";
            case 3:
                return "And which of the following best describes your role on the property?";
            case 4:
                return "And when it comes to decisions around your farm operation, which of the following best describes your role in these decisions?";
            default:
                return "";
        }
    };

     const isMultiResponseQuestion = (questionNumber) => {
        // Define which questions allow multiple responses
        const multiResponseQuestions = [1];
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
            } else {
                // For single-response questions
                if (currentAnswers.includes(option)) {
                    return { ...prevAnswers, [questionText]: [] };
                } else {
                    return { ...prevAnswers, [questionText]: [option] };
                }
            }
        });
    };

    const handleNext = async () => {
        const section = "Section A";
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


    const questionText = getQuestionText(currentQuestion);
    const currentAnswers = answers[questionText] || [];

    const handleBack = () => {
        setCurrentQuestion(prev => prev - 1);
    };

    return (
        <div className="section-content">
            {/* User Heading */}
            <div className="page">
                <div className="User-container">
                    <div className="row-div row-col-div dis-flex">
                        <div className="col-12-div">
                            <p variant="h1" className="user-heading slide-in">Section A : Introduction and Screening</p>
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

            {/* User content */}
                <div className=" page-user">
                    <div className="row-div row-col-div-ques">
                        <div className="mb-3 text-left">
                            {currentQuestion === 1 && (
                                <h2 className='ques-color'>
                                    1. What type of farm do you own, live or work on? (MULTI RESPONSE)
                                </h2>
                            )}
                            {currentQuestion === 2 && (
                                <h2  className='ques-color'>
                                    2. What is the size of your property/farm in Hectares? If you own or manage more than one farm, please think about the total size of the farms combined.
                                </h2>
                            )}
                            {currentQuestion === 3 && (
                                <h2  className='ques-color'>
                                    3. And which of the following best describes your role on the property?
                                </h2>
                            )}
                            {currentQuestion === 4 && (
                                <h2 className='ques-color'>
                                    4. And when it comes to decisions around your farm operation, which of the following best describes your role in these decisions?
                                </h2>
                            )}
                        </div>
                        {currentQuestion === 1 && (
                            <div className='mb-3 pt-3'>
                                <div className='row'>
                                    {['Sheep and Beef', 'Dairy Farming', 'Cropping', 'Deer Farming', 'Forestry', 'Other (please specify)'].map(option => (
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
                                            htmlFor={`btn-checked-${option}`}
                                        >
                                            <input
                                            type='checkbox'
                                            className='form-check-input me-2 m-r-10'
                                            id={`btn-checked-inner-${option}`}
                                            checked={currentAnswers.includes(option)}
                                            onChange={() => handleCheckboxChange(option)}
                                            />
                                            {option}
                                        </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {currentQuestion === 2 && (
                            <div className='mb-3 pt-3 wid-100'>
                                <div className='row'>
                                    {['1 –20ha (Screen out)', '21 – 100ha', '101 – 250ha', '250ha +'].map(option => (
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
                                            htmlFor={`btn-checked-${option}`}
                                        >
                                            <input
                                            type='checkbox'
                                            className='form-check-input me-2 m-r-10'
                                            id={`btn-checked-inner-${option}`}
                                            checked={currentAnswers.includes(option)}
                                            onChange={() => handleCheckboxChange(option)}
                                            />
                                            {option}
                                        </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {currentQuestion === 3 && (
                            <div className='mb-3 pt-3'>
                                <div className='row'>
                                    {['Owner-operator', 'Manager', 'Leasee', 'Sharemilker / Contract Milker', 'Other (please specify)'].map(option => (
                                        <div className='col-md-6 mb-1' key={option}>
                                            <input
                                                type='checkbox'
                                                className='btn-check'
                                                id={`btn-checked-${option}`}
                                                onChange={() => handleCheckboxChange(option)}
                                            />
                                            <label className='btn btn-outline w-100 d-flex align-items-center' htmlFor={`btn-checked-${option}`}>
                                                <input
                                                    type='checkbox'
                                                    className='form-check-input me-2 m-r-10'
                                                    id={`btn-checked-inner-${option}`}
                                                    onChange={() => handleCheckboxChange(option)}
                                                />
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {currentQuestion === 4 && (
                            <div className='mb-3 pt-3'>
                                <div className='row'>
                                    {['I am solely responsible for decisions', 'I am jointly responsible for decisions', 'I am not involved in decision making Screen out'].map(option => (
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
                                            htmlFor={`btn-checked-${option}`}
                                        >
                                            <input
                                            type='checkbox'
                                            className='form-check-input me-2 m-r-10'
                                            id={`btn-checked-inner-${option}`}
                                            checked={currentAnswers.includes(option)}
                                            onChange={() => handleCheckboxChange(option)}
                                            />
                                            {option}
                                        </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className='d-flex justify-content-between mb-3 wid-100 '>
                            <div>
                                {currentQuestion === 1 ? '' : (
                                    <button
                                        type='button'
                                        className='btn btn-outline-secondary'
                                        onClick={handleBack}
                                        disabled={currentQuestion === 1}
                                    >
                                        <i className="bi bi-chevron-left" style={{marginRight:'4px'}}></i> 
                                        Back
                                    </button>
                                )}
                            </div>
                            {currentQuestion < totalQuestions && (
                                <button onClick={handleNext} className="btn btn-outline-primary">
                                    Next <i className="bi bi-chevron-right" style={{marginLeft:'4px'}}></i>
                                </button>
                            )}
                            {currentQuestion === totalQuestions && (
                                <Link to="/sectionB" onClick={handleNext} className="btn  btn-outline-primary">
                                    Next <i class="bi bi-chevron-right" style={{marginLeft:'4px'}}></i>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionA;





