export const checkPositiveNumber = (num) => {
    if (num > 0) {
        return `+${num}`
    }

    else if ((num === null) || (num === undefined)) {
        return 0
    }

    return num
}