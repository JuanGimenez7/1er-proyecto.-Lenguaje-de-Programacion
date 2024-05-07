let data = {
    cars: [
        {
            carBrand: "Toyota",
            carModels: ["Corolla", "Hilux", "Fortuner", "Yaris"]
        },
        {
            carBrand: "Chevrolet",
            carModels: ["Aveo", "Spark", "Cruze", "Silverado"]
        },
        {
            carBrand: "Ford",
            carModels: ["Fiesta", "Focus", "Mustang", "Explorer"]
        },
        {
            carBrand: "Renault",
            carModels: ["Logan", "Clio"]
        },
        {
            carBrand: "Jeep",
            carModels: ["Grand Cherokee", "Wrangler"]
        },
        {
            carBrand: "Chery",
            carModels: ["Tiggo", "QQ", "Arauca", "Orinoco"]
        }
    ]
};

var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    userName = document.getElementById("name"),
    surname = document.getElementById("surname"),
    city = document.getElementById("city"),
    email = document.getElementById("email"),
    tel = document.getElementById("tel"),
    iden = document.getElementById("iden"),
    sDate = document.getElementById("sDate"),
    address = document.getElementById("address"),
    brand = document.getElementById("brand"),
    model = document.getElementById("model"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser")


let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []

let isEdit = false, editId
showInfo()

newUserBtn.addEventListener('click', () => {
    submitBtn.innerText = 'Submit',
        modalTitle.innerText = "Register new car"
    isEdit = false
    imgInput.src = "./image/newCarIcon.jpg"
    form.reset()
})


file.onchange = function () {
    if (file.files[0].size < 1000000) {  // 1MB = 1000000
        var fileReader = new FileReader();

        fileReader.onload = function (e) {
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileReader.readAsDataURL(file.files[0])
    }
    else {
        alert("This file is too large!")
    }
}


function showInfo() {
    document.querySelectorAll('.employeeDetails').forEach(info => info.remove())
    getData.forEach((element, index) => {
        let createElement = `<tr class="employeeDetails">
            <td>${index + 1}</td>
            <td><img src="${element.picture}" alt="" width="50" height="50"></td>
            <td>${element.carBrand}</td>
            <td>${element.carModel}</td>
            <td>${element.employeeCity}</td>
            <td>${element.employeeEmail}</td>
            <td>${element.startDate}</td>
            <td>${element.employeeName}</td>
            <td>${element.employeeAge}</td>
            <td>${element.employeePost}</td>
            <td>${element.employeePhone}</td>
            <td>${element.ownerAdress}</td>


            <td>
                <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.employeeName}', '${element.employeeAge}', '${element.employeeCity}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeePost}', '${element.startDate}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>

                <button class="btn btn-primary" onclick="editInfo(${index}, '${element.picture}', '${element.employeeName}', '${element.employeeAge}', '${element.employeeCity}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeePost}', '${element.startDate}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

                <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
                            
            </td>
        </tr>`

        userInfo.innerHTML += createElement
    })
}
showInfo()


function readInfo(pic, name, surname, city, email, tel, iden, sDate) {
    document.querySelector('.showImg').src = pic,
        document.querySelector('#showName').value = name,
        document.querySelector("#showAge").value = surname,
        document.querySelector("#showCity").value = city,
        document.querySelector("#showEmail").value = email,
        document.querySelector("#showPhone").value = tel,
        document.querySelector("#showPost").value = iden,
        document.querySelector("#showsDate").value = sDate
}


function editInfo(index, pic, name, surname, City, Email, tel, iden, Sdate) {
    isEdit = true
    editId = index
    imgInput.src = pic
    userName.value = name
    surname.value = surname
    city.value = City
    email.value = Email,
        tel.value = tel,
        iden.value = iden,
        sDate.value = Sdate

    submitBtn.innerText = "Update"
    modalTitle.innerText = "Update The Form"
}


function deleteInfo(index) {
    if (confirm("Are you sure want to delete?")) {
        getData.splice(index, 1)
        localStorage.setItem("userProfile", JSON.stringify(getData))
        showInfo()
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const information = {
        picture: imgInput.src == undefined ? "./image/newCarIcon.jpg" : imgInput.src,
        carBrand: brand.value,
        carModel: model.value,
        employeeCity: city.value,
        employeeEmail: email.value,
        startDate: sDate.value,
        employeeName: userName.value,
        employeeAge: surname.value,
        employeePost: iden.value,
        employeePhone: tel.value,
        ownerAdress: address.value,
    }

    if (!isEdit) {
        getData.push(information)
    }
    else {
        isEdit = false
        getData[editId] = information
    }

    localStorage.setItem('userProfile', JSON.stringify(getData))

    submitBtn.innerText = "Submit"
    modalTitle.innerHTML = "Register new car"

    showInfo()

    form.reset()

    imgInput.src = "./image/newCarIcon.jpg"

    // modal.style.display = "none"
    // document.querySelector(".modal-backdrop").remove()
})

window.onload = function () {
    const selectBrand = document.getElementById("brand");
    const selectModel = document.getElementById("model");
    selectModel.disabled = true;

    function matchBrand(cars, e) {
        return cars.carBrand === e.target.value
    }

    //Add State Value to State Select option
    data.cars.forEach((value) => {
        selectBrand.appendChild(createOption(value.carBrand, value.carBrand));
    });

    selectBrand.addEventListener("change", function (e) {
        selectModel.disabled = false;
        index = data.cars.filter(car => matchBrand(car, e))
        index = index[0];
        console.log(index)
        selectModel.innerHTML = "";
        selectModel.append(createOption("Select Model", ""));
        index.carModels.forEach((model) => {
            selectModel.append(createOption(model, model));

        });
    });

    //     data.cars.forEach((detail, index) => {
    //         //console.log(data.cars[index].carModels);
    //         if (detail.carBrand == e.target.value) {
    //             selectModel.innerHTML = "";
    //             selectModel.append(createOption("Select Model", ""));
    //             data.cars[index].carModels.forEach((model) => {
    //                 selectModel.append(createOption(model, model));
    //             });
    //         }
    //     });
    // });

    //Create New Option Tag With Value
    function createOption(displayMember, valueMember) {
        const newOption = document.createElement("option");
        newOption.value = valueMember;
        newOption.text = displayMember;
        return newOption;
    }
};
