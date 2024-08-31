class News {
    constructor(title, text, tags, date) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.date = new Date(date); 
    }

    
    print() {
        const now = new Date();
        const timeDiff = now - this.date;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Різниця в днях

        let dateString;

        if (daysDiff < 1) {
            dateString = "сьогодні";
        } else if (daysDiff < 7) {
            dateString = `${daysDiff} днів тому`;
        } else {
            dateString = `${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()}`;
        }

        console.log(`Заголовок: ${this.title}`);
        console.log(`Текст: ${this.text}`);
        console.log(`Теги: ${this.tags.join(", ")}`);
        console.log(`Дата публікації: ${dateString}`);
    }
}


const newsArray = [
    new News('Новина 1', 'Це текст першої новини', ['політика', 'економіка'], '2024-08-27T10:00:00'),
    new News('Новина 2', 'Це текст другої новини', ['спорт'], '2024-08-21T10:00:00'),
    new News('Новина 3', 'Це текст третьої новини', ['технології'], '2023-08-20T10:00:00')
];

newsArray.forEach(news => news.print());
