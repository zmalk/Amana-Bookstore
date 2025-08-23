// src/app/components/BookCard.tsx
import React from 'react';
import Link from 'next/link';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-yellow-400 ${i <= rating ? 'fill-current' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <Link href={`/book/${book.id}`} className="block">
        <div className="relative h-64 w-full bg-gray-200 flex items-center justify-center">
          {/* Book Icon Placeholder */}
          <div className="text-6xl text-gray-400">📚</div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{book.title}</h3>
          <p className="text-sm text-gray-600 mt-1">by {book.author}</p>
          <div className="flex items-center mt-2">
            {renderStars(book.rating)}
            <span className="text-xs text-gray-500 ml-2">({book.reviewCount} reviews)</span>
          </div>
          <div className="mt-2">
            {book.genre.map((g) => (
              <span key={g} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                {g}
              </span>
            ))}
          </div>
          <p className="text-xl font-bold text-gray-900 mt-2">${book.price.toFixed(2)}</p>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
            View Details
          </button>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
