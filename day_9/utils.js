module.exports = {
    getNewTailPosition(headPosition, oldTailPosition) {
        const headX = headPosition[0];
        const headY = headPosition[1];
        let tailX = oldTailPosition[0];
        let tailY = oldTailPosition[1];

        if (Math.abs(headX - tailX) >= 2) {
            tailX += headX - tailX > 0 ? 1 : -1;
            if (headY - tailY >= 1) {
                tailY++
            } else if (headY - tailY <= -1) {
                tailY--
            }
            return [tailX, tailY];
        }
        if (Math.abs(headY - tailY) >= 2) {
            tailY += headY - tailY > 0 ? 1 : -1;
            if (headX - tailX >= 1) {
                tailX++
            } else if (headX - tailX <= -1) {
                tailX--
            }
            return [tailX, tailY];
        }

        return [tailX, tailY];
    }
}