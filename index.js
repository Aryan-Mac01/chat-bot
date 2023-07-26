function talk(){
var know = {
"Who are you?" : "The name is Bot, Chat bot",
"Hello":"Hello, Chatbot here ",
"Hi":"Hi there",
"hi":"Hi there",
"hello":"Hello, Chatbot here ",
"hey":"Hey bro",
"Hey":"Hey bro",
"How are you?" : "Good, what about you? :)",
"Thank you, I am fine" : "Good to hear",
"Would you help me find some music?" : "Yeah sure",
"Bye" : "Okay! Will meet soon..",
"suggest me some artist":"Which genre you wanna listen?",
"pop":"You can listen to Ariana Grande",
"rock":"AC/DC",
"jazz": "Louis Armstrong",
"classical":"Mozart",
"hip hop":"Kendrick lamar",
"google":"https://www.google.com",

};
var user = document.getElementById('userBox').value;

document.getElementById('chatLog').innerHTML = user + "<br>";
if (user in know) {
document.getElementById('chatLog').innerHTML = know[user] + "<br>";
}else{
document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
}
}
