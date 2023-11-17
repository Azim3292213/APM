# APM
APM секретаря школы
//<HTML>//
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>APM Секретаря Школы</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #534444; /* Gray background color */
            color: #333; /* Dark text color */
        }

        header {
            background-color: #333;
            color: #fff; /* White text color */
            text-align: center;
            padding: 10px 0;
        }

        nav {
            background-color: #f2f2f2;
            padding: 10px;
        }

        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        nav ul li {
            display: inline;
            margin-right: 20px;
        }

        nav a {
            text-decoration: none;
            color: #333;
            font-weight: bold;
        }

        .dashboard {
            margin: 20px;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(151, 23, 23, 0.1);
        }

        table {
            width: 100%;
            margin-top: 10px;
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        button {
            background-color: #d0d1d0;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #abbdac;
        }

        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            bottom: 0;
            width: 100%;
        }

        h2 {
            color: #555;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        #addCourse,
        #searchStudents,
        #teacherJournal {
            background-color: #f9f9f9;
            padding: 20px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        #addCourse label,
        #searchStudents label,
        #teacherJournal label {
            display: block;
            margin-bottom: 10px;
        }

        #addCourse input,
        #searchStudents input,
        #teacherJournal input {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
        }

        /* Стили для меню */
        .dropdown-btn {
            background-color: #c3a3a3;
            color: #fff;
            padding: 10px;
            border: none;
            cursor: pointer;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f0f0f0;
            min-width: 160px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            z-index: 1;
        }

        .dropdown-content a {
            display: block;
            padding: 10px;
            text-decoration: none;
            color: #333;
        }

        .dropdown-content a:hover {
            background-color: #ddd;
        }
    </style>
</head>

<body>
    <header>
        <header>
            <img src="logo.png" alt="Ваш логотип" style="max-width: 100%;">
            <!-- Остальное содержимое вашего заголовка -->
        </header>
        <h1>APM Секретаря Школы</h1>
    </header>
    <button class="dropdown-btn" onclick="toggleDropdown()">Меню</button>
    <div class="dropdown-content">
        <a href="#dashboard">Главная</a>
        <a href="#courses">Учебные курсы</a>
        <a href="#grades">Оценки</a>
        <a href="#attendance">Посещаемость</a>
        <a href="#teacherJournal">Учительский журнал</a>
    </div>
    <nav>
        <ul></ul>
    </nav>
    <section id="dashboard" class="dashboard">
        <h2>Добро пожаловать в APM Секретаря Школы!</h2>
        <p>Приветствуем вас в системе управления учебным процессом, разработанной для секретарей школы.</p>
        <p>Здесь вы можете легко управлять учебными курсами, оценками, посещаемостью и учительским журналом.</p>
        <p>Используйте меню ниже, чтобы быстро перемещаться между разделами системы.</p>
    </section>
    
    <!-- Модальное окно для учебных курсов -->
<div id="coursesModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h2>Учебные курсы</h2>
        <ul> 

            <section id="courses" class="dashboard">
                <h2>Учебные курсы</h2>
                <ul id="courseList">
                    <!-- Замените courseID на уникальные идентификаторы курсов -->
                    <li id="course1">
                        <span>Математика</span>
                        <button onclick="editCourse('course1')">Редактировать</button>
                    </li>
                    <li id="course2">
                        <span>Литература</span>
                        <button onclick="editCourse('course2')">Редактировать</button>
                    </li>
                    <li id="course3">
                        <span>Физика</span>
                        <button onclick="editCourse('course3')">Редактировать</button>
                    </li>
                    <li id="course4">
                        <span>Химия</span>
                        <button onclick="editCourse('course4')">Редактировать</button>
                    </li>
                    <li id="course5">
                        <span>История</span>
                        <button onclick="editCourse('course5')">Редактировать</button>
                    </li>
                    <li id="course6">
                        <span>Астрономия</span>
                        <button onclick="editCourse('course6')">Редактировать</button>
                    </li>
                    <!-- Добавьте другие курсы при необходимости -->
                </ul>
                <div id="editCourseModal" style="display: none;">
                    <h3>Редактировать курс</h3>
                    <label for="editedCourseName">Название курса:</label>
                    <input type="text" id="editedCourseName">
                    <button onclick="saveEditedCourse()">Сохранить</button>
                    <button onclick="cancelEdit()">Отмена</button>
                </div>
                <button onclick="addNewCourse()">Добавить новый курс</button>
            </section>
            
            <script>
                function editCourse(courseID) {
                    const courseName = document.getElementById(courseID).querySelector('span').textContent;
                    document.getElementById('editedCourseName').value = courseName;
                    document.getElementById('editCourseModal').style.display = 'block';
                    document.getElementById('editCourseModal').dataset.courseID = courseID;
                }
            
                function saveEditedCourse() {
                    const editedCourseName = document.getElementById('editedCourseName').value;
                    const editedCourseID = document.getElementById('editCourseModal').dataset.courseID;
                    // Сохранение изменений в базе данных или другом хранилище данных
                    // ...
            
                    // Обновление отображения
                    document.getElementById(editedCourseID).querySelector('span').textContent = editedCourseName;
                    document.getElementById('editCourseModal').style.display = 'none';
                }
            
                function cancelEdit() {
                    document.getElementById('editCourseModal').style.display = 'none';
                }
            
                function addNewCourse() {
                    const newCourseName = prompt('Введите название нового курса:');
                    if (newCourseName) {
                        // Создание нового курса в базе данных или другом хранилище данных
                        // ...
            
                        // Обновление отображения
                        const courseList = document.getElementById('courseList');
                        const newCourseID = 'course' + (courseList.children.length + 1);
                        const newCourseItem = document.createElement('li');
                        newCourseItem.id = newCourseID;
                        newCourseItem.innerHTML = `<span>${newCourseName}</span> <button onclick="editCourse('${newCourseID}')">Редактировать</button>`;
                        courseList.appendChild(newCourseItem);
                    }
                }
            </script>
            

    <section id="grades" class="dashboard">
        <h2>Оценки</h2>
        <table>
          <tr>
            <th>Предмет</th>
            <th>Оценка</th>
          </tr>
          <tr>
            <td>Математика</td>
            <td><input type="number" id="Математика" placeholder="Введите оценку" max="5"></td>
          </tr>
          <tr>
            <td>Литература</td>
            <td><input type="number" id="Литература" placeholder="Введите оценку" max="5"></td>
          </tr>
          <tr>
            <td>Физика</td>
            <td><input type="number" id="Физика" placeholder="Введите оценку"max="5"></td>
          </tr>
          <tr>
            <td>Химия</td>
            <td><input type="number" id="Химия" placeholder="Введите оценку"max="5"></td>
          </tr>
          <tr>
            <td>История</td>
            <td><input type="number" id="История" placeholder="Введите оценку"max="5"></td>
          </tr>
          <tr>
            <td>Астрономия</td>
            <td><input type="number" id="Астрономия" placeholder="Введите оценку"max="5"></td>
          </tr>
        </table>
        <button id="saveGradesBtn" onclick="saveGrades()">Сохранить</button>
      </section>      
    <section id="attendance" class="dashboard">
        <h2>Посещаемость</h2>
        <ul>
            <li><input type="checkbox" id="student1"> Арабов Саид </li>
            <li><input type="checkbox" id="student2"> Белкин Абдул</li>
            <li><input type="checkbox" id="student3"> Алероева Седа</li>
            <li><input type="checkbox" id="student4"> Мамашева Джума</li>
            <li><input type="checkbox" id="student5"> Власов Максим</li>
            <li><input type="checkbox" id="student6"> Магомедов Азим</li>
            <li><input type="checkbox" id="student7"> Алиев Габибуллах</li>
            <li><input type="checkbox" id="student8"> Иванов Иван</li>
            <!-- Добавьте других учеников при необходимости -->
        </ul>
        <button onclick="saveAttendance()">Сохранить</button>
    </section>
    <section id="teacherJournal" class="dashboard">
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="styles.css">
            <title>APM Секретаря Школы</title>
            <style>
                /* Ваши стили остаются неизменными */
            </style>
        </head>
        
        <body>
            <!-- Остальная часть вашего кода остается неизменной -->
        
            <section id="teacherJournal" class="dashboard">
                <section id="teacherJournal" class="dashboard">
                    <h2>Учительский журнал</h2>
                    <table>
                        <!-- Заголовки таблицы -->
                        <tr>
                            <th>Ученик</th>
                            <th>Предмет</th>
                            <th>Тест</th>
                            <th>Домашнее задание</th>
                            <!-- Добавим другие виды работы или тесты при необходимости -->
                            <th>Оценки</th>
                        </tr>
                
                        <!-- Строки с учениками -->
                        <tr>
                            <td>1. Арабов Саид</td>
                            <td>
                                <select id="subjectStudent1">
                                    <option value="math">Математика</option>
                                    <option value="lit">Литература</option>
                                    <option value="phys">Физика</option>
                                    <option value="chem">Химия</option>
                                    <option value="hist">История</option>
                                    <option value="astro">Астрономия</option>
                                    <!-- Добавьте другие предметы по мере необходимости -->
                                </select>
                            </td>
                            <td>
                                <select id="testTypeStudent1">
                                    <option value="test">Тест</option>
                                    <!-- Добавьте другие виды работы или тесты при необходимости -->
                                </select>
                                <input type="number" id="testStudent1" placeholder="Введите оценку" max="5">
                            </td>
                            <td><input type="text" id="homeworkStudent1" placeholder="Название домашней работы"></td>
                            <!-- Добавьте другие виды работы или тесты при необходимости -->
                            <td>
                                <!-- Раздел "Оценки" -->
                                <h3>Оценки</h3>
                                <!-- Добавьте другие виды работы или тесты при необходимости -->
                            </td>
                        </tr>
                
                        <!-- Пример для второго ученика -->
                        <tr>
                            <td>2. Белкин Абдул</td>
                            <td>
                                <select id="subjectStudent2">
                                    <option value="math">Математика</option>
                                    <option value="lit">Литература</option>
                                    <option value="phys">Физика</option>
                                    <option value="chem">Химия</option>
                                    <option value="hist">История</option>
                                    <option value="astro">Астрономия</option>
                                    <!-- Добавьте другие предметы по мере необходимости -->
                                </select>
                            </td>
                            <td>
                                <select id="testTypeStudent2">
                                    <option value="test">Тест</option>
                                    <!-- Добавьте другие виды работы или тесты при необходимости -->
                                </select>
                                <input type="number" id="testStudent2" placeholder="Введите оценку" max="5">
                            </td>
                            <td><input type="text" id="homeworkStudent2" placeholder="Название домашней работы"></td>
                            <!-- Добавьте другие виды работы или тесты при необходимости -->
                            <td>
                                <!-- Раздел "Оценки" -->
                                <h3>Оценки</h3>
                                <!-- Добавьте другие виды работы или тесты при необходимости -->
                            </td>
                        </tr>
                
                        <!-- Пример для третьего ученика -->
                        <tr>
                            <td>3. Алероева Седа</td>
                            <td>
                                <select id="subjectStudent3">
                                    <option value="math">Математика</option>
                                    <option value="lit">Литература</option>
                                    <option value="phys">Физика</option>
                                    <option value="chem">Химия</option>
                                    <option value="hist">История</option>
                                    <option value="astro">Астрономия</option>
                                    <!-- Добавьте другие предметы по мере необходимости -->
                                </select>
                            </td>
                            <td>
                                <select id="testTypeStudent3">
                                    <option value="test">Тест</option>
                                    <!-- Добавьте другие виды работы или тесты при необходимости -->
                                </select>
                                <input type="number" id="testStudent3" placeholder="Введите оценку" max="5">
                            </td>
                            <td><input type="text" id="homeworkStudent3" placeholder="Название домашней работы"></td>
                            <!-- Добавьте другие виды работы или тесты при необходимости -->
                            <td>
                                <!-- Раздел "Оценки" -->
                                <h3>Оценки</h3>
                                <!-- Добавьте другие виды работы или тесты при необходимости -->
                            </td>
                        </tr>
                
                        <!-- Пример для четвертого ученика -->
                        <tr>
                            <td>4. Мамашева Джума</td>
                            <td>
                                <select id="subjectStudent4">
                                    <option value="math">Математика</option>
                                    <option value="lit">Литература</option>
                                    <option value="phys">Физика</option>
                                    <option value="chem">Химия</option>
                                    <option value="hist">История</option>
                                    <option value="astro">Астрономия</option>
                                    <!-- Добавьте другие предметы по мере необходимости -->
                                </select>
                            </td>
                            <td>
                                <select id="testTypeStudent4">
                                    <option value="test">Тест</option>
                                    <!-- Добавьте другие виды работы или тесты при необходимости -->
                                </select>
                                <input type="number" id="testStudent4" placeholder="Введите оценку" max="5">
                            </td>
                            <td><input type="text" id="homeworkStudent4" placeholder="Название домашней работы"></td>
                            <!-- Добавьте другие виды работы или тесты при необходимости -->
                            <td>
                                <!-- Раздел "Оценки" -->
                                <h3>Оценки</h3>
                                <!-- Добавьте другие виды работы или тесты при необходимости -->
                            </td>
                        </tr>
                
                        <!-- Пример для пятого ученика -->
                        <tr>
                            <td>5. Власов Максим</td>
                            <td>
                                <select id="subjectStudent5">
                                    <option value="math">Математика</option>
                                    <option value="lit">Литература</option>
                                    <option value="phys">Физика</option>
                                    <option value="chem">Химия</option>
                                    <option value="hist">История</option>
                                    <option value="astro">Астрономия</option>
                                    <!-- Добавьте другие предметы по мере необходимости -->
                                </select>
                            </td>
                            <td>
                                <select id="testTypeStudent5">
                                    <option value="test">Тест</option>
                                    <!-- Добавьте другие виды работы или тесты при необходимости -->
                                </select>
                                <input type="number" id="testStudent5" placeholder="Введите оценку" max="5">
                            </td>
                            <td><input type="text" id="homeworkStudent5" placeholder="Название домашней работы"></td>
                            <!-- Добавьте другие виды работы или тесты при необходимости -->
                            <td>
                                <!-- Раздел "Оценки" -->
                                <h3>Оценки</h3>
                                <!-- Добавьте другие виды работы или тесты при необходимости -->
                            </td>
                        </tr>
                
                        <!-- Пример для шестого ученика -->
                        <tr>
                            <td>6. Магомедов Азим</td>
                            <td>
                                <select id="subjectStudent6">
                                    <option value="math">Математика</option>
                                    <option value="lit">Литература</option>
                                    <option value="phys">Физика</option>
                                    <option value="chem">Химия</option>
                                    <option value="hist">История</option>
                                    <option value="astro">Астрономия</option>
                                    <!-- Добавьте другие предметы по мере необходимости -->
                                </select>
                            </td>
                            <td>
                                <select id="testTypeStudent6">
                                    <option value="test">Тест</option>
                                    <!-- Добавьте другие виды работы или тесты при необходимости -->
                                </select>
                                <input type="number" id="testStudent6" placeholder="Введите оценку" max="5">
                            </td>
                            <td><input type="text" id="homeworkStudent6" placeholder="Название домашней работы"></td>
                            <!-- Добавьте другие виды работы или тесты при необходимости -->
                            <td>
                                <!-- Раздел "Оценки" -->
                                <h3>Оценки</h3>
                                <!-- Добавьте другие виды работы или тесты при необходимости -->
                            </td>
                        </tr>
                
                        <!-- Пример для седьмого ученика -->
                        <tr>
                            <td>7. Алиев Габибуллах</td>
                            <td>
                                <select id="subjectStudent7">
                                    <option value="math">Математика</option>
                                    <option value="lit">Литература</option>
                                    <option value="phys">Физика</option>
                                    <option value="chem">Химия</option>
                                    <option value="hist">История</option>
                                    <option value="astro">Астрономия</option>
                                    <!-- Добавьте другие предметы по мере необходимости -->
                                </select>
                            </td>
                            <td>
                                <select id="testTypeStudent7">
                                    <option value="test">Тест</option>
                                    <!-- Добавьте другие виды работы или тесты при необходимости -->
                                </select>
                                <input type="number" id="testStudent7" placeholder="Введите оценку" max="5">
                            </td>
                            <td><input type="text" id="homeworkStudent7" placeholder="Название домашней работы"></td>
                            <!-- Добавьте другие виды работы или тесты при необходимости -->
                            <td>
                                <!-- Раздел "Оценки" -->
                                <h3>Оценки</h3>
                                <!-- Добавьте другие виды работы или тесты при необходимости -->
                            </td>
                        </tr>
                
                        <!-- Пример для восьмого ученика -->
                        <tr>
                            <td>8. Иванов Иван</td>
                            <td>
                                <select id="subjectStudent8">
                                    <option value="math">Математика</option>
                                    <option value="lit">Литература</option>
                                    <option value="phys">Физика</option>
                                    <option value="chem">Химия</option>
                                    <option value="hist">История</option>
                                    <option value="astro">Астрономия</option>
                                    <!-- Добавьте другие предметы по мере необходимости -->
                                </select>
                            </td>
                            <td>
                                <select id="testTypeStudent8">
                                    <option value="test">Тест</option>
                                    <!-- Добавьте другие виды работы или тесты при необходимости -->
                                </select>
                                <input type="number" id="testStudent8" placeholder="Введите оценку" max="5">
                            </td>
                            <td><input type="text" id="homeworkStudent8" placeholder="Название домашней работы"></td>
                            <!-- Добавьте другие виды работы или тесты при необходимости -->
                            <td>
                                <!-- Раздел "Оценки" -->
                                <h3>Оценки</h3>
                                <!-- Добавьте другие виды работы или тесты при необходимости -->
                            </td>
                        </tr>
                    </table>
                    <button onclick="saveTeacherJournal()">Сохранить</button>
                </section>
                
                
            
            
    <section id="addCourse" class="dashboard">
        <h2>Добавление нового учебного курса</h2>
        <label for="newCourse">Новый курс:</label>
        <input type="text" id="newCourse" placeholder="Введите название курса">
        <button onclick="addNewCourse()">Добавить</button>
    </section>
    <section id="searchStudents" class="dashboard">
        <h2>Поиск Учеников</h2>
        <label for="studentName">Имя Ученика:</label>
        <input type="text" id="studentName" placeholder="Введите имя ученика">
        <button onclick="searchStudents()">Поиск</button>
    </section>
    <footer>
        <p>&copy; 2023 APM Секретаря Школы
            Горячая линия: +7999-444-8-222
            Наш isntagram:magomedov.a500
        </p>
    </footer>
    <script>
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
            const newCourseName = document.getElementById('newPredmet').value;
            console.log(`Добавлен новый предмет: ${newPredmetName}`);
            document.getElementById('newCourse').value = '';
        }

        function searchStudents() {
            const studentName = document.getElementById('studentName').value;
            console.log(`Поиск учеников по имени: ${studentName}`);
        }
    </script>
</body>

</html>
