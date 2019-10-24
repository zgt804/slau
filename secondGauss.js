function secondGauss() {

    let matrix = parseMatrix();
    let matrix_old = parseMatrix();
    let b = [];
    let c = [];
    let result = [];
    let y = [];
    let s = 0;

    for(let i = 0; i < matrix.length; i++) {
        b[i] = [];
        c[i] = [];
        for(let j = 0; j < matrix.length; j++) {
            b[i][j] = 0;
            c[i][j] = 0;
        }
    }

    for(let i = 0; i < matrix.length; i++) {
        c[i][i] = 1;
        b[i][0] = matrix[i][0];
        c[0][i] = matrix[0][i] / b[0][0];
    }

    for(let i = 1; i < matrix.length; i++) {
        for(let j = 1; j < matrix.length; j++) {
            if(i >= j) {
                s = 0;
                for(let k = 0; k < j; k++) {
                    s += b[i][k] * c[k][j];
                }
                b[i][j] = matrix[i][j] - s;
            } else {
                s = 0;
                for(let k = 0; k < i; k++) {
                    s += b[i][k] * c[k][j];
                }
                c[i][j] = (matrix[i][j] - s) / b[i][i];
            }
        }
    }

    y[0] = matrix[0][matrix.length] / b[0][0];

    for(let i = 1; i < matrix.length; i++) {
        s = 0;
        for(let j = 0; j < i; j++) {
            s += b[i][j] * y[j];
        }
        y[i] = (matrix[i][matrix.length] - s) / b[i][i];
    }

    result[matrix.length-1] = y[matrix.length-1];

    for(let i = matrix.length - 2; i >= 0; i--) {
        s = 0;
        for(let j = i + 1; j < matrix.length; j++) {
            s += c[i][j] * result[j];
        }
        result[i] = y[i] - s;
    }

    for(let i = 0; i < result.length; i++) {
        result[i] = Math.floor(result[i] * 100) / 100;
    }

    let vector2 = vector(matrix_old, result);

    resulter(result, vector2, 'Второй метод Гаусса');

}