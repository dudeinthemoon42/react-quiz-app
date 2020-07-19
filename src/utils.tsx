export const shuffleArray = (array: any[]) => {
    [...array].sort(() => Math.random() - 0.5); // shitty init a random array - i fucking hate javascript.
}
