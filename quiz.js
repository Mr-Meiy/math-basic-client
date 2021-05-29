var flag = true
var i = 0,
    qnarr = [],
    qn, ans, score = 0,
    question = document.getElementById("question")
    //storing returned api array to a local array
var addQuestion = (arr) => {
    qnArr = arr
    qnArr.push(["You Got Cleared"])
    console.log(qnArr)
    nextQuestion(i)
}
var nextQuestion = (i) => {
    qn = qnArr[i][0]
    question.innerHTML = qn
    ans = qnArr[i][1]
}
var validateAns = () => {
    var res = document.getElementById("result")
    if (ans == res.value) {
        //alert("Correct")
        res.value = ""
        i += 1
        nextQuestion(i)
    } else {
        alert("Wrong")
    }
}
fetch("https://math-basic-server.herokuapp.com/requestProblems", {
        method: "get"
    })
    .then(response => response.json())
    .then(json => {
        addQuestion(json.Addition)
    })
    .catch(err => console.log(err))
