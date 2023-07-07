import express from 'express';
import { 
    createZonificacion, createZonificacionVB, deleteZonificacion, filterZonificacionByIdCreator, 
    getAllZonificacion,getAllZonificacionVB, getZonificacion,getZonificacionVB, updateZonificacion 
} from '../controllers/zonificacionController.js';


const router = express.Router();

router.get('/', getAllZonificacion);
router.get('/vb', getAllZonificacionVB);
router.get('/getZonificacionByIdCreator/:idCreador', filterZonificacionByIdCreator);
router.post('/new', createZonificacion);
router.post('/vb/new', createZonificacionVB);
router.put('/:id', updateZonificacion);
router.delete('/:id', deleteZonificacion);
router.get('/:id', getZonificacion);
router.get('/vb/:id', getZonificacionVB);



export default router;