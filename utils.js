export const Colors = {
    white: "white",
    light_bg: "#6ba199",
    light_text: "#51837b",
    dark_text: "#27433e",
};

export const getSum = (arr, key) => {
    let total = 0;
    for (let i of arr) {
        total += i[key];
    }
    return total;
};
