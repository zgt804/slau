function ortogonalization() {
    let matrix = parseMatrix();
    let sum = 0;
    let sqr = 0;
    let lamba = 0;
    let result = [];

    for(let n = 0; n < matrix.length - 1; n++) {
        for(let i = n+1; i < matrix.length; i++) {
            sum = 0;
            sqr = 0;
            for(let j = 0; j < matrix.length; j++) {
                sum += matrix[n][j] * matrix[i][j];
                sqr += matrix[n][j] * matrix[n][j];
            }
            lamba = sum / sqr;
            for(let j = 0; j < matrix.length + 1; j++) {
                matrix[i][j] -= matrix[n][j] * lamba;
            }
        }
    }

    let beta = getBeta(matrix);
    let r = toSquare(matrix);
    let r_trans = transMatrix(r);
    let d_reduce = multiplyMatrix(r, r_trans);
    let d = toDiagonal(d_reduce);
    let d_inverse = inverseMatrixDiagonal(d);
    let x = multiplyMatrix(r_trans, d_inverse);
    result = multiplyMatrix(x, beta);

    for(let i = 0; i < result.length; i++) {
        result[i] = Math.floor(result[i] * 100) / 100;
    }

    resulter(result, 'Метод ортогонализации');

}