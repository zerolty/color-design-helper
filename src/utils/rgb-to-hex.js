function rgbChannelToHex (channel) {
    const hex = channel.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
}

function rgbToHex (r, g, b) {
    return `#${rgbChannelToHex(r)}${rgbChannelToHex(g)}${rgbChannelToHex(b)}`;
}

function rgbArrayToHex (color) {
    return rgbToHex(color[0], color[1], color[2]);
}

export default function toHex(color) {
    return rgbArrayToHex(color);
}