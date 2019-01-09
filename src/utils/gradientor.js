import rgbArrayFromHex from './hex-to-rgb';
import avgMix from './avg-color';
import tintShade from './tint-shade';
import antdColorPatette from './antd-color-palette';


export default function gradientor(start_color, end_color, granularity, type='avg') {
    const startRgbArr = rgbArrayFromHex(start_color).map(Number);
    const endRgbArr = rgbArrayFromHex(end_color).map(Number);
    granularity = Number(granularity);
    let res;
    switch(type) {
        case'avg':
            res = avgMix(startRgbArr, endRgbArr, granularity);
            break;
        case 'antd':
            res = antdColorPatette(endRgbArr, granularity);
            break;
        case 'tintshade':
            res = tintShade(endRgbArr, granularity);
            break;
        default: break;
    }
    return res;
}