import {Generic} from "../numbers/formatting.js";

let convertHexToRgb = function (hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (!result) {
        throw Error('Hex "' + hex + '" cannot be converted to rgb.')
    }

    return {
        'r': result[1],
        'g': result[2],
        'b': result[3]
    };
};

let convertHexToRgbString = function (hex) {
    let rgb = convertHexToRgb(hex);

    return "rgb(" + parseInt(rgb['r'], 16) + ',' + parseInt(rgb['g'], 16) + ',' + parseInt(rgb['b'], 16) + ')';
};

let convertHexToRgbAlphaString = function (hex, alpha) {
    if (alpha < 0.00 || alpha > 1.00) {
        throw Error('RGBA Error - The alpha property must be between 0.00 and 1.00. For example 0.50 is equal to 50%.');
    }

    let rgb = convertHexToRgb(hex);

    return 'rgba(' + parseInt(rgb['r'], 16) + ',' + parseInt(rgb['g'], 16) + ',' + parseInt(rgb['b'], 16) + ', ' + Generic(alpha.toString(), 2, '.', '') + ')';
};

let adjustBrightness = function (color, percent) {
    var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent,
        R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
};

let identifyLuminance = function (hex) {
    let rgb = convertHexToRgb(hex, true);
    let luminance = Math.sqrt(0.241 * Math.pow(rgb['r'], 2) + 0.691 * Math.pow(rgb['g'], 2) + 0.068 * Math.pow(rgb['b'], 2));

    return luminance <= 130 ? 'D' : 'L';
};

let ColourConversions = {
    'HexToRgb': convertHexToRgbString,
    'HexToRgbAlpha': convertHexToRgbAlphaString,
    'AdjustBrightness': adjustBrightness,
    'IdentifyLuminance': identifyLuminance
};

export {
    ColourConversions
}