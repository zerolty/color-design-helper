function hexFromRgbArray(startArr, endArr, factor) {
    return [
        Math.round((startArr[0] + ((endArr[0] - startArr[0]) * factor))),
        Math.round((startArr[1] + ((endArr[1] - startArr[1]) * factor))),
        Math.round((startArr[2] + ((endArr[2] - startArr[2]) * factor)))
    ]
}
function avgMix (startRgbArr, endRgbArr, granularity) {
    const colors = [];
    const factor = 1 / (granularity + 1);
    for(let i = 0, len = granularity + 2;i < len; i++) {
        colors.push(
            hexFromRgbArray(startRgbArr, endRgbArr, factor * i)
        );
    }
    return colors;
}
export default avgMix;

