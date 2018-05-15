let extractHostnameFromUrl = function (v) {
    let link = document.createElement('a');
    link.href = v;

    return link.hostname;
};

let StringsLinks = {
    'ExtractHostnameFromUrl' : extractHostnameFromUrl
};

export {
    StringsLinks
}