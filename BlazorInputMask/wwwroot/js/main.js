
var customMask = null;

window.mask = (id, mask, isRegEx, destroy, dotnetHelper) => {    
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
            var vm = { value:value, unMaskedValue:this.unmaskedValue };
            dotnetHelper.invokeMethodAsync('returnValue', vm);
        }
    });
};

