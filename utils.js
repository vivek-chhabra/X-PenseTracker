export const Colors = {
    white: "white",
    light_bg: "#99c8c0",
    light_text100: "#709c95",
    light_text200: "#51837b",
    dark_text: "#27433e",
    // white: "white",
    // light_bg: "#a89bcf",
    // light_text: "#44304c",
    // dark_text: "#453c4a",
    // white: "white",
    // light_bg: "#70b2c7",
    // light_text: "#517983",
    // dark_text: "#2a5564",
};

export const getSum = (arr, key) => {
    let total = 0;
    for (let i of arr) {
        total += +i[key];
    }
    return total;
};

export const getFormattedDate = (date) => {
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
};

String.prototype.removeFrontSpaces = function () {
	return this.replace(/^\s+/, '');
};