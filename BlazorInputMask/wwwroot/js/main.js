window.mask = (id,mask) => {
    var customMask = IMask(
        document.getElementById(id), {
        mask: mask
    });
};