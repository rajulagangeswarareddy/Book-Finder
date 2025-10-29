# 📚 Book Finder App

A React-based web application that allows users to search for books using the Open Library API. Users can search for books by title or author and browse through paginated results.

## 🚀 Features

- Search books by title or author
- Display book details including:
  - Cover image
  - Title
  - Author
  - First publication year
- Responsive grid layout
- Pagination support
- Loading state indicators

## 🛠️ Technologies Used

- React 18
- Open Library API
- CSS Grid for layout
- JavaScript async/await for API calls

## 🏃‍♂️ Running the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/rajulagangeswarareddy/book-finder-app.git
   cd book-finder-app
   ```

2. Open index.html in your browser:
   - Using Python's built-in server:
     ```bash
     python -m http.server 5500
     ```
   - Then open http://localhost:5500 in your browser

   OR

   - Using Node.js:
     ```bash
     npm install
     npm run dev
     ```

## 🔍 How to Use

1. Enter a book title or author name in the search box
2. Click "Search" or press Enter
3. Browse through the results using the pagination controls
4. View book details including cover image, title, author, and publication year

## 📝 API Reference

The app uses the Open Library Search API:
- Endpoint: `https://openlibrary.org/search.json`
- Query parameters:
  - `q`: Search query
  - `page`: Page number for pagination

## 📱 Responsive Design

The app is fully responsive and works well on:
- Desktop computers
- Tablets
- Mobile phones

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📜 License

This project is open source and available under the MIT License.