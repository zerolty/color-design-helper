import { TinyColor } from '@ctrl/tinycolor';

const hueStep = 2;
const saturationStep = 16;
const saturationStep2 = 5;
const brightnessStep1 = 5;
const brightnessStep2 = 15;
const lightColorCount = 5;
const darkColorCount = 4;

const getHue = function (hsv, i, isLight) {
    let hue;
    if (hsv.h >= 60 && hsv.h <= 240) {
        hue = isLight ? hsv.h - hueStep * i : hsv.h + hueStep * i;
    } else {
        hue = isLight ? hsv.h + hueStep * i : hsv.h - hueStep * i;
    }
    if (hue < 0) {
        hue += 360;
    } else if (hue >= 360) {
        hue -= 360;
    }
    return Math.round(hue);
};
const getSaturation = function (hsv, i, isLight) {
    let saturation;
    if (isLight) {
        saturation = Math.round(hsv.s * 100) - saturationStep * i;
    } else if (i === darkColorCount) {
        saturation = Math.round(hsv.s * 100) + saturationStep;
    } else {
        saturation = Math.round(hsv.s * 100) + saturationStep2 * i;
    }
    if (saturation > 100) {
        saturation = 100;
    }
    if (isLight && i === lightColorCount && saturation > 10) {
        saturation = 10;
    }
    if (saturation < 6) {
        saturation = 6;
    }
    return Math.round(saturation);
};
const getValue = function (hsv, i, isLight) {
    if (isLight) {
        return Math.round(hsv.v * 100) + brightnessStep1 * i;
    }
    return Math.round(hsv.v * 100) - brightnessStep2 * i;
};

function colorPalette(color, index, num) {
    const isLight = index <= num;
    const hsv = new TinyColor({ r: color[0], g: color[1], b: color[2] }).toHsv();
    const i = isLight ? lightColorCount + 1 - index : index - lightColorCount - 1;
    const result = {
        h: getHue(hsv, i, isLight),
        s: getSaturation(hsv, i, isLight),
        v: getValue(hsv, i, isLight)
    };
    const rgb = new TinyColor(result).toRgb();
    return [rgb.r, rgb.g, rgb.b]; 

};

function multiDimensionalUnique(arr) {
    const uniques = [];
    const itemsFound = {};
    for(let i = 0, l = arr.length; i < l; i++) {
        const stringified = JSON.stringify(arr[i]);
        if(itemsFound[stringified]) { continue; }
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
    }
    return uniques;
}

function antdColorPatette(color, granularity) {
    let colors = [];
    for(let i = 1, len = granularity; i <= len; i++) {
        colors.push(
            colorPalette(color, i, Math.round((granularity)*0.6))
        );
    }
    return multiDimensionalUnique(colors);
}

export default antdColorPatette;