const userRoute=require('express').Router()
const {homeController,createController,updateController,notFound,createUser, readUser, readSingle,updateUser,deleteUser}=require('../controller/userController')

//to handle front end view
userRoute.get(`/`,homeController)
userRoute.get(`/create`,createController)
userRoute.get(`/update`,updateController)


//api route
//read all
userRoute.get(`/api/users`,readUser)

//read single
userRoute.get(`/api/users/:id`,readSingle)
//create
userRoute.post(`/api/newuser`,createUser)
//update
userRoute.patch(`/api/update/:id`,updateUser)
//delete
userRoute.delete(`/api/delete/:id`,deleteUser)
//default route
userRoute.all(`*`,notFound)

module.exports =userRoute