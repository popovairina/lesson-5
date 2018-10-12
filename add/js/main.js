document.addEventListener('DOMContentLoaded', function() {
   let divDate = document.querySelector('.date'),
       divWeekDay = document.querySelector('.week-day'),
       date = new Date(),
       day = date.getDate(), // число
       weekDay = date.getDay(), // день недели
       month = date.getMonth() + 1,
       year = date.getFullYear(),
       hour = date.getHours(),
       minute = date.getMinutes(),
       second = date.getSeconds(),
       inputResult = document.getElementById('result'),
       btn = document.getElementById('calc');

   addZero();
   // 1) Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
   divDate.innerHTML = `${hour}:${minute}:${second} ${date}.${month}.${year}`;
   divWeekDay.innerHTML = `День недели: ${getWeekDay(date)}`;


    // 2) Напишите функцию, которая будет добавлять 0 перед днями и месяцами,
    // которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)
   function addZero() {
       day.toString().length == 1 ? day = '0' + day : '';
       month.toString().length == 1 ? month = '0' + month : '';
   }
   // 3) Напишите функцию, которая выводит на страницу текущий день недели на русском языке
   function getWeekDay(time) {
       let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
       return days[time.getDay()];
   }

   // 4) Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней

    function calcDiff (date1, date2) {
       return Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
    }

    btn.addEventListener('click', function () {
        let inputFrom = document.getElementById('start').value,
            inputTo = document.getElementById('end').value,
            dateFrom = new Date(inputFrom),
            dateTo = new Date(inputTo);

        inputResult.value = calcDiff(dateFrom, dateTo);
    });
});