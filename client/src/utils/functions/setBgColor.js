export const setBgColor = (num) => {
    if (num < 0) {
        return {backgroundColor: '#fa6e8a', color: '#b30435'}
    }

    else if (num === 0) {
        return {backgroundColor: '#edebeb'}
    }

    else if (num > 0){
        return {backgroundColor: '#aff792', color: '#227a1d'}
    }

    else {
        return {backgroundColor: '#edebeb'}
    }
}