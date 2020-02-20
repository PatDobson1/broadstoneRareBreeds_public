
// -- Utility functions ---------------------------------------

export const processHtml = (str) => {
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
};
