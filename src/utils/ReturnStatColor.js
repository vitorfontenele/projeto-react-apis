export const getStatColor = (statValue) => {
    if (statValue < 50){
        return "#FF7B2D";
    } else if (statValue >= 50 && statValue < 100){
        return "#FFDE6A";
    } else {
        return "#8ADC8E";
    }
}