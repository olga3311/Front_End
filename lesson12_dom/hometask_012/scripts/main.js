
const buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {

    const height = document.querySelector('#height').value / 100;
    const weight = document.querySelector('#weight').value;
    const bmi = (weight / (height * height)).toFixed(2);

    let status = '';
    if (bmi < 18.5) {
        status = 'Недостаточный вес';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Нормальный вес';
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Избыточный вес';
    } else {
        status = 'Ожирение';
    }
    document.getElementById('bmiValue').textContent = `Ваш BMI: ${bmi}`;
    document.getElementById('bmiStatus').textContent = `Статус: ${status}`;

}

