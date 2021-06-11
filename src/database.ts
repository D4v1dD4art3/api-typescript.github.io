import mongoose, { ConnectOptions } from 'mongoose';
import config from './config/config';

const dbOptions: ConnectOptions = {
  useFindAndModify: false,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  user: config.DB.USER,
  pass: config.DB.PASSWORD,
};

mongoose.connect(config.DB.URI, dbOptions);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('mondoDb connection established');
});

connection.on('error', (error) => {
  console.log(`Mongodb connection error: ${error}`);
  process.exit(0);
});
