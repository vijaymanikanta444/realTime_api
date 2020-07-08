import express from 'express';
import request from 'request-promise';
import { parseString } from 'xml2js';
import authenticate from '../middlewares/authenticate';

const router = express.Router();
router.use(authenticate);

router.get('/search', (req, res) => {
  request
    .get(
      `https://www.goodreads.com/search/index.xml?key=2hQXKL4ciq2rLS3Ld3w&q=${req.query.q}`
    )
    .then((result) =>
      parseString(result, (err, goodreadsResult) =>
        res.json({
          books: goodreadsResult.GoodreadsResponse.search[0].results[0].work.map(
            (work) => ({
              goodreadsId: work.best_book[0].id[0]._,
              title: work.best_book[0].title[0],
              authors: work.best_book[0].author[0].name[0],
              covers: [work.best_book[0].image_url[0]],
            })
          ),
        })
      )
    );

  // res.json({
  //   books: [
  //     {
  //       goodreadsId: 1,
  //       title: '1984',
  //       authors: 'orwell',
  //       covers: [
  //         'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348990566l/5470.jpg',
  //         'https://i.pinimg.com/236x/0a/bf/93/0abf93ca1041823138216ca5fdc67f70--george-orwell-big-brothers.jpg',
  //       ],
  //       pages: 198,
  //     },
  //     {
  //       goodreadsId: 2,
  //       title: 'Three men in a boat',
  //       authors: 'vijay',
  //       covers: [
  //         'https://images-na.ssl-images-amazon.com/images/I/91tkXfaaBCL.jpg',
  //         'https://m.media-amazon.com/images/I/51HF1rglegL.jpg',
  //       ],
  //       pages: 123,
  //     },
  //   ],
  // });
});

export default router;
