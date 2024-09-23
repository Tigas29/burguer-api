import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import productController from './app/controllers/productController';
import CategoryController from './app/controllers/CategoryController';
import authMiddleware from './middlewares/auth';
const routers = new Router();

const upload = multer(multerConfig);

routers.post('/users', UserController.store);
routers.post('/session', SessionController.store);

routers.use(authMiddleware);

routers.post('/products', upload.single('file'), productController.store);
routers.get('/products', productController.index);

routers.post('/categories', CategoryController.store);
routers.get('/categories', CategoryController.index);

export default routers;
