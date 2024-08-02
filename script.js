function generate() {
    const matches = document.getElementById('matches').value;
    const noRepeat = document.getElementById('noRepeat').checked;
    const results = document.getElementById('results');
    const options = ['Time 1', 'Time 2', 'Empate'];
    let resultList = [];
    let lastResult = '';

    results.innerHTML = '';

    for (let i = 0; i < matches; i++) {
        let result;
        do {
            result = options[Math.floor(Math.random() * options.length)];
        } while (noRepeat && result === lastResult);

        resultList.push(result);
        lastResult = result;
    }

    resultList.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        results.appendChild(li);
    });
}