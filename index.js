const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`Request received by pod: ${process.env.POD_NAME}, path: ${req.path}`);
  next();
});


app.get('/hello', (req, res) => {
  res.send(`hello from pod: ${process.env.POD_NAME}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
