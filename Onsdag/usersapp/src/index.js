import 'bootstrap/dist/css/bootstrap.css'
//import jokes from "./jokes";

const tb = document.getElementById("tb");
const idP = document.getElementById("pID");
const url = "http://localhost:3333/api/users";

fetchAll();


function fetchAll() {
    fetch(url)
        .then(res => fetchWithErrorCheck(res))
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        })
        .then((data) => {
            const trs = data.map((user) => {
                return `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.age}</td><td>${user.gender}</td><td>${user.email}</td></tr>`
            });
            const trStr = trs.join("");
            tb.innerHTML = trStr;
        });
}
var btn1 = document.getElementById("idBTN").addEventListener("click", getByID);

var btn2 = document.getElementById("addBTN").addEventListener("click", addUser);

var btn3 = document.getElementById("editBTN").addEventListener("click", editUser);

var btn4 = document.getElementById("delBTN").addEventListener("click", delUser);


function delUser(e) {
    e.preventDefault();
    let delId = document.getElementById("delID").value;
    let delURL = "http://localhost:3333/api/users/" + delId;
    let options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(delURL, options)
        .then(res => fetchWithErrorCheck(res))
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        });
    fetchAll();
}

function addUser(e) {
    e.preventDefault();
    let name1 = document.getElementById("inputName").value;
    let age1 = document.getElementById("inputAge").value;
    let gender1 = document.getElementById("inputGender").value;
    let email1 = document.getElementById("inputEmail").value;
    let options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name1,
            age: age1,
            gender: gender1,
            email: email1
        })
    }
    fetch(url, options)
        .then(res => fetchWithErrorCheck(res))
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        });
    fetchAll();
}

function editUser(e) {
    e.preventDefault();
    let name1 = document.getElementById("editName").value;
    let age1 = document.getElementById("editAge").value;
    let gender1 = document.getElementById("editGender").value;
    let email1 = document.getElementById("editEmail").value;
    let ID1 = document.getElementById("editID").value;
    const editUrl = "http://localhost:3333/api/users/" + ID1;
    let options = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name1,
            age: age1,
            gender: gender1,
            email: email1
        })
    }
    fetch(editUrl, options)
        .then(res => fetchWithErrorCheck(res))
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        });
    fetchAll();
}


function getByID(e) {
    e.preventDefault();
    let id = document.getElementById("idInput").value;
    const idUrl = "http://localhost:3333/api/users/" + id;
    fetch(idUrl)
        .then(res => fetchWithErrorCheck(res))
        .then((data) => {
            idP.innerHTML = `ID: ${data.id}, Name: ${data.name}, Age: ${data.age}, Gender: ${data.gender}, Email: ${data.email}`;
        })
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        });
}

function fetchWithErrorCheck(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}