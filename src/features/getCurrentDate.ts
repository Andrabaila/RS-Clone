export default function getCurrentDate(): string {
    const date = new Date();

    const day = `${date.getDate()}`.padStart(2, '0');
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}
