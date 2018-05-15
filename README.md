# js-utils
A net of JavaScript utilities wrapped in one library

Adds global variable `JSUtils` with list of libraries to use.

## Format a number with grouped thousands.

    string Generic ( float Number , int Decimals = 0 , string DecPoint = "." , String ThousandsSep = "," )

##### Examples

    JSUtils.Numbers.Formatting.Generic(1234.56);
    // 1,235
    
    JSUtils.Numbers.Formatting.Generic(1234.56, 2, ',', ' '); 
    // 1 234,56
    
    JSUtils.Numbers.Formatting.Generic(1234.5678, 3, '.', '');
    // 1234.568
    
    JSUtils.Numbers.Formatting.Generic(1234.56, 2, '.', ',');
    // 1,234.56
    
## Simplify money output

*An alias of rJSUtils.Numbers.Formatting.Geneic(Number, 2, '.', ',');*
	
    string Money( float Number )

##### Examples

	JSUtils.Numbers.Formatting.Money(1235.67);
    // 12,345.67

