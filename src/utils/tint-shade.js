import avgMix from './avg-color';
function tintShade(color, granularity) {
    granularity = Number(granularity);
    const mid = Math.round(granularity/2);
    const mixWithWhite = granularity % 2 === 0 
        ? avgMix([255, 255, 255], color, mid).slice(1, mid+1)
        : avgMix([255, 255, 255], color, mid).slice(1, mid);
    const mixWithBlack = granularity % 2 === 0 
        ? avgMix(color, [0, 0, 0], mid).slice(1, mid+1)
        : avgMix(color, [0, 0, 0], mid).slice(0, mid);
    
    return [...mixWithWhite, ...mixWithBlack];
    
}

export default tintShade;