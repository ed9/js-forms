import {NumberFormatting} from './numbers/formatting.js';
import {ColourConversions} from "./colours/conversions.js";
import {StringsLinks} from "./strings/links.js";

window['JSUtils'] = {
    'Strings': {
        'Links': StringsLinks
    },
    'Numbers': {
        'Formatting': NumberFormatting
    },
    'Colours': {
        'Convert': ColourConversions
    }
};