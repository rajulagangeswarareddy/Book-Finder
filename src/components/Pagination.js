// Pagination component
const Pagination = ({ page, setPage }) => {
  return React.createElement(
    'div',
    { className: 'pagination' },
    React.createElement(
      'button',
      { 
        onClick: () => setPage(page - 1),
        disabled: page === 1
      },
      'Prev'
    ),
    React.createElement('span', null, `Page ${page}`),
    React.createElement(
      'button',
      { onClick: () => setPage(page + 1) },
      'Next'
    )
  );
};
