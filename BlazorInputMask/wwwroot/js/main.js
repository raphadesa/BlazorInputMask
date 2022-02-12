window.mask = (id, mask, isRegEx, returnRawValue, dotnetHelper) => {
    var pattern;    
    if (isRegEx)
        pattern = new RegExp(mask);
    else
        pattern = mask;    
    var customMask = IMask(
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

