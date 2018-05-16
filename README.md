# utility-lib

A collection of javascript utilities

Install ----> `npm i @ed9/utility-lib`

Adds global variable `JSUtils` with list of libraries to use.

# Tree
* [JSUtils.Numbers](#working-with-numbers)
* [JSUtils.Numbers.Generic](#format-a-number-with-grouped-thousands)
* [JSUtils.Numbers.Money](#simplify-money-output)
* [JSUtils.Strings](#working-with-strings)
* [JSUtils.Strings.Links.ExtractHostnameFromUrl](#extract-hostname-from-url)
* [JSUtils.Colours](#working-with-colours)
* [JSUtils.Colours.Convert.HexToRgb](#convert-hex-to-rgb)
* [JSUtils.Colours.Convert.HexToRgbAlpha](#convert-hex-to-rgb-alpha)
* [JSUtils.Colours.Convert.AdjustBrightness](#adjust-brightness-of-a-hex-colour-code)
* [JSUtils.Colours.Convert.IdentifyLuminance](#identify-luminance-of-a-colour-code)

## Working with numbers

### Format a number with grouped thousands.

    string Generic ( float Number , int Decimals = 0 , string DecPoint = "." , String ThousandsSep = "," )

#### Examples

    JSUtils.Numbers.Formatting.Generic(1234.56);
    // 1,235
    
    JSUtils.Numbers.Formatting.Generic(1234.56, 2, ',', ' '); 
    // 1 234,56
    
    JSUtils.Numbers.Formatting.Generic(1234.5678, 3, '.', '');
    // 1234.568
    
    JSUtils.Numbers.Formatting.Generic(1234.56, 2, '.', ',');
    // 1,234.56
    
### Simplify money output

*An alias of JSUtils.Numbers.Formatting.Generic(Number, 2, '.', ',');*
	
    string Money( float Number )

#### Examples

	JSUtils.Numbers.Formatting.Money(1235.67);
    // 12,345.67

## Working with strings

### Extract hostname from URL

    string ExtractHostnameFromUrl( string URL )

#### Examples

    JSUtils.Strings.Links.ExtractHostnameFromUrl('https://github.com/ed9/utility-lib');
    // github.com

## Working with colours

### Convert HEX to RGB

    string HexToRgb ( string Hex )

#### Examples

    JSUtils.Colours.Convert.HexToRgb('#ffffff');
    // rgb(255,255,255)
    
### Convert HEX to RGB-Alpha

    string HexToRgbAlpha ( string Hex, float Alpha )

#### Examples

    JSUtils.Colours.Convert.HexToRgbAlpha('#ffffff', 0.5);
    // rgba(255,255,255,0.5)
        
### Adjust brightness of a HEX colour code

    string AdjustBrightness ( string Hex, float Percent )

#### Examples

    JSUtils.Colours.Convert.AdjustBrightness('#f00f00', 0.5);
    // equalivent of sass commad: lighten(#f00f00, 0.5)

    JSUtils.Colours.Convert.AdjustBrightness('#f00f00', -0.5);
    // equalivent of sass commad: darken(#f00f00, 0.5)
    
### Identify luminance of a colour code

    string IdentifyLuminance ( string Hex )

#### Examples

    JSUtils.Colours.Convert.IdentifyLuminance('#fff');
    // "L" - as Light
    
    JSUtils.Colours.Convert.IdentifyLuminance('#000');
    // "D" - as Dark
    
    
        