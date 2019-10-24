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

function transMatrix(A) {
    let m = A.length, n = A[0].length, AT = [];
    for(let i = 0; i < n; i++) {
        AT[i] = [];
        for(let j = 0; j < m; j++) {
            AT[i][j] = A[j][i];
        }
    }
    return AT;
}

function multiplyMatrix(A, B) {
    let rowsA = A.length, colsA = A[0].length,
        rowsB = B.length, colsB = B[0].length,
        C = [],
        t = 0;
    if(colsA !== rowsB) return false;
    for(let i = 0; i < rowsA; i++) {
        C[i] = [];
    }
    for(let k = 0; k < colsB; k++) {
        for(let i = 0; i < rowsA; i++) {
            t = 0;
            for (let j = 0; j < rowsB; j++) {
                t += A[i][j] * B[j][k];
            }
            C[i][k] = t;
        }
    }
    return C;
}

function inverseMatrixDiagonal(matrix) {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(i === j) {
                matrix[i][j] = 1 / matrix[i][j];
            }
        }
    }
    return matrix;
}

function toSquare(matrix) {
    let m = [];
    for(let i = 0; i < matrix.length; i++) {
        m[i] = [];
        for(let j = 0; j < matrix.length; j++) {
            m[i][j] = matrix[i][j];
        }
    }
    return m;
}

function getBeta(matrix) {
    let m = [];
    for(let i = 0; i < matrix.length; i++) {
        m[i] = [];
        for(let j = matrix.length; j < matrix.length+1; j++) {
            m[i][0] = matrix[i][j];
        }
    }
    return m;
}

function toDiagonal(matrix) {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(i !== j) {
                matrix[i][j] = 0;
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