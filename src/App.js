// App component
const { useState, useEffect } = React;

const App = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    if (!query) return;
    setLoading(true);
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}&page=${page}`);
    const data = await res.json();
    setBooks(data.docs);
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, [page]);

  const handleSearch = () => {
    setPage(1);
    fetchBooks();
  };

  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement('h1', null, '📚 Book Finder'),
    React.createElement(SearchBar, {
      query: query,
      setQuery: setQuery,
      onSearch: handleSearch
    }),
    loading
      ? React.createElement('p', null, 'Loading...')
      : React.createElement(
          'div',
          { className: 'grid' },
          books.map((b, i) =>
            React.createElement(BookCard, { key: i, book: b })
          )
        ),
    React.createElement(Pagination, {
      page: page,
      setPage: setPage
    })
  );
};
