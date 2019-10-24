function iteration() {
    let matrix = parseMatrix();
    let matrix_old = parseMatrix();
    let res = [];
    let num = prompt("Введите количество итераций", 10);

    for(let i = 0; i < matrix.length; i++) {
        res[i] = 0;
    }

    for(let i = 0; i < Number(num); i++) {
        res = iterationMain(matrix, res);
    }

    let vector2 = vector(matrix_old, res);

    resulter(res, vector2, 'Метод итерации');
}

function iterationMain(matrix, res) {

    let sum = 0;
    let result = [];

    for(let i = 0; i < matrix.length; i++) {
        sum = 0;
        for(let j = 0; j < matrix.length; j++) {
            if(i !== j) {
                sum += matrix[i][j] * res[j];
            }
        }
        result[i] = (matrix[i][matrix.length] - sum) / matrix[i][i];
    }

    return result;

}