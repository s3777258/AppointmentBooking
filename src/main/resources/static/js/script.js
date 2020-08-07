getStudents()


function addStudent() { //post

    var name = document.getElementById('student').value //get value from an html element

    fetch('http://localhost:8080/students', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({studentName: name})

    }).then(res => getStudents())


    console.log('Added')
}

function getStudents() {

    var studentList = document.getElementById('studentList')

    studentList.innerHTML = ''

    fetch('http://localhost:8080/students')
        .then(res => res.json())
        .then(json => {

            for (i = 0; i < json.length; i++) {

                var id = json[i].id

                var deleteLink = `<button onclick='deleteStudent(${id})'>Delete</button>`

                studentList.innerHTML += '<div>' + json[i].studentName + deleteLink + '</div>'

            }

        })

}


function deleteStudent(id) {
    fetch('http://localhost:8080/students/' + id, {
        method: 'delete'
    })
        .then(res => getStudents())
}

getTeachers()

function addTeacher() { //post
    var name = document.getElementById('teacherName').value //get value from an html element
    var address = document.getElementById('teacherAddress').value
    var phone = document.getElementById('teacherPhone').value

    if (name != '' && address != '' && phone != '') {
        fetch('http://localhost:8080/teachers', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({teacherName: name, teacherAddress: address, teacherPhone: phone})

        }).then(res => getTeachers())


        console.log('Added')
    }
}

function getTeachers() {

    var teacherList = document.getElementById('teacherList')

    teacherList.innerHTML = ''

    fetch('http://localhost:8080/teachers')
        .then(res => res.json())
        .then(json => {

            for (i = 0; i < json.length; i++) {

                var id = json[i].id

                var deleteLink = `<button onclick='deleteTeacher(${id})'>Delete</button>`

                teacherList.innerHTML += '<div>' + json[i].teacherName + ' ' + json[i].teacherAddress + ' ' + json[i].teacherPhone + deleteLink + '</div>'

            }

        })

}


function deleteTeacher(id) {
    fetch('http://localhost:8080/teachers/' + id, {
        method: 'delete'
    })
        .then(res => getTeachers())
}
