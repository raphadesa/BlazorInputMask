window.mask = (id,mask, dotnetHelper) => {
    var customMask = IMask(
        document.getElementById(id), {
            mask: mask,
            commit: function (value, masked) {
                dotnetHelper.invokeMethodAsync('returnUnmaskedValue', this.unmaskedValue);                    
            }
    });
};

