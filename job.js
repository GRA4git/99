function getResult (num) {
    if (num >= 11 && num <= 14) {
        return "бутылок";
    }

    if (num % 10 === 1) {
        return "бутылка";
    } else if (num % 10 === 2 || num % 10 === 3 || num % 10 === 4) {
        return "бутылки";
    } else {
        return "бутылок";
    }
}


function generateSongText (number) {
    for (let i = number; i > 0; i--) {
        console.log(`${i} ${getResult(i)} пива на стене, ${i} ${getResult(i)} пива!`);
        if (i === 1) {
            console.log(`Возьми одну, пусти по кругу, нет ${getResult(i)} пива на стене!`);
        } else {
            console.log(`Возьми одну, пусти по кругу, ${i-1} ${getResult(i-1)} пива на стене!`);
        }
    }
}
generateSongText(99);
