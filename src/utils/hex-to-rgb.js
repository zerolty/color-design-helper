const hexArray = hex => /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
const rgbObjectFromHex = hex => {
    var result = hexArray(hex)
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    } : null;
}
const rgbArrayFromHex = hex => {
    const rgb = rgbObjectFromHex(hex);
    return [rgb.r, rgb.g, rgb.b];
}

export default rgbArrayFromHex;