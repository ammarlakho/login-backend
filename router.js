const express = require('express');
const router = express.Router();
// const services = require('../services/render');
const controller = require('./controller');
// const teacherController = require('../controller/teacherController');
// const courseController = require('../controller/courseController');

// // Main Pages
// route.get('/', services.homeRoutes);//Home route is student page
router.get('/', (req, res) => {
    res.send("Home Page")
})

router.get('/login', (req, res) => {
    res.send("Login Page")
})

router.get('/register', (req, res) => {
    res.send("Register Page")
})

router.get('/logged-in', (req, res) => {
    res.send("Congratulations for logging in")
})

router.get('/registered', (req, res) => {
    res.send("Congratulations for registering")
})

router.post('/api/users/register', controller.register);
router.post('/api/users/login', controller.login);
router.delete('/api/users/deleteAll', controller.deleteAll);
router.get('/api/users/findAll', controller.findAll);


// // Student APIs
// route.post('/api/students', studentController.create);
// route.get('/api/students', studentController.find);
// route.put('/api/students/:id', studentController.update);
// route.delete('/api/students/:id', studentController.delete);

// // Teacher APIs
// route.post('/api/teachers', teacherController.create);
// route.get('/api/teachers', teacherController.find);
// route.put('/api/teachers/:id', teacherController.update);
// route.delete('/api/teachers/:id', teacherController.delete);

// // Course APIs 
// route.post('/api/courses/:tid', courseController.create);
// route.get('/api/courses', courseController.find);
// route.put('/api/courses/:id', courseController.update);
// route.delete('/api/courses/:id', courseController.delete);

// route.get('/api/courses/:id', courseController.getStudentsOfCourse);

// // Adding/Removing Students from a Course
// route.put('/api/courses/:cid/:sid', courseController.addStudentToCourse);
// route.delete('/api/courses/:cid/:sid', courseController.delStudentFromCourse);

module.exports = router;

// // 5fe20a4cae5640271c773407