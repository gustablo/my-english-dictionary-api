import { Router } from 'express';

import { createWordController } from '@/useCases/createWord';
import { getWordsController } from '@/useCases/getWords';
import { adaptExpressRoute } from '@/main/adapters/express-router';
import { getWordByController } from '@/useCases/getWordBy';

export default (router: Router): void => {
  router.post('/words', adaptExpressRoute(createWordController));
  router.get('/words', adaptExpressRoute(getWordsController));
  router.get('/words/filter', adaptExpressRoute(getWordByController));
};
