const InputField = document.querySelector ('.inputField');
const btn = document.querySelector ('.btn');
const toDoContainer = document.querySelector ('.toDoContainer');
//1 Первый шаг мы здесь делаем так! При нажатий на клик что то должно происхожить!  
btn.addEventListener ('click', ()=>{
    //2 Создаем документ где пользователь вбьет любое слово и оно появиться как LI
    const item = document.createElement ('li');
    //3 Открываем доступ к строчке где будут вбиваться слова!
    item.innerText = InputField.value;
    //5 Придаем стиль к словам которые появиться после их ввода пользователем.Далее работаем в CSS
    item.classList.add ('toDoAdded')
    //4 привязываем ребенка к родителю который создан в HTML
    toDoContainer.appendChild (item);
    //6 Эта команда для того чтобы пользователь что то писал в поле и слово с поле исчезало!
    InputField.value = '';
    //7 Создаем класс и работаем в CSS 
    item.addEventListener ('click',  ()=>{
        item.classList.add('toDoCompleted')
    })
    //8 Удаление дел с помощью 2 кликов 
    item.addEventListener ('dblclick', ()=>{
    toDoContainer.removeChild (item);
    })
})