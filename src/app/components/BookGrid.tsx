// src/app/components/BookGrid.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { Book } from '../types';
import BookCard from './BookCard';

interface BookGridProps {
  books: Book[];
}

const BookGrid: React.FC<BookGridProps> = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  // Memoize featured books to prevent re-calculation on every render
  const featuredBooks = useMemo(() => books.filter(book => book.featured), [books]);

  // Get all unique genres for the filter dropdown
  const genres = useMemo(() => {
    const allGenres = books.flatMap(book => book.genre);
    return ['All', ...new Set(allGenres)];
  }, [books]);

  // Filter books based on search query and selected genre
  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesSearch = 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesGenre = 
        selectedGenre === 'All' || book.genre.includes(selectedGenre);

      return matchesSearch && matchesGenre;
    });
  }, [books, searchQuery, selectedGenre]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Books Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Search and Filter Controls */}
      <section className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full md:w-1/4">
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
      </section>

      {/* All Books Grid */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">All Books</h2>
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No books found matching your criteria.</p>
        )}
      </section>
    </div>
  );
};

export default BookGrid;
