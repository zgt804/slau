function zeidel() {
    let matrix = parseMatrix();
    let res = [];
    let num = prompt("Введите количество итераций", 10);

    for(let i = 0; i < matrix.length; i++) {
        res[i] = 0;
    }

    for(let i = 0; i < Number(num); i++) {
        res = iterationZeidel(matrix, res);
    }

    resulter(res, 'Метод Зейделя');
}

function iterationZeidel(matrix, res) {

    let sum = 0;

    for(let i = 0; i < matrix.length; i++) {
        sum = 0;
        for(let j = 0; j < matrix.length; j++) {
            if(i !== j) {
                sum += matrix[i][j] * res[j];
            }
        }
        res[i] = (matrix[i][matrix.length] - sum) / matrix[i][i];
    }

    return res;

}