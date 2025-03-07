// const bcrypt = require('bcrypt-nodejs');
import bcrypt from 'bcryptjs';
import express from 'express';
import cors from 'cors';
import knex from 'knex';

import handleRegister from './controllers/register.js';
import handleSignIn from './controllers/signin.js';
import handleProfile from './controllers/profile.js';
import handleImage from './controllers/image.js';

const db = knex({
  client: 'pg',
  connection: {
    connectionString: 'postgresql://ztm_smart_brain_user:qvOsaO26Iqc0rJGTUAZo7pwbod96dTu5@dpg-cv33ecbqf0us7383kaig-a/ztm_smart_brain',
    ssl: { rejectUnauthorized: false },
    host: 'dpg-cv33ecbqf0us7383kaig-a',
    port: 5432
    // user: process.env.DATABASE_USER,
    // password: process.env.DATABASE_PW,
    // database: process.env.DATABASE_DB
  },
});

db.select('*').from('users').then(data => {
	console.log(data);
});

const app = express();

app.use(express.json());
app.use(cors({
  credentials: true
}));

app.get('/', (req, res) => { res.send('success') })

app.post('/signin', handleSignIn(db, bcrypt))

app.post('/register', handleRegister(db, bcrypt))

app.get('/profile/:id', handleProfile(db))

app.put('/image', handleImage(db))

app.listen(process.env.PORT || 5432, () => {
	console.log('app is running');
})
