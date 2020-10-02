import 'bootstrap/dist/css/bootstrap.css'

const tb = document.getElementById("tb");
const url = "https://mparking.dk/RestUdviddet/api/person/";

fetchAll();

var btn = document.getElementById("reload").addEventListener("click", reloadBTN);
var darkBTN = document.getElementById("dark").addEventListener("click", darkMode);
var add = document.getElementById("addP").addEventListener("click", addPerson);
var del = document.getElementById("delBTN").addEventListener("click", delPerson);
var edit = document.getElementById("editBTN").addEventListener("click", editPerson);

function delPerson(e) {
    e.preventDefault();
    let delId = document.getElementById("delID").value;
    let delURL = url + delId;
    let options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(delURL, options);
}

function addPerson(e) {
    e.preventDefault();
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let phone1 = document.getElementById("phone").value;
    let street1 = document.getElementById("street").value;
    let zip1 = document.getElementById("zip").value;
    let city1 = document.getElementById("city").value;
    let options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: fName,
            lastName: lName,
            phone: phone1,
            street: street1,
            zip: zip1,
            city: city1
        })
    }
    fetch(url, options);
}

function editPerson(e) {
    e.preventDefault();
    let editId = document.getElementById("editID").value;
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let phone1 = document.getElementById("phone").value;
    let street1 = document.getElementById("street").value;
    let zip1 = document.getElementById("zip").value;
    let city1 = document.getElementById("city").value;
    const editUrl = url + editId;
    let options = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: fName,
            lastName: lName,
            phone: phone1,
            street: street1,
            zip: zip1,
            city: city1
        })
    }
    fetch(editUrl, options);
        
}

function reloadBTN() {
    location.reload();
}

function fetchAll() {
    let allURL = url + "all";
    fetch(allURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const trs = data.all.map((user) => {
                //console.log(data.all);
                return `<tr><td>${user.id}</td><td>${user.firstName}</td><td>${user.lastName}</td>
                   <td>${user.phone}</td><td>${user.street}</td><td>${user.zip}</td><td>${user.city}</td></tr>`

            });
            const trStr = trs.join("");
            tb.innerHTML = trStr;

        });
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
