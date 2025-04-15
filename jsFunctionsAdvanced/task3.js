const divide = (numerator, denominator) => {

    if (denominator === 0) {
        throw new Error("Divided by zero is not allowed!");
    } else if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Both arguments must be numbers!")
    }
    return numerator / denominator;
}

try {
    divide(102, 15);
} catch (error) {
    console.error("Error occurred: ", error.message);
} finally {
    console.log("The work is over.");
}

try {
    divide(23, 0);

} catch (error) {
    console.error("Error occurred: ", error.message);
} finally {
    console.log("The work is over.");
}

try {
    divide("hi", 8);

} catch (error) {
    console.error("Error occurred: ", error.message);
} finally {
    console.log("The work is over.");
}