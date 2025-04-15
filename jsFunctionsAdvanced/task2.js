const decreaseNumber = num => {
    console.log(num);

    if (num > 0) {
        return decreaseNumber(num - 1);
    }

}

decreaseNumber(5);