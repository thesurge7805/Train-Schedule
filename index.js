 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBNb1uwWqCpGkL07A-QZAACnU6mNjfNTBQ",
    authDomain: "train-scheduler-ab274.firebaseapp.com",
    databaseURL: "https://train-scheduler-ab274.firebaseio.com",
    projectId: "train-scheduler-ab274",
    storageBucket: "train-scheduler-ab274.appspot.com",
    messagingSenderId: "476537912370"
  };
  firebase.initializeApp(config);


 $("#addTrainBtn").on("click", function () {

        // Grabs user input and assign to variables
        var trainNameInput = $("#trainNameInput").val().trim();
        var destinationInput = $("#destinationInput").val().trim();
        var firstInput = $("#firstInput").val().trim();
        var trainTimeInput = moment($("#trainTimeInput").val().trim(), "HH:mm").subtract(10, "years").format("X");;
        var frequencyInput = $("#frequencyInput").val().trim();}

        