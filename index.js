var validate = () => {
    var data = {
        "username": document.getElementById("inputUsername").value,
        "password": document.getElementById("inputPassword").value
    }
    fetch("https://math-basic-server.herokuapp.com/authenticate", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; Charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {
            if (json.Message == "Success") {
                window.location.replace("./quiz.html")
            } else {
                alert("Invalid Credentials")
                console.log(json)
            }
        })
        .catch(error => console.log(error))
}
