// BookCard component
const BookCard = ({ book }) => {
  const placeholder = '/src/assets/placeholder.png';
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : placeholder;

  return React.createElement(
    'div',
    { className: 'book-card' },
    React.createElement('img', { src: cover, alt: book.title }),
    React.createElement('h3', null, book.title),
    React.createElement('p', null, book.author_name ? book.author_name[0] : 'Unknown Author'),
    React.createElement('p', null, book.first_publish_year || '—')
  );
};
