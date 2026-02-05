import express from 'express';
import { env } from './config/dotenv.js';
import db from './config/db.js';
import bodyParser from 'body-parser';
import bookSchema from './models/user.model.js';


const port = env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
  bookSchema.find()
    .then((books) => {
      res.render('index', { books });
    })
    .catch((err) => {
      console.log(err.message);
      res.render('index', { books: [] });
    });
});


app.get('/add-book', (req, res) => {
  return res.render('pages/add-book');
})
app.post('/add-book', (req, res) => {
  bookSchema.create(req.body)
    .then(() => {
      console.log(req.body);

      res.redirect('/add-book');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/add-book');
    })
})

app.get('/view-data', (req, res) => {
  bookSchema.find()

    .then((books) => {
      res.render('pages/view-data', { books });
    })
    .catch((err) => {
      console.log(err.message);

      return res.render('pages/view-data');
    })
})

app.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  bookSchema.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/view-data');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/view-data')
    })
})

app.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  bookSchema.findById(id)
    .then((book) => {
      res.render('pages/editData', { book });
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/view-data')
    })
})

app.post('/edit/:id', (req, res) => {
  const id = req.params.id;

  bookSchema.findByIdAndUpdate(id, req.body)
    .then(() => {
      res.redirect('/view-data');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/view-data');
    });
});

app.listen(port, () => {
  console.log('Server Started');
  console.log(`http://localhost:${port}`);
});