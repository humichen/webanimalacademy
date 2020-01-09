$(document).ready(function () {

    // INITIALIZE FIREBASE
    firebase.initializeApp({
        apiKey: "AIzaSyACyjldIzciVyasq2xHBl6yOijUO4k3PZA",
        authDomain: "animalacademy-b09d6.firebaseapp.com",
        databaseURL: "https://animalacademy-b09d6.firebaseio.com",
        projectId: "animalacademy-b09d6",
        storageBucket: "animalacademy-b09d6.appspot.com",
        messagingSenderId: "49546414161",
        appId: "1:49546414161:web:1cbb767b0de4801539d070"
    });

    let docRef = firebase.firestore()
      .collection("chatrooms")
      .doc("chatroom3");
    // REFERENCE CHATROOM MESSAGES
    let messagesRef = docRef
      .collection("messages");
  
    // QUERY MESSAGES BY TIMESTAMP ORDERING
    let queryRef = messagesRef
    .orderBy('score','desc').orderBy('timeStamp','desc').limit(10);
  
    // REGISTER DOM ELEMENTS
    const $messageList = $('#message-list');


    // A RENDER SCREEN CALLBACK THAT IS TRIGGERED FOR EACH CHAT MESSAGE
    queryRef.onSnapshot(function (querySnapshot) {
      $messageList.html('');
      //MONITOR CHAT MESSAGE AND RENDER SCREEN
      querySnapshot.forEach(function(doc) {
        let senderName = doc.data().senderName || "noname";
        let message = doc.data().score;
        let messageItem = `
        <li class="message-item">
          <div><strong class="chat-username">${senderName}</strong></div>
          <div>${message}/8</div>
        </li>
        `;
        $messageList.append(messageItem);
      });

    });
    
});