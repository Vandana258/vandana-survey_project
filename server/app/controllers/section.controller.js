const db = require('../models');
const Section = db.sections;

//Get all Processes API
exports.findAll = async (req, res) => {
    let sections = await Section.findAll();
    console.log("sections", sections)

    res.send({success: true, message: 'sections List', data: sections})
}

//Get One by Id
exports.findOne = async (req, res) => {
    const id = req.params.id;

    Section.findOne({
        where: {id : id} 
    }).then(section => {
        const response = {
            success: true,
            message: "Section Found!",
            data: section
        };
        res.send(response);
    }).catch(err => {
        console.log(err);
        return res.status(500).send({
            success: false, 
            message:
                err.message || "Some error occurred while founding section."});
    });
}

//Add API
exports.create = async(req, res) => {
    const {name} = req.body;
    if(!name){
        let response = {
            success: false,
            message: "Name cannot be empty!."
        }
        return res.send(response);
    }
    try {
        const existingSection = await Section.findOne({ where: { name: name } });
        if (existingSection) {
            return res.send({
                success: false,
                message: "Section with this name already exists!"
            });
        }
   
        await Section.create({
            name: name,
        })
        .then(section => {
            res.send({
                success: true,
                message: "Section added successfully"
            });
        })    
        .catch(err => {
            console.log(err);
            return res.status(500).send({
                success: false, 
                message:
                    err.message || "Error occurred"});
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message: err.message || "Some error occurred while adding Section."
        });
    }
};

//Update API
exports.update = async(req, res) => {
    const id = req.params.id;
    const { name } = req.body;

    // Check if name or quantity is missing
    if (!name) {
        let response = {
            success: false,
            message: "Name cannot be empty!."
        };
        return res.send(response);
    }

    try{
        const existingSection = await Section.findByPk(id);
        if (!existingSection) {
            return res.send({
                success: false,
                message: "Section not found."
            });
        }
        if (name !== existingSection.name) {
            const sectionWithSameName = await Section.findOne({ where: { name: name } });
            if (sectionWithSameName) {
                return res.send({
                    success: false,
                    message:  "Section with this name already exists!",
                });
            }
        }

        await Section.update({ name: name }, {
            where: { id: id }
        })
        .then(() => {
            res.send({
                success: true,
                message: "Section updated successfully!"
            });
        })    
        .catch(err => {
            console.log(err);
            return res.status(500).send({
                success: false, 
                message:
                    err.message || "Some error occurred while updating Section."});
        });
    }catch(error){
        console.error("Error updating Section:", error);
        return res.status(500).send({ success: false, message: "An error occurred while updating Section." });
    }
};

//Delete API
exports.remove = async (req, res) => {
    try{
        const id = req.params.id;
        await Section.destroy({ where: { id: id } });
        res.status(200).send({ success: true, message: "Section deleted successfully!" });
    } catch (error) {
        console.log("Error deleting Section:", error);
        res.status(500).send("Error while deleting Section");
    }
    
};