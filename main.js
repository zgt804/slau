function parseMatrix() {
    let matrix = [];
    let matrixString = document.getElementsByClassName('matrix_string');
    for(let i = 0; i < matrixString.length; i++) {
        let matrixColumn = matrixString[i].getElementsByTagName('input');
        matrix[i] = [];
        for(let j = 0; j < matrixColumn.length; j++) {
            if(matrixColumn[j].value !== '') {
                matrix[i][j] = Number(matrixColumn[j].value);
            } else {
                alert('Введите все значения СЛАУ');
                return null;
            }
        }
    }
    return matrix;
}

function resulter(result, message) {
    let div = document.getElementById('result');
    div.innerHTML = '<p>' + message + '</p>';
    for(let i = 0; i < result.length; i++) {
        let p = document.createElement("p");
        p.innerHTML = '<p>x' + (i+1) + ' = ' + result[i] + ';</p>';
        div.append(p);
    }
}