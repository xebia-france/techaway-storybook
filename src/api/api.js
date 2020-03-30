import authors from 'data/authors';
import articles from '../data/articles';

const fetchTimeMock = 1000;

const getAuthor = authorId =>
  new Promise(resolve =>
    setTimeout(
      resolve,
      fetchTimeMock,
      authors.find(author => author.id === authorId),
    ),
  );

const getArticlesByAuthor = authorId =>
  new Promise(resolve =>
    setTimeout(
      resolve,
      fetchTimeMock,
      articles.filter(article => article.authorId === authorId),
    ),
  );

export const fetchDataByAuthorId = async authorId =>
  Promise.all([
    getAuthor(authorId),
    getArticlesByAuthor(authorId),
  ]).then(([author, articles]) =>
    author
      ? Promise.resolve({ author, articles })
      : Promise.reject(new Error('no_author')),
  );

export const fetchAllAuthors = async () =>
  new Promise(resolve =>
    setTimeout(
      resolve,
      fetchTimeMock,
      authors.map(author => ({ name: author.name, id: author.id })),
    ),
  );
