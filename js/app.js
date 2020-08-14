var score = 0;

function answer(){

    // Checking Question 1

    var right_answer_1 = document.getElementById('q1a1');
    
    if (right_answer_1.checked == true) {
        alert("Question 1's Answer is Right")
        score++
    }
    else{
        alert("Question 1's Answer is Wrong")
    }
    
    // Checking Question 2

    var right_answer_2 = document.getElementById('q2a3');
    
    if (right_answer_2.checked == true) {
        alert("Question 2's Answer is Right")
        score++
    }
    else{
        alert("Question 2's Answer is Wrong")
    }
        
    // Checking Question 3

    var right_answer_3 = document.getElementById('q3a2');
    
    if (right_answer_3.checked == true) {
        alert("Question 3's Answer is Right")
        score++
    }
    else{
        alert("Question 3's Answer is Wrong")
    }

        
    // Checking Question 4

    var right_answer_4 = document.getElementById('q4a4');
    
    if (right_answer_4.checked == true) {
        alert("Question 4's Answer is Right")
        score++
    }
    else{
        alert("Question 4's Answer is Wrong")
    }

    alert("Your Test Score is " +score)


}