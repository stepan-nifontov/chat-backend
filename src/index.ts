import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  res.send('TEST!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});