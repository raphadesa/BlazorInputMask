
var customMask = null;
var dictionary = new Map();

window.mask = (id, mask, isRegEx, destroy, dotnetHelper) => {

    customMask = dictionary.get(id);
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
            var vm = { value: value, unMaskedValue: this.unmaskedValue };
            dotnetHelper.invokeMethodAsync('returnValue', vm);
        }
    });
    dictionary.set(id, customMask);
};

window.clearValue = (id) => {
    customMask = dictionary.get(id);
    customMask.masked.reset();
};

