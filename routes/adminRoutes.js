const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/jwtVerify');
const adminController = require('../controllers/adminController');

// Master Routes
router.get('/master/:id', verifyToken(["master"]), adminController.getMaster);
router.get('/master', verifyToken(["master"]), adminController.getAdmins);

// Principal Routes
router.get('/principal/:id', verifyToken(["principal"]), adminController.getPrincipal);
router.get('/principal', verifyToken(["master"]), adminController.getPrincipals);

// Teacher Routes
router.get('/teacher/:id', verifyToken(["teacher"]), adminController.getTeacher);
router.get('/teacher', verifyToken(["master", "principal"]), adminController.getTeachers);

// Student Routes
router.get('/student/:id', verifyToken(["student"]), adminController.getStudent);
router.get('/student', verifyToken(["master", "principal", "teacher"]), adminController.getStudents);

module.exports = router;
