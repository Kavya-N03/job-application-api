require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const redoc = require('redoc-express');

const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const companyRoutes = require('./routes/companyRoutes');
const jobRouter = require('./routes/jobRoutes');
const applicationRouter = require('./routes/applicationRoutes');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();

connectDB();
app.use(cors());

app.use(express.json());

app.use('/uploads', express.static('uploads'));

app.use('/api', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/', jobRouter);
app.use('/api', applicationRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get(
  '/docs',
  redoc({
    title: 'Job Portal API Docs',
    specUrl: '/swagger.json',
  })
);

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use(errorHandler);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server started running at port ${port}...`);
});