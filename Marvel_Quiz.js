var vs=require('chalk');
var readLine=require('readline-sync')
console.log(vs.bold.red('The Marvel Quiz\n'))
var userName,userAns,score=0,topscore=0;
userName=readLine.question(vs.magenta('Enter your name : '))
console.log("welcome " + userName  );
var questions =[{
  question:'1. What is the name of Thors hammer?\na. Vanir\nb. Mjolnir\nc. Aesir\nd. Norn',
  answer:'b'
},{
  question:'2. In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?\na. That he wants to study The Hulk\nb. That he knows about S.H.I.E.L.D.\nc. That they are putting a team together\nd. That Thaddeus owes him money',
  answer:'c'
},{
  question:'3. What is Captain America shield made of?\na. Adamantium\nb. Vibranium\nc. Promethium\nd. Carbonadium ',
  answer:'b'
},{
  question:'4. Before becoming Vision, what is the name of Iron Man’s A.I. butler?\na. H.O.M.E.R.\nb. J.A.R.V.I.S.\nc. A.L.F.R.E.D.\nd. M.A.R.V.I.N. ',
  answer:'b'
},{
  question:'5. What is the real name of the Black Panther ?\na. T.Challa\nb. M.Baku\nc. N.Jadaka\nd. N.Jobu ',
  answer:'a'
},{
  question:'6. Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?\na. Thor\nb. Loki\nc. The Collector\nd. Tony Stark ',
  answer: 'b'
},{
  question:'7.  What does Thor want another of when he in the diner?\na. A slice of pie\nb. A pint of beer\nc. A stack of pancakes\nd. A cup of coffee ',
  answer:'d'
},{
  question:'8. Who does the Mad Titan sacrifice to acquire the Soul Stone?\na. Nebula\nb. Ebony Maw\nc. Cull Obsidian\nd. Gamora ',
  answer:'d'
},{
  question:'9. What is the name of the little boy Tony befriends while stranded in the Iron Man 3 ?\na. Harry\nb. Henry\nc. Harley\nd. Holden ',
  answer:'c'
},{
  question:'10. Who is killed by Loki in the Avengers?\na. Maria Hill\nb. Nick Fury\nc. Agent Coulson\nd. Doctor Erik Selvig ',
  answer:'c'
},{
  question:'11. Who is Black Panther’s sister?\na. Shuri\nb. Nakia\nc. Ramonda\nd. Okoye ',
  answer:'a'
},{
  question:'12. What landmark does Peter Parker rescue his classmates from in Spider-Man: Homecoming?\na. Washington Monument\nb. Statue of Liberty\nc. Mount Rushmore\nd. Golden Gate Bridge ',
  answer:'a'
},{
  question:'13. What type of doctor is Stephen Strange?\na. Neurosurgeon\nb. Cardiothoracic Surgeon\nc. Trauma Surgeon\nd. Plastic Surgeon ',
  answer:'a'
},{
  question:'14. What animal does Darren Cross unsuccessfully shrink in the Ant-Man?\na. Mouse\nb. Sheep\nc. Duck\nd. Hamster ',
  answer:'b'
},{
  question:'15. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?\na. 2004\nb. 2008\nc. 2012\nd. 2014 ',
  answer:'b'
}


];
for(i=0;i<=questions.length-1;i++){
console.log(vs.red(questions[i].question))
userAns=readLine.question(vs.green('answer : '))
if (questions[i].answer===userAns)
{
  console.log('right ! your answer is ' +userAns)
  score++;
}else{
  console.log('wrong answer \n answer is '+questions[i].answer) }
  console.log("current score: ", score);
  console.log("-------------")
}
if(score>topscore){
  topscore=score
  };
  console.log(vs.yellow(userName+' your score is '+score))
 console.log('top score is '+topscore)