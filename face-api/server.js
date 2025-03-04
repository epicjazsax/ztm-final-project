const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

import handleRegister from './controllers/register.js';
import handleSignIn from './controllers/signin.js';
import handleProfile from './controllers/profile.js';
import handleImage from './controllers/image.js';

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    host: process.env.DATABASE_HOST,
    port: 5432,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PW,
    database: process.env.DATABASE_DB
  },
});

db.select('*').from('users').then(data => {
	console.log(data);
});

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => { res.send('success') })

app.post('/signin', handleSignIn(db, bcrypt))

app.post('/register', handleRegister(db, bcrypt))

app.get('/profile/:id', handleProfile(db))

app.put('/image', handleImage(db))

app.listen(process.env.PORT || 3100, () => {
	console.log('app is running');
})
