function add(string) {
    if (!isNaN(string)) {
        return string;
    }

    let numbers = string.split(',');
    return parseInt(numbers[0]) + parseInt(numbers[1]);

    return 0;
}