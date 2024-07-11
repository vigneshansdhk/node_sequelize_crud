const usercontroller = require('./usercontroller');
const express = require('express');


module.exports = { 
    create : usercontroller.createUser,
    getList :usercontroller.getUserList,
    update :usercontroller.updateUser,
    delete :usercontroller.deleteUser
}