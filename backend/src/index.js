import express from 'express';
import cors from 'cors';
import conversion from './conversion';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/', (request, response) => {
  const { codeJSON } = request.body;
  const codeCSV = conversion(codeJSON);

  if (codeCSV) {
    return response.json(codeCSV);
  }
  return response.json({ error: 'JSON is Invalid' });
});

app.listen(3333);
