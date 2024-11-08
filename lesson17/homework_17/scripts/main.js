//Сделать страничку-таймер обратного отсчета. 
//На страничке должно быть поле для ввода времени в секундах, кнопка "старт" и обратный отсчет должен
// начаться при нажатии на кнопку. Отсчет должен быть виден на страничке и обновляться каждую секунду.
// По окончании отсчета должен появиться текст "время вышло", или по желанию звуковое оповещение, 
//таймер при этом должен остановиться.

// let i = 0;
// console.log('Start');
// const timeIntervalID = setInterval(() => {
//     if (i >= 3) {
//       clearInterval(timeIntervalID);
//     }
//     divElement.textContent = i;
//     i++;
//   }, 1000);
  

let timer;
    
    function startTimer() {
      const input = document.querySelector('#timeInput');
      const timerDisplay = document.querySelector('#timer');
      let timeLeft = parseInt(input.value);

      clearInterval(timer);

      if (isNaN(timeLeft) || timeLeft <= 0) {
        timerDisplay.textContent = "Введите корректное количество секунд";
        return;
      }

      timer = setInterval(() => {
        timerDisplay.textContent = timeLeft + " секунд";

        if (timeLeft <= 0) {
          clearInterval(timer);
          timerDisplay.textContent = "Время вышло!";
          
        }

        timeLeft -= 1;
      }, 1000);
    }
  