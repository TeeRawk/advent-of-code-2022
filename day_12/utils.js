module.exports = {
    findShortestPathToEnd(startPoint, heightMatrix, visited) {
        const bfsQueue = [];
        bfsQueue.push({row: startPoint[0], column: startPoint[1], distance: 0})
        visited[startPoint[0]][startPoint[1]] = true;
        while (bfsQueue.length > 0) {
            const currentSquare = bfsQueue[0];
            const currentValue = heightMatrix[currentSquare.row][currentSquare.column] === 'S' ? 'a'.charCodeAt(0) : heightMatrix[currentSquare.row][currentSquare.column].charCodeAt(0);
            bfsQueue.shift();
            if (currentValue === 'E'.charCodeAt(0)) {
                return currentSquare.distance;
            }

            if (currentSquare.row - 1 >= 0 && !visited[currentSquare.row - 1][currentSquare.column]) {
                const destValue = heightMatrix[currentSquare.row - 1][currentSquare.column] === 'E' ? 122 : heightMatrix[currentSquare.row - 1][currentSquare.column].charCodeAt(0);
                const canMoveUp = destValue - currentValue <= 0 || destValue - currentValue === 1;
                if (canMoveUp) {
                    bfsQueue.push({
                        row: currentSquare.row - 1,
                        column: currentSquare.column,
                        distance: currentSquare.distance + 1
                    })

                    visited[currentSquare.row - 1][currentSquare.column] = true
                }
            }

            if (currentSquare.row + 1 <= heightMatrix.length - 1 && !visited[currentSquare.row + 1][currentSquare.column]) {
                const destValue = heightMatrix[currentSquare.row + 1][currentSquare.column] === 'E' ? 122 : heightMatrix[currentSquare.row + 1][currentSquare.column].charCodeAt(0);
                const canMoveDown = destValue - currentValue <= 0 || destValue - currentValue === 1;
                if (canMoveDown) {
                    bfsQueue.push({
                        row: currentSquare.row + 1,
                        column: currentSquare.column,
                        distance: currentSquare.distance + 1
                    })
                    visited[currentSquare.row + 1][currentSquare.column] = true
                }
            }

            if (currentSquare.column - 1 >= 0 && !visited[currentSquare.row][currentSquare.column - 1]) {
                const destValue = heightMatrix[currentSquare.row][currentSquare.column - 1] === 'E' ? 122 : heightMatrix[currentSquare.row][currentSquare.column - 1].charCodeAt(0);
                const canMoveLeft = destValue - currentValue <= 0 || destValue - currentValue === 1;
                if (canMoveLeft) {
                    bfsQueue.push({
                        row: currentSquare.row,
                        column: currentSquare.column - 1,
                        distance: currentSquare.distance + 1
                    })
                    visited[currentSquare.row][currentSquare.column - 1] = true
                }
            }

            if (currentSquare.column + 1 <= heightMatrix[0].length - 1 && !visited[currentSquare.row][currentSquare.column + 1]) {
                const destValue = heightMatrix[currentSquare.row][currentSquare.column + 1] === 'E' ? 122 : heightMatrix[currentSquare.row][currentSquare.column + 1].charCodeAt(0);
                const canMoveRight = destValue - currentValue <= 0 || destValue - currentValue === 1;
                if (canMoveRight) {
                    bfsQueue.push({
                        row: currentSquare.row,
                        column: currentSquare.column + 1,
                        distance: currentSquare.distance + 1
                    })

                    visited[currentSquare.row][currentSquare.column + 1] = true
                }
            }
        }

        return -1;
    }
};