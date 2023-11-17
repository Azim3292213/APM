function toggleDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

function editCourse(courseId) {
    const courseElement = document.getElementById(courseId);
    const courseName = courseElement.textContent;

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = courseName;

    courseElement.replaceWith(inputField);

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Сохранить';
    saveButton.onclick = function () {
        saveEditedCourse(courseId, inputField.value);
    };

    inputField.insertAdjacentElement('afterend', saveButton);
}

function saveEditedCourse(courseId, newName) {
    console.log(`Изменено название курса ${courseId} на: ${newName}`);

    const editedCourseElement = document.createElement('span');
    editedCourseElement.id = courseId;
    editedCourseElement.textContent = newName;

    const saveButton = document.querySelector(`#${courseId} + button`);
    const inputField = document.querySelector(`#${courseId} + button + input`);

    inputField.replaceWith(editedCourseElement);
    saveButton.remove();
}

function saveGrades() {
    console.log("Оценки сохранены");
}

function saveAttendance() {
    console.log("Посещаемость сохранена");
}

function saveTeacherJournal() {
    console.log("Учительский журнал сохранен");
}

function addNewCourse() {
    const newCourseName = document.getElementById('newCourse').value;
    console.log(`Добавлен новый курс: ${newCourseName}`);
    document.getElementById('newCourse').value = '';
}

function searchStudents() {
    const studentName = document.getElementById('studentName').value;
    console.log(`Поиск учеников по имени: ${studentName}`);
}
