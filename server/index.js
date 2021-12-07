import express from 'express'


const app = express();
const port = 3000;
// const PUBLISHED_KEY = 'pk_test_51K3pKDSIlwByXOKSXNvIh3cL7XJINZrfMIbm8QAzEpTEdEAOyLzsNN9ZKwcwz8iqpWMpQ5BveSUMLp5W5PjD4BPt00gqMCgTA3';
// const SECRETE_KEY = 'sk_test_51K3pKDSIlwByXOKSNxGcSjI41cQztrj4nKqtuuaos0NNVHZzq5LOX5HHsm52G4tYvUrlW5O56gigDzCXxW8Ynbfr00Dyc4WHFG'

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))