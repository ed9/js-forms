let generic = function (number, decimals, dec_point, thousands_sep) {

    number = number * 1;

    let i,
        parts = [],
        str = number.toFixed(decimals ? decimals : 0).toString().split('.');

    for (i = str[0].length; i > 0; i -= 3) {
        parts.unshift(str[0].substring(Math.max(0, i - 3), i));
    }

    str[0] = parts.join(thousands_sep !== void(0) ? thousands_sep : ',');

    return str.join(dec_point !== void(0) ? dec_point : '.');
};

let money = function (number) {
    return generic(number, 2, '.', ',');
};

let NumberFormatting = {
    'Generic' : generic,
    'Money' : money
}

export {
    NumberFormatting
}