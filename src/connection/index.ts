// import { logger, errorLog } from '../shared/logger';
import { Server } from 'http';
import mongoose from 'mongoose';
import config from '../config';
import app from '../app';

let server: Server;

// sync error handler | if anything undefined...
process.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});

const dbConnection = async () => {
  try {
    const { port, dbURL } = config;

    await mongoose.connect(dbURL as string);
    console.log('MongoDB Connection ==> OK ✅');

    server = app.listen(port, () =>
      console.log(`Server run on port ==> ${port}`)
    );
  } catch (err) {
    console.log('Failed to connect', err);
  }

  // async error handler
  process.on('unhandledRejection', error => {
    // console.log(
    //   '🔴 unhandledRejection detected... Server going to close... 🔴 '
    // );

    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
};

dbConnection();

// console.log(x);

process.on('SIGTERM', error => {
  console.log(error);
  if (server) {
    server.close();
  }
});
