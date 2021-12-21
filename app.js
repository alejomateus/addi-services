const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const routes = require('./routes/index.js');
app.use(cors());


app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(routes);

app.listen(3000, () => console.log('server on port 3000'));
