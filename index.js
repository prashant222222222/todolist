const express = require('express');
const app = express()
const todoRoute=require('./routes/todo')
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());
app.set('view engine', 'hbs');
app.use('/public',express.static(__dirname+'/public'));

app.use('/todo',todoRoute);

app.get('/', (req, res) => {
   res.send("hello");
  });









app.listen(3000, () => {
    console.log('started');
  })