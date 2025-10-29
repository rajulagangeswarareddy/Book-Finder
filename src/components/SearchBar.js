// SearchBar component
const SearchBar = ({ query, setQuery, onSearch }) => {
  return React.createElement(
    'div',
    { className: 'search-bar' },
    React.createElement('input', {
      type: 'text',
      placeholder: 'Search for books...',
      value: query,
      onChange: (e) => setQuery(e.target.value)
    }),
    React.createElement(
      'button',
      { onClick: onSearch },
      'Search'
    )
  );
};
