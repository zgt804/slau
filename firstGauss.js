function firstGauss() {

    let matrix = parseMatrix();
    let matrix_old = parseMatrix();
    let x = 1;
    let factor = 1;

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if (i === j) {
                if(matrix[i][j] !== 1) {
                    x = matrix[i][j];
                    if(x === 0) {
                        x = 1;
                    }
                }
                for(let n = 0; n < matrix[i].length; n++) {
                    matrix[i][n] = matrix[i][n] / x;
                }
                x = 1;
            } else if(j < i) {
                if(matrix[i][j] < 0) {
                    factor = 1;
                } else {
                    factor = -1;
                }
                if(matrix[i][j] !== 1) {
                    x = Math.abs(matrix[i][j]);
                }
                for(let n = 0; n < matrix[i].length; n++) {
                    matrix[i][n] = (matrix[j][n]*x*factor) + matrix[i][n];
                }
                x = 1;
            } else if (j > i) {
                continue;
            }
        }
    }
    let result = [];

    for(let i = 0; i < matrix.length; i++) {
        result[i] = matrix[i][matrix.length];
    }

    for(let i = matrix.length - 2; i >= 0; i--) {
        for(let j = i + 1; j < matrix.length; j++) {
            result[i] -= result[j] * matrix[i][j];
        }
    }

    for(let i = 0; i < result.length; i++) {
        result[i] = Math.floor(result[i] * 100) / 100;
    }

    let vector2 = vector(matrix_old, result);

    resulter(result, vector2, 'Первый метод Гаусса');
}