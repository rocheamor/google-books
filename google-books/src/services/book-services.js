const fetchBooks = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=40`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Error occurred while fetching book data');
    }

    const data = await response.json();

    const items = data.items || [];

    const books = items.map((item) => {
      const bookInfo = item.volumeInfo || {};
      const imageLinks = bookInfo.imageLinks || {};
      const thumbnail = imageLinks.thumbnail || '';

      const title = bookInfo.title || '';
      const authors = bookInfo.authors || [];
      const description = bookInfo.description || '';
      const publisher = bookInfo.publisher || '';
      const publishedDate = bookInfo.publishedDate || '';
      
      return {
        title: title ? title : "No title provided",
        authors: authors.length > 0 ? authors : ['Unknown Author'],
        description: description ? description : 'No description provided',
        publisher: publisher ? publisher : 'No publisher data provided',
        publishedDate: publishedDate ? publishedDate : 'No published date data provided',
        imageLinks: {
          thumbnail: thumbnail,
        },
      };
    });

    return books;

  } catch (error) {
    console.log(error);
    return [];
  }
};

export default fetchBooks;
