import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

// O método USE chama qualquer rota
routes.use('/appointments', appointmentsRouter);

export default routes;
