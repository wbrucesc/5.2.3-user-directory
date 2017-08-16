const express = require('express');
const app = express();
const data = require('./data');

// console.log(data.users[0].address.country);


const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {bots: data});
});

app.get('/user/:name', (req, res) =>{
  let userName = req.params.name;
  let targetUser;
  data.users.forEach((user) =>{
    if(user.name == userName){
      targetUser = user;
    }
  });
  res.render('profile', {user: targetUser});
});

app.get('/request', (req, res) =>{
  res.render('request'); 
});

// app.get('/user/:job', (req, res) => {
//   let userJob = req.params.job;
//   let targetJob;
//     data.forEach((user) =>{
//       if(user.job == userJob){
//         targetJob = job;
//       }
//     });
//       if (targetJob === 'null'){
//         res.send("Currently seeking employment.");
//       }
//
// });







app.listen(3000, () => {
  console.log("Application is running on port 3000");
});
