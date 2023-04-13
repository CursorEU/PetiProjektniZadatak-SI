
const firebaseConfig = {
    apiKey: "AIzaSyDA06OaudmaIqcMCGW8AugFd-U5YoEQaxE",
    authDomain: "porjekat.firebaseapp.com",
    databaseURL: "https://porjekat-default-rtdb.firebaseio.com/",
    projectId: "porjekat",
    storageBucket: "porjekat.appspot.com",
    messagingSenderId: "320277346537",
    appId: "1:320277346537:web:63e0bff96de117b7b81878",
    measurementId: "G-8ZV75QCQH2"
};
    
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}