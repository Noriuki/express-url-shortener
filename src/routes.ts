
import { UrlShortenerController } from './controllers/UrlShortenerController';
import {Router} from 'express'

const router = Router();

router.get('/:hash', UrlShortenerController.redirect)

router.post('/shorten', UrlShortenerController.shorten)

router.get('/', (req, res) => {
  res.send('url shortener')
})
export default router