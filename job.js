function generateSongText (number) {
    for (let i = number; i > 0; i--) {
        console.log(`${i} бутылок пива на стене, ${i} бутылок пива!`);
        if (i === 1) {
            console.log(`Возьми одну, пусти по кругу, нет бутылок пива на стене!`);
        } else {
            console.log(`Возьми одну, пусти по кругу, ${i-1} бутылок пива на стене!`);
        }
    }
}
generateSongText(99);
