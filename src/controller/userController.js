const router = require("express").Router();
const userService = require("../services/userService");



//  GET user by id
router.get("/user/api1/user_by_id/:id",( async (req,res) => {

    try {

        const result = await userService.getUsers( + req.params.id);
        res.status(200).json(result);

    } catch(error) {
        
        return res.status(400).json(error.message);
    }
}));

// POST new data
router.post("/user/api1/add_new_user",async (req,res) => {
    try {

        
        const result = await userService.insertUser(req.body);
        res.status(200).send("User has been succsessfully added !!!");

    } catch(error) {
        
        return res.status(400).json(error.message);
    }
});

// UPDATE user-fields
router.put("/user/api1/update_user_fields", async (req, res) => {

    try {

        const result = await userService.updateUserFields(req.query.id,req.body);
        res.status(200).send(`User with ${req.query.id} Id succsessfully updated !!!`);

    } catch (error) {

        return res.status(400).json(error.message);
    }
});

// UPDATE user
router.put("/user/api1/update_user_full_name", async (req,res) => {
    
    try {
        
        const result = await userService.updateUserFullName(req.body);
        res.status(200).send(`User with ${req.body.full_name} succsessfully updated !!!`);

    } catch(error) {
        
        return res.status(400).json(error.message);
    }
});

// DELETE user by id
router.delete("/user/ap1/delete_user", async (req,res) => {

    try {
        
        const result = await userService.deleteUser(req.query.id);
        res.status(200).send(`User with ${req.query.id} succsessfully deleted !!!`);

    } catch(error) {
        
        return res.status(400).json(error.message);
    }
});

module.exports = router;
