
import { Router } from 'express';
import CourseController from '../controllers/course';

const router = Router();

router.get('/', CourseController.getAllCourses);
router.post('/', CourseController.addCourse);
router.get('/:id', CourseController.getCourse);
router.put('/:id', CourseController.updateCourse);
router.delete('/:id', CourseController.deleteCourse);

export default router;
