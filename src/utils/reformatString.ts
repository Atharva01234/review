export const reformatString = (input: string) => {
    let words = input.split('-');

    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

    let output = words.join(' ');

    return output;
}