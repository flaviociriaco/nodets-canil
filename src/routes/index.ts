import { Router } from 'express';
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchControllers'

const router = Router();

router.get('/', PageController.home);
router.get('/', PageController.dogs);
router.get('/', PageController.cats);
router.get('/', PageController.fishes);

router.get('/search', SearchController.search);

export default router;
