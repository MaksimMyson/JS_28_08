class NewsFeed {
    constructor() {
      this.news = [];
    }
  

    get newsCount() {
      return this.news.length;
    }
  

    displayNews() {
      if (this.news.length === 0) {
        console.log("Немає новин для відображення.");
      } else {
        this.news.forEach((item, index) => {
          console.log(`Новина ${index + 1}: ${item.title} (${item.date})`);
        });
      }
    }
  
   
    addNews(title, date, tags) {
      const newNews = { title, date: new Date(date), tags };
      this.news.push(newNews);
      console.log(`Новину "${title}" додано.`);
    }
  
   
    removeNews(index) {
      if (index >= 0 && index < this.news.length) {
        const removedNews = this.news.splice(index, 1);
        console.log(`Новину "${removedNews[0].title}" видалено.`);
      } else {
        console.log("Неправильний індекс.");
      }
    }
  
   
    sortNews() {
      this.news.sort((a, b) => b.date - a.date);
      console.log("Новини відсортовано за датою.");
    }
  
    
    searchNewsByTag(tag) {
      const filteredNews = this.news.filter(item => item.tags.includes(tag));
      if (filteredNews.length > 0) {
        console.log(`Новини з тегом "${tag}":`);
        filteredNews.forEach((item, index) => {
          console.log(`Новина ${index + 1}: ${item.title} (${item.date})`);
        });
      } else {
        console.log(`Новин з тегом "${tag}" не знайдено.`);
      }
      return filteredNews;
    }
  }
  
  
  const myNewsFeed = new NewsFeed();
  
 
  myNewsFeed.addNews("Перша новина", "2024-08-01", ["політика", "економіка"]);
  myNewsFeed.addNews("Друга новина", "2024-08-30", ["спорт", "здоров'я"]);
  myNewsFeed.addNews("Третя новина", "2024-08-15", ["технології"]);
  
  
  console.log(`Кількість новин: ${myNewsFeed.newsCount}`);
  
  
  myNewsFeed.displayNews();
  
  
  myNewsFeed.sortNews();
  myNewsFeed.displayNews();
  
  
  myNewsFeed.searchNewsByTag("технології");
  

  myNewsFeed.removeNews(1);
  myNewsFeed.displayNews();
  