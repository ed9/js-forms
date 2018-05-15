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

    return "rgb(" + parseInt(rgb[1], 16) + ',' + parseInt(rgb[2], 16) + ',' + parseInt(rgb[3], 16) + ')';
};

let convertHexToRgbAlphaString = function (hex, alpha) {
    if (alpha < 0.00 || alpha > 1.00) {
        throw Error('RGBA Error - The alpha property must be between 0.00 and 1.00. For example 0.50 is equal to 50%.');
    }

    let rgb = convertHexToRgb(hex);

    return 'rgba(' + parseInt(rgb[1], 16) + ',' + parseInt(rgb[2], 16) + ',' + parseInt(rgb[3], 16) + ', ' + Generic(alpha.toString(), 2, '.', '') + ')';
};

let ColourConversions = {
    'HexToRgb': convertHexToRgbString,
    'HexToRgbAlpha': convertHexToRgbAlphaString
};

export {
    ColourConversions
}