
var customMask = null;

window.mask = (id, mask, isRegEx, returnRawValue, destroy, dotnetHelper) => {    
    var pattern;    
    if (isRegEx)
        pattern = new RegExp(mask);
    else
        pattern = mask;
    if (customMask != null && destroy) {
        customMask.destroy();
    }    
    customMask = IMask(
        document.getElementById(id), {
        mask: pattern,
            commit: function (value, masked) {
                if (returnRawValue===true)                    
                    dotnetHelper.invokeMethodAsync('returnCurrentValue', this.unmaskedValue);
                else
                    dotnetHelper.invokeMethodAsync('returnCurrentValue', value);
                    
            }
    });
};

