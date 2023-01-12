import { Router } from 'express';
export const route = Router();

route.get('/projects');
route.post('/projects');
//actualizar.
route.put('/projects');
route.delete('/projects');
route.get('/projectos/:id');
