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





    // REFERENCE CHATROOM DOCUMENT
    let docRef = firebase.firestore()
        .collection("chatrooms")
        .doc("chatroom3");
    // REFERENCE CHATROOM MESSAGES
    let messagesRef = docRef
        .collection("messages");

    const $messageField = $('#submitbutton');
    const $nameField = $('#name-field');
    const $qr = $('#qr2');
    const $qr3 = $('#qr3');
    const $qr4 = $('#qr4');
    const $qr5 = $('#qr5');


    $messageField.click(function (e) {

        if (parseInt($qr3.val()) == 1) {
            $('.spinner').css('display','block');
            $messageField.html('');
            //FIELD VALUES
            let senderName = $nameField.val();
            let score = parseInt($qr.val());
            let right_question=$qr4.val();
            let error_question=$qr5.val();
            //SAVE DATA TO FIREBASE
            messagesRef.add({
                "senderName": senderName,
                "score": score,
                "timeStamp": Date.now()
            });

            // EMPTY INPUT FIELD
            // $messageField.html(`<div class="spinner" id="spinner"></div>`);
            $messageField.val('');
            docRef.get().then(function(doc){
                $('.spinner').html('');
                alert("您一共答對了" + score + "題\n"+"正確的題目有:"+right_question+"\n"+"錯誤的題目有:"+error_question);
                
                return window.location.href = './quiz.html#rank';
                
            });
        }
        else { return false }
    });


});

function main() {
    var questionArray = new Array("q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8");
    var resultArray = new Array();
    var rightArray = new Array();

    //aryAns[]是從後端返回的陣列,當點選交卷的時候,向後端請求正確答案的陣列,賦值給aryAns[]即可;
    var aryAns = new Array(2, 4, 2, 3, 1, 1, 3, 1);   //建立儲存正確答案的陣列
    for (var i = 0; i < questionArray.length; i++) {
        if (Name(questionArray[i]) != 8) {
            resultArray[i] = Name(questionArray[i]);
            document.getElementById("qr3").value = 1;
        } else {
            alert("第" + (i + 1) + "題,您未作答!!");
            document.getElementById("qr3").value = 0;
            return false;
        }
    }
    var right_number = 0;//計算答對的題數；
    for (var i = 0; i < questionArray.length; i++) {
        if (aryAns[i] == resultArray[i]) {
            right_number++;
            rightArray[i] = 1;
        } else {
            rightArray[i] = 0;
        }
    }
    var right_question = " ";
    var error_question = " ";
    for (var i = 0; i < rightArray.length; i++) {
        if (rightArray[i] == 1) {
            right_question += i + 1 + ",";
        } else {
            error_question += i + 1 + ",";
        }
    }
    // var time=document.getElementById("mytime").innerHTML;
    // document.getElementById("right_number").innerText = right_number;
    document.getElementById("qr2").value = right_number;
    // document.getElementById("time").innerText = time;
    if (right_question != " ") {
        // document.getElementById("right_question").innerText = right_question;
        document.getElementById("qr4").value = right_question;
    }
    if (error_question != " ") {
        // document.getElementById("error_question").innerText = error_question;
        //
        document.getElementById("qr5").value = error_question;

    }
};

function Name(name) {
    var temp = document.getElementsByName(name);
    var intHot = 8;
    for (var i = 0; i < temp.length; i++) {
        if (temp[i].checked)
            intHot = temp[i].value;
    }
    if (intHot == 8) {
        return 8;
    }
    return intHot;
}
