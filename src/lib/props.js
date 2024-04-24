//dynamic props
function select(key) {
    let res = {
        key: key,
        label: key,
        type: "Select",
    };
    return {
        ...res,
        title(label) {
            let res1 = {
                ...res,
                label,
                options(options) {
                    return {
                        ...res1,
                        options,
                    };
                },
            };
            return res1;
        },
    };
}
function number(key) {
    let res = {
        label: key,
        key: key,
        type: "Number",
    };
    return {
        ...res,
        title(label) {
            return {
                ...res,
                label,
            };
        },
    };
}
function boolean(key) {
    let res = {
        label: key,
        key: key,
        type: "Boolean",
    };
    return {
        ...res,
        title(label) {
            return {
                ...res,
                label,
            };
        },
    };
}
function text(key) {
    let res = {
        label: key,
        key: key,
        type: "Text",
    };
    return {
        ...res,
        title(label) {
            return {
                ...res,
                label,
            };
        },
    };
}
function list(key) {
    let res = {
        label: key,
        key: key,
        type: "List",
    };
    return {
        ...res,
        title(label) {
            let sub = {
                ...res,
            };
            return {
                ...sub,
                label,
            };
        },
    };
}
function object(key, sub) {
    let res = {
        label: key,
        key: key,
        type: "Object",
        sub,
    };
    return {
        ...res,
    };
}
function image(key) {
    let res = {
        label: key,
        key: key,
        type: "Image",
    };
    return {
        ...res,
        title(label) {
            let sub = {
                ...res,
            };
            return {
                ...sub,
                label,
            };
        },
    };
}
function document(key) {
    let res = {
        label: key,
        key: key,
        type: "Document",
    };
    return {
        ...res,
        title(label) {
            let sub = {
                ...res,
            };
            return {
                ...sub,
                label,
            };
        },
    };
}
function listOf(key, sub) {
    let res = {
        label: key,
        key: key,
        type: "ListOf",
        sub,
    };
    return {
        ...res,
        title(label) {
            let sub = {
                ...res,
            };
            return {
                ...sub,
                label,
            };
        },
    };
}

export { select, boolean, text, list, object, listOf, number, image, document };
