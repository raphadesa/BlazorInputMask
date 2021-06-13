window.mask = (id, mask, isRegEx, dotnetHelper) => {
    var pattern;    
    if (isRegEx)
        pattern = new RegExp(mask);
    else
        pattern = mask;    
    var customMask = IMask(
        document.getElementById(id), {
        mask: pattern,
            commit: function (value, masked) {
                dotnetHelper.invokeMethodAsync('returnUnmaskedValue', this.unmaskedValue);                    
            }
    });
};

