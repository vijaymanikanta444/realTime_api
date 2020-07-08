import express from 'express';

const router = express.Router();

router.get('/search', (req, res) => {
  res.json({
    books: [
      {
        goodreadsId: 1,
        title: '1984',
        authors: 'orwell',
        covers: [
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348990566l/5470.jpg',
          'https://i.pinimg.com/236x/0a/bf/93/0abf93ca1041823138216ca5fdc67f70--george-orwell-big-brothers.jpg',
        ],
        pages: 198,
      },
      {
        goodreadsId: 2,
        title: 'Three men in a boat',
        authors: 'vijay',
        covers: [
          'https://images.gr-assets.com/books/139264578378/4921.jpg',
          'https://images.gr-assets.com/books/1536846565378/2476823.jpg',
        ],
        pages: 123,
      },
    ],
  });
});

export default router;
