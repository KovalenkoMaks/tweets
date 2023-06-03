export const formatNumber = (number, plus) => {
    if (plus) {
        number += 1;
    }
    const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedNumber;
}