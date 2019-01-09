export default function brightness(c) {
    const color = ((c[0] * 299 + c[1] * 587 + c[2] * 114) / 1000) < 154 ? '#ffffff' : '#000000';
    return color;
}