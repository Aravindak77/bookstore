import React, { useState } from 'react';
import './App.css';
import s1 from './assets/ai_sujatha.jpg'
import s2 from './assets/ka_sujatha.jpg'
import s3 from './assets/kk_sujatha.jpg'
import s4 from './assets/oor_sujatha.jpg'
import k1 from './assets/ps_kalki.jpg'
import k2 from './assets/pk_kalki.jpg'
import k3 from './assets/ss_kalki.jpg'
import k4 from './assets/tp_kalki.jpg'
import r1 from './assets/vm.jpg'
import r2 from './assets/vo.jpg'
import r3 from './assets/mtk.jpg'
import r4 from './assets/okk.jpg'

const booksData = [
  { id: 1, title: 'Ponniyin Selvan', author: 'Kalki', publication: 'Publisher 1', year: 2020, image: k1 },
  { id: 2, title: 'Ayirathil Iruvar', author: 'Sujatha', publication: 'Publisher 2', year: 2019, image: s1 },
  { id: 3, title: 'Vasantha Malli', author: 'Ramanichandran', publication: 'Publisher 3', year: 2018, image: r1 },
  { id: 4, title: 'Parthian kanvu', author: 'Kalki', publication: 'Publisher 4', year: 2017, image: k2 },
  { id: 5, title: 'Valai Oosai', author: 'Ramanichandran', publication: 'Publisher 5', year: 2016, image: r2 },
  { id: 6, title: 'Kolai Arangam', author: 'Sujatha', publication: 'Publisher 1', year: 2015, image: s2 },
  { id: 7, title: 'Sivakaamiyin Saatham ', author: 'Kalki', publication: 'Publisher 2', year: 2014, image: k3 },
  { id: 8, title: 'Mella Thiranthathu Kanavu', author: 'Ramanichandran', publication: 'Publisher 3', year: 2013, image: r3},
  { id: 9, title: 'Oru Kadhal Kadhai', author: 'Ramanichandran', publication: 'Publisher 4', year: 2012, image: r4 },
  { id: 10, title: 'Thiyaga oomi', author: 'Kalki', publication: 'Publisher 5', year: 2011, image: k4 },
  { id: 11, title: 'Kolaiyuthir Kaalam', author: 'Sujatha', publication: 'Publisher 1', year: 2010, image: s3 },
  { id: 12, title: 'Oor Iravil Oru Rayilil', author: 'Sujatha', publication: 'Publisher 2', year: 2009, image: s4 },
];

const App = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchId, setSearchId] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');
  const [publicationFilter, setPublicationFilter] = useState('');
  const [books, setBooks] = useState(booksData);

  const handleSearchTitle = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleSearchId = (e) => {
    setSearchId(e.target.value);
  };

  const handleFilterByAuthor = (e) => {
    setAuthorFilter(e.target.value);
    setPublicationFilter('');
  };

  const handleFilterByPublication = (e) => {
    setPublicationFilter(e.target.value);
    setAuthorFilter('');
  };

  const uniqueAuthors = [...new Set(books.map(book => book.author))];
  const uniquePublications = [...new Set(books.map(book => book.publication))].slice(0, 5); // Limit to 5 publications

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
    book.id.toString().includes(searchId.toLowerCase()) &&
    (authorFilter === '' || book.author === authorFilter) &&
    (publicationFilter === '' || book.publication === publicationFilter)
  );

  return (
    <div className="App">
      <h1>Bookstore</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search by title" value={searchTitle} onChange={handleSearchTitle} />
        <input type="text" placeholder="Search by ID" value={searchId} onChange={handleSearchId} />
        <div className="filter-select">
          <select value={authorFilter} onChange={handleFilterByAuthor}>
            <option value="">Select Author</option>
            {uniqueAuthors.map((author, index) => (
              <option key={index} value={author}>{author}</option>
            ))}
          </select>
          <select value={publicationFilter} onChange={handleFilterByPublication}>
            <option value="">Select Publication</option>
            {uniquePublications.map((publication, index) => (
              <option key={index} value={publication}>{publication}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="books-container">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>ID: {book.id}</p>
            <p>Author: {book.author}</p>
            <p>Publication: {book.publication}</p>
            <p>₹ {book.author == "Sujatha" ? "490":"689 "}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
