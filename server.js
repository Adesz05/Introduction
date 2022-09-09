const express = require('express');
const app = express();
const path = require('path');
const port=3000;


app.use('/css', express.static(path.join(__dirname+'/css')));
app.use('/img', express.static(path.join(__dirname+'/img')));
app.use('/js', express.static(path.join(__dirname+'/js')));
app.use(express.urlencoded({extended: true}));
app.get('/',  (req, res)=> {
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/hobbies', (req,res)=>{
  res.status(200).sendFile(path.join(__dirname+'/hobbies.html'));
});
app.get('/contacts', (req,res)=>{
  res.status(200).sendFile(path.join(__dirname+'/contacts.html'));
});
app.get('/sources', (req,res)=>{
  res.status(200).sendFile(path.join(__dirname+'/sources.html'));
});

app.post('/message', (req,res)=>{
  console.log(req);
  res.send('Üzenetét megkaptuk!')
})

app.listen(port, console.log(`Server listening on port ${port}...`));