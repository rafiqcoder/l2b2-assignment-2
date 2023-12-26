
import mongoose from 'mongoose';

import app from './app';
import config from './app/config';

async function server() {
  try {
    await mongoose.connect(config.database_url as string); 

    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

server().catch((err) => console.log(err));