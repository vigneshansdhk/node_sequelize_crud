
const user = require('../models/User');

const createUser = async (req, res) => {
    try {
        var data = req.body
        var inserted = await user.create(data);
        if (inserted) {
            return res.status(200).json({ success: true, data: "User Inserted Successfully" })
        } 
    } catch (error) {
        console.log(error.message);
    }
};

const getUserList = async (req,res) => {
    try {
        var getList = await user.findAll();

        if (getList) {
            return res.status(200).json({ success: true, data: getList  });
        }

    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req,res) =>{
    try {
        var data = req.body;
        var updatedUser =  await user.update(
            { name : data.name ,email: data.email},
            {
              where: {
                id: data.id,
              },
            },
          );
        if (updatedUser) {
            return res.status(200).json({ success: true, data: "User Updated Successfully" })
        }
        

    } catch (error) {
        console.log(error);
    }

}

const deleteUser = async (req, res) => {
    try {
        var data = req.body
        var deleteUser =  user.destroy({
            where: {
               id : data.id
            }
        })
        if (deleteUser) {
            return res.status(200).json({ success: true, data: "User Deleted Successfully" })
        } 
    } catch (error) {
        console.log(error);
    }
};







module.exports = {
    createUser,
    getUserList,
    updateUser,
    deleteUser
}