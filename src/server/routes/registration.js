import { Router } from 'express';
import RegistrationController from '../controllers/registration';

const router = Router();

router.get('/', RegistrationController.getAllRegistrations);
router.post('/', RegistrationController.addRegistration);
router.get('/:id', RegistrationController.getRegistration);
router.put('/:id', RegistrationController.updateRegistration);
router.delete('/:id', RegistrationController.deleteRegistration);

export default router;
