var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const userRoutes = require("./auth/index")
const quizRoutes = require("./quiz/index")
const cors = require("cors");
const session =require("express-session")
var MySQLStore = require('express-mysql-session')(session);
var app = express();

// view engine setup
var options = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'quiz',
  schema: {
		tableName: 'sessions',
		columnNames: {
			session_id: 'session_id',
			expires: 'expires',
			data: 'data'
		}
	}
};

var sessionStore = new MySQLStore(options);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials:true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
  
}));
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  maxAge: Date.now() + (30 * 86400 * 1000),
  saveUninitialized: true,
  cookie: { secure: false },
  store: sessionStore,
}))



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(userRoutes);
app.use(quizRoutes);
const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
