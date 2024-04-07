document.getElementById('my_form').addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвратить отправку формы- этот момент мне не совсем понятно, т.к. дз. выполняли вместе с ментором
    // он сказал, что надо тсделать так можете подробно описать? т
    
    let username = document.getElementById('user_name').value.trim();
    let password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Заполните поля');
        return;
        // ретерн в джава может работать с if, но иногда код выводить ошибку, можете подробно описать связь ретерн с if и функцией и где еще можно использовать ретерн?
    }

    fetch('https://jsonplaceholder.typicode.com/posts', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Ответ сервера:', data);
        
    })
    .catch(error => console.error('Ошибка:', error));
});








