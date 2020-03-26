const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.set('view engine', 'hbs');

// mock data
const storage = {
  kpis : [{
    id: 1,
    title:'Concurrent visitors', 
    data: 456
  }, {
    id: 2,
    title:'Office temperature', 
    data: {
      currentTemperature: 19,
      targetTemperature: 22
    }
  }, {
    id: 3,
    title:'Next plant watering', 
    data: {
      nextWaterDate: '2020-03-30'
    }
  }, {
    id: 4,
    title:'Outside weather', 
    data: {
      temperature: 18,
      weather: "Sunny"
    }
  }, {
    id: 5,
    title:'Drinks left', 
    data: {
      lastDrinksOrder: 300,
      drinksRemaining: 12
    }
  }, {
    id: 6,
    title:'Who is WFH today?', 
    data: [
      {
        id: 1,
        name: 'James',
        picture: 'https://pbs.twimg.com/profile_images/798877173985771520/DVWkhX8z_400x400.jpg',
        status: 'WFH'
      }, {
        id: 2,
        name: 'Geoff',
        picture: 'https://media-exp1.licdn.com/dms/image/C5603AQH2U_X__1y6Og/profile-displayphoto-shrink_800_800/0?e=1590624000&v=beta&t=U7kktkN1iPQLnJ75ZvbZn_tHPQ68bFvOqa13gGXRN1Q',
        status: 'Office'
      }, {
        id: 3,
        name: 'JT',
        picture: 'https://pbs.twimg.com/profile_images/1532668007/team_jt_01_400x400.jpg',
        status: 'WFH'
      }
    ]
  }
]}


// priority route
app.get('/', function(req, res){
  res.render('index');
});

app.listen(8080, function(){
  console.log('Listening on port 8080');
});