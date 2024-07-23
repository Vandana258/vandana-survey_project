const db = require('../models');
const SurveyAnswer = db.surveyAnswer;

// exports.saveSurveyAnswers = async (req, res) => {
//     const { section, question, answers } = req.body;

//     if (!section || !question || !answers) {
//         return res.status(400).send({
//             success: false,
//             message: "Please provide section, question, and answers."
//         });
//     }

//     try {
//         const newAnswer = await SurveyAnswer.create({
//             section,
//             question,
//             answers,
//         });

//         res.send({
//             success: true,
//             message: "Survey answers saved successfully!",
//             data: newAnswer,
//         });
//     } catch (error) {
//         console.error("Error saving survey answers:", error);
//         res.status(500).send({
//             success: false,
//             message: "An error occurred while saving survey answers.",
//         });
//     }
// };

// exports.saveSurveyAnswers = async (req, res) => {
//     const { section, question, answers } = req.body;

//     if (!section || !question || !answers) {
//         return res.status(400).send({
//             success: false,
//             message: "Please provide section, question, and answers."
//         });
//     }

//     try {
//         const existingAnswer = await SurveyAnswer.findOne({
//             where: { section, question }
//         });

//         if (existingAnswer) {
//             existingAnswer.answers = answers;
//             await existingAnswer.save();
//         } else {
//             await SurveyAnswer.create({
//                 section,
//                 question,
//                 answers,
//             });
//         }

//         res.send({
//             success: true,
//             message: "Survey answers saved successfully!",
//         });
//     } catch (error) {
//         console.error("Error saving survey answers:", error);
//         res.status(500).send({
//             success: false,
//             message: "An error occurred while saving survey answers.",
//         });
//     }
// };

exports.saveSurveyAnswers = async (req, res) => {
    const { section, question, answers } = req.body;

    if (!section || !question || !answers || answers.length === 0) {
        return res.status(400).send({
            success: false,
            message: "Please provide section, question, and answers, and ensure answers are not empty."
        });
    }

    try {
        const existingAnswer = await SurveyAnswer.findOne({
            where: {
                section,
                question
            }
        });

        if (existingAnswer) {
            // Update existing answer
            existingAnswer.answers = answers;
            await existingAnswer.save();
        } else {
            // Create new answer
            await SurveyAnswer.create({
                section,
                question,
                answers,
            });
        }

        res.send({
            success: true,
            message: "Survey answers saved successfully!"
        });
    } catch (error) {
        console.error("Error saving survey answers:", error);
        res.status(500).send({
            success: false,
            message: "An error occurred while saving survey answers.",
        });
    }
};

                

