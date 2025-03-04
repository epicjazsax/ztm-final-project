const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signIn = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  },
});

db.select('*').from('users').then(data => {
	console.log(data);
});

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => { res.send('success') })

app.post('/signin', signIn.handleSignIn(db, bcrypt))

app.post('/register', register.handleRegister(db, bcrypt))

app.get('/profile/:id', profile.handleProfile(db))

app.put('/image',image.handleImage(db))

app.listen(process.env.PORT || 3100, () => {
	console.log('app is running');
})
