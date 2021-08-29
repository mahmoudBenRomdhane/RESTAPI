const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors');
const app = express();




app.use(cors());
app.use('/images',express.static(path.join('images')))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
//app.use(multer({storage : fileStroage, fileFilter : fileFilter}).single('image'))
const responsableRouter = require('./Router/Responsable');
const ResponsableController = require('./Controllers/Responsable');
const AdminRouter = require('./Router/superAdmin')
const quizRouter = require('./Router/quiz')
const courseRouter = require('./Router/course')
const chapterRouter = require('./Router/chapter')
const apprenantRouter = require('./Router/apprenant')
const questionForumRouter = require('./Router/questionForum')
const commentaireRouter = require('./Router/commentaire')
const scoreQuizRouter = require('./Router/scoreQuiz')
const demandeRouter = require('./Router/demande')
const CvRouter = require('./Router/CV')
const AbonnementCoursRouter = require('./Router/AbonnementCours')
const NotificationRouter = require('./Router/Notification')

app.use(NotificationRouter)
app.use(AbonnementCoursRouter)
app.use(CvRouter)
app.use(demandeRouter)
app.use(scoreQuizRouter)
app.use(commentaireRouter)
app.use(questionForumRouter)
app.use(apprenantRouter)
app.use(courseRouter)
app.use(chapterRouter)
app.use(quizRouter)
app.use(AdminRouter);
app.use(responsableRouter);

mongoose.set('useUnifiedTopology', true);
mongoose
.connect(
    'mongodb+srv://Mahmoud:Pino19055@cluster0.7l8yo.mongodb.net/pfe?authSource=admin&replicaSet=atlas-ylqs9x-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',{ useNewUrlParser: true }
)
.then(result=>{
  console.log('MongoDB Connected...')})
.catch(err=>{
  // console.log(err);
})
var server = require('http').createServer(app);
const io = require('./socket').init(server);
var allClients = [];

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on("connected",(data)=>{
    console.log(data)
  })
  socket.on('disconnect', () => {
    console.log('user disconnected');
 
  });

});

const PORT = process.env.PORT || 3000;
server.listen(PORT);