import { newsData } from '../data/newsData';

export default function searchNews(searchText) {
  const searchResult = newsData
    .filter((news) => news.title.toLowerCase().includes(searchText.toLowerCase())
      || news.description.toLowerCase().includes(searchText.toLowerCase()));

  if (searchResult.length === 0) {
    return 'ничего не найдено';
  }

  return searchResult;
}
