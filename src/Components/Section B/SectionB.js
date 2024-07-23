
import { useState,useEffect  } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';

function SectionB(){
    const totalQuestions = 12;
    const [answers, setAnswers] = useState({});
    const [textInput, setTextInput] = useState("");
    const [questionsAnswered, setQuestionsAnswered] = useState(new Array(totalQuestions).fill(false));

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialQuestion = parseInt(queryParams.get('question'), 10) || 1;
    console.log('initialQuestion',initialQuestion);

    const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);

    
    const handleBack = () => {
        setCurrentQuestion(prev => prev - 1);
    };

    const getQuestionText = (questionNumber) => {
        switch (questionNumber) {
            case 1:
                return  "When thinking about businesses that provide banking and financial services, which providers or brands first come to mind/are you aware of?";
            case 2:
                return "From the list below, please select all the banking and financial services providers or brands you have heard of before today, even if you listed them earlier: (Multi-response)";
            case 3:
                return "Which of the following banking or financial service providers would you consider using in the ture? (Multi-response)";
            case 4:
                return "Before today, which of the following banking or financial service providers have you looked into or researched? (Multi-response)";
            case 5:
                return "And which banking and financial service providers do you use currently? (Multi-response) Suggest change to- And which banking and financial service providers have you used or are currently using?"
            case 6:
                return "Which of the following is your preferred bank? (Single response";
            case 7:
                return "Which of the following do you associate with Rabobank?";
            case 8:
                return "Which of the following do you associate with ANZ?";
            case 9:
                return "Which of the following do you associate with BNZ?";
            case 10:
                return "Which of the following do you associate with ASB?";
            case 11:
                return "Which of the following do you associate with WESTPAC?";
            case 12:
                return "Which of the following banking brands have you read, seen or heard any advertising,messages or content for recently?";
            default:
                return "";
        }
    };

    // const handleCheckboxChange = (option) => {
    //     const questionText = getQuestionText(currentQuestion);
    //     setAnswers(prevAnswers => {
    //         const currentAnswers = prevAnswers[questionText] || [];
    //         const optionIndex = currentAnswers.indexOf(option);

    //         if (optionIndex === -1) {
    //             return { ...prevAnswers, [questionText]: [...currentAnswers, option] };
    //         } else {
    //             return {
    //                 ...prevAnswers,
    //                 [questionText]: currentAnswers.filter(item => item !== option),
    //             };
    //         }
    //     });
    // };

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

    // const handleNext = async () => {
    //     const section = "Section B";
    //     const questionText = getQuestionText(currentQuestion);

    //     // Save current question's answers
    //     try {
    //         const response = await axios.post("http://localhost:3005/saveSurveyAnswers", {
    //             section,
    //             question: questionText,
    //             answers: answers[questionText] || []
    //         });
    //         console.log('response', response);

    //         if (response.data.success) {
    //             // Move to the next question
    //             setCurrentQuestion(prev => prev + 1);
    //             // setTextInput(""); 
    //         } else {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Save Failed',
    //                 text: response.data.message,
    //                 customClass: {
    //                     popup: 'swal2-popup',
    //                     confirmButton: 'addEditCancelBtn addItemBtn',
    //                 }
    //             });
    //         }
    //     } catch (error) {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Save Failed',
    //             text: 'An error occurred while saving answers. Please try again later.',
    //             customClass: {
    //                 popup: 'swal2-popup',
    //                 confirmButton: 'addEditCancelBtn addItemBtn',
    //             }
    //         });
    //         console.error("Save Error:", error);
    //     }
    // };

    const handleNext = async () => {
        const section = "Section B";
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

    const handleTextChange = (event) => {
        const questionText = getQuestionText(currentQuestion);
        const text = event.target.value;
        console.log('text',text);
        setTextInput(text);
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionText]: [text]
        }));
    };

    const isMultiResponseQuestion = (questionNumber) => {
        const multiResponseQuestions = [2,3,4,5];
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
    
    const questionText = getQuestionText(currentQuestion);
    const currentAnswers = answers[questionText] || [];

    return(
        // <Layout>
            <div className="section-content">
                {/* User Heading */}
                <div className="page">
                    <div className="User-container">
                        <div className="row-div row-col-div">
                            <div className="col-12-div">
                                <p variant="h1" className="user-heading slide-in"> Section B : Brand Tracking (Rabobank)</p>
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
                                    <h2 className='ques-color'> 1. When thinking about businesses that provide banking and financial services, which providers
                                    or brands first come to mind/are you aware of?</h2>

                                )}
                                {currentQuestion === 2 && (
                                    <h2 className='ques-color'> 2. From the list below, please select all the banking and financial services providers or brands
                                    you have heard of before today, even if you listed them earlier: (Multi-response
                                    )</h2>
                                )}
                                {currentQuestion === 3 && (
                                    <h2 className='ques-color'> 3. Which of the following banking or financial service providers would you consider using in the
                                future? (Multi-response)</h2>
                                )}
                                {currentQuestion === 4 && (
                                    <h2 className='ques-color'> 4. Before today, which of the following banking or financial service providers have you looked
                                into or researched? (Multi-response)</h2>
                                )}
                                {currentQuestion === 5 && (
                                    <h2 className='ques-color'> 5. And which banking and financial service providers do you use currently? (Multi-response
                                    ) Suggest change to- And which banking and financial service providers have you
                                        used or are currently using?</h2>
                                )}
                                {currentQuestion === 6 && (
                                    <h2 className='ques-color'> 6. Which of the following is your preferred bank? (Single response)</h2>
                                )}
                                {currentQuestion === 7 && (
                                    <h2 className='ques-color'> 7. Which of the following do you associate with Rabobank?</h2>
                                )}
                                {currentQuestion === 8 && (
                                    <h2 className='ques-color'> 8. Which of the following do you associate with ANZ?</h2>
                                )}
                                {currentQuestion === 9 && (
                                    <h2 className='ques-color'> 9. Which of the following do you associate with BNZ?</h2>
                                )}
                                {currentQuestion === 10 && (
                                    <h2 className='ques-color'> 10. Which of the following do you associate with ASB?</h2>
                                )}
                                {currentQuestion === 11 && (
                                    <h2 className='ques-color'> 11. Which of the following do you associate with WESTPAC?</h2>
                                )}
                                {currentQuestion === 12 && (
                                    <h2 className='ques-color'> 12. Which of the following banking brands have you read, seen or heard any advertising,
                                messages or content for recently?</h2>
                                )}
                            </div>
                            {currentQuestion === 1 && (
                            <div class='mb-3 pt-3 pb-1'>
                                {/* <textarea class='textarea' name id cols={'30'} rows={'5'} placeholder='OPEN ENDED'></textarea> */}
                                <textarea
                                    className='textarea'
                                    cols='30'
                                    rows='5'
                                    placeholder='OPEN ENDED'
                                    value={textInput}
                                    onChange={handleTextChange}
                                />
                            </div>
                            )}
                            {currentQuestion === 2 && (
                            <div class='mb-3 pt-3 wid-100'>
                                <div className='row'>
                                    {
                                    ['Westpac', 'TSB', 'Rabobank', 'Kiwibank', 'BNZ', 'ANZ', 'ASB']
                                    .map(option => (
                                        <div className='col-md-4 mb-1' key={option}>
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
                            <div class='mb-3 pt-3 wid-100'>
                                <div className='row'>
                                    { ['Westpac', 'TSB', 'Rabobank', 'Kiwibank', 'BNZ', 'ANZ', 'ASB'].map(option => (
                                        <div className='col-md-4 mb-1' key={option}>
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
                            {currentQuestion === 4 && (
                            <div class='mb-3 pt-3 wid-100'>
                                <div className='row'>
                                    { ['Westpac', 'TSB', 'Rabobank', 'Kiwibank', 'BNZ', 'ANZ', 'ASB'].map(option => (
                                        <div className='col-md-4 mb-1' key={option}>
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
                            {currentQuestion === 5 && (
                            <div class='mb-3 pt-3 wid-100'>
                                <div className='row'>
                                    { ['Westpac', 'TSB', 'Rabobank', 'Kiwibank', 'BNZ', 'ANZ', 'ASB'].map(option => (
                                        <div className='col-md-4 mb-1' key={option}>
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
                            {currentQuestion === 6 && (
                            <div class='mb-3 pt-3 wid-100'>
                                <div className='row'>
                                    { ['Westpac', 'TSB', 'Rabobank', 'Kiwibank', 'BNZ', 'ANZ', 'ASB'].map(option => (
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
                            {currentQuestion === 7 && (
                            <div class='mb-3 pt-3'>
                                <div className='row'>
                                {['Are Agri Banking specialists', 'Invests back into NZ', 'Supports rural communities', 'Is a brand I trust', 'Is the best bank for Agri lending', 'Has staff based in rural communities', 'Is a leader in supporting sustainable farming','Committed to agribusiness for the long term'].map(option => (
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
                            {currentQuestion === 8 && (
                            <div class='mb-3 pt-3'>
                                <div className='row'>
                                {['Are Agri Banking specialists', 'Invests back into NZ', 'Supports rural communities', 'Is a brand I trust', 'Is the best bank for Agri lending', 'Has staff based in rural communities', 'Is a leader in supporting sustainable farming','Committed to agribusiness for the long term'].map(option => (
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
                            {currentQuestion === 9 && (
                            <div class='mb-3 pt-3'>
                                <div className='row'>
                                    {['Are Agri Banking specialists', 'Invests back into NZ', 'Supports rural communities', 'Is a brand I trust', 'Is the best bank for Agri lending', 'Has staff based in rural communities', 'Is a leader in supporting sustainable farming','Committed to agribusiness for the long term'].map(option => (
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
                            {currentQuestion === 10 && (
                            <div class='mb-3 pt-3'>
                                <div className='row'>
                                    {['Are Agri Banking specialists', 'Invests back into NZ', 'Supports rural communities', 'Is a brand I trust', 'Is the best bank for Agri lending', 'Has staff based in rural communities', 'Is a leader in supporting sustainable farming','Committed to agribusiness for the long term'].map(option => (
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
                            {currentQuestion === 11 && (
                            <div class='mb-3 pt-3'>
                                <div className='row'>
                                    {['Are Agri Banking specialists', 'Invests back into NZ', 'Supports rural communities', 'Is a brand I trust', 'Is the best bank for Agri lending', 'Has staff based in rural communities', 'Is a leader in supporting sustainable farming','Committed to agribusiness for the long term'].map(option => (
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
                            {currentQuestion === 12 && (
                            <div class='mb-3 pt-3'>
                                <div className='row'>
                                    {['ASB', 'ANZ', 'BNZ', 'Kiwibank', 'Rabobank', 'SBS', 'TSB','Westpac','Co-operative Bank','Heartland Bank'].map(option => (
                                        <div className='col-md-4 mb-1' key={option}>
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
                                {/* <div>
                                    <button
                                        type='button'
                                        className='btn btn-outline-secondary'
                                        onClick={handleBack}
                                    >
                                        <i className="bi bi-chevron-left" style={{ marginRight: '4px' }}></i>
                                        Back
                                    </button>
                                </div> */}
                                {currentQuestion===1 ?
                                // <button
                                //     type='button'
                                //     className='btn btn-outline-secondary'
                                //     onClick={handleBack}
                                // >
                                //     <i className="bi bi-chevron-left" style={{ marginRight: '4px' }}></i>
                                //     Back
                                // </button>
                                <Link to="/sectionA?question=4" className="btn  btn-outline-secondary">
                                <i className="bi bi-chevron-left" style={{ marginRight: '4px' }}></i>
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
                                {currentQuestion < totalQuestions && (
                                    <button onClick={handleNext} className="btn  btn-outline-primary">
                                        Next <i class="bi bi-chevron-right" style={{marginLeft:'4px'}}></i>
                                    </button>
                                )}
                                {currentQuestion === totalQuestions && (
                                    <Link to="/sectionC"  onClick={handleNext} className="btn  btn-outline-primary">
                                        Next <i class="bi bi-chevron-right" style={{marginLeft:'4px'}}></i>
                                    </Link>
                                )}
                                
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        // </Layout>
    );
}

export default SectionB;