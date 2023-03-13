
var customMask = null;

<<<<<<< HEAD
window.mask = (id, mask, isRegEx, destroy, dotnetHelper) => {    
    var pattern;    
=======
window.mask = (id, mask, isRegEx, destroy, dotnetHelper) => {
    var pattern;
>>>>>>> f99bef71819ec2fbe41e5a913529a3b9cef8e08e
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
