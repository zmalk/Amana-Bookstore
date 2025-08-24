// src/app/components/BookListItem.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Book } from '../types';

interface BookListItemProps {
  book: Book;
  onAddToCart?: (bookId: string) => void;
}

const BookListItem: React.FC<BookListItemProps> = ({ book, onAddToCart }) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

  // Handle add to cart
  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!book.inStock || isAddingToCart) return;
    
    setIsAddingToCart(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (onAddToCart) {
        onAddToCart(book.id);
      }
      
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center p-4 gap-4">
        {/* Book Cover/Icon - Left Side */}
        <Link href={`/book/${book.id}`} className="flex-shrink-0">
          <div className="w-16 h-20 bg-gray-200 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
            <div className="text-2xl text-gray-400">📚</div>
          </div>
        </Link>

        {/* Book Information - Right Side */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            {/* Main Info */}
            <div className="flex-1 min-w-0">
              <Link href={`/book/${book.id}`} className="block group">
                <h3 className="text-lg font-semibold text-gray-800 truncate group-hover:text-blue-600 transition-colors duration-200">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">by {book.author}</p>
              </Link>

              {/* Rating and Reviews */}
              <div className="flex items-center mt-2 gap-2">
                <div className="flex items-center">
                  {renderStars(Math.round(book.rating))}
                </div>
                <span className="text-sm text-gray-500">
                  {book.rating.toFixed(1)} ({book.reviewCount.toLocaleString()} reviews)
                </span>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-1 mt-2">
                {book.genre.slice(0, 3).map((genre) => (
                  <span 
                    key={genre} 
                    className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-medium text-gray-700"
                  >
                    {genre}
                  </span>
                ))}
                {book.genre.length > 3 && (
                  <span className="text-xs text-gray-500 px-2 py-1">
                    +{book.genre.length - 3} more
                  </span>
                )}
              </div>

              {/* Stock Status */}
              {!book.inStock && (
                <span className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full mt-2">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Price and Actions */}
            <div className="flex flex-col items-end gap-3">
              <div className="text-right">
                <p className="text-xl font-bold text-gray-900">${book.price.toFixed(2)}</p>
                {book.featured && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mt-1">
                    Featured
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 min-w-[120px]">
                <Link href={`/book/${book.id}`}>
                  <button className="w-full px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200">
                    View Details
                  </button>
                </Link>
                
                <button
                  onClick={handleAddToCart}
                  disabled={!book.inStock || isAddingToCart}
                  className={`w-full px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                    !book.inStock
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : showSuccess
                      ? 'bg-green-600 text-white'
                      : isAddingToCart
                      ? 'bg-blue-400 text-white cursor-wait'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {showSuccess ? (
                    <span className="flex items-center justify-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Added!
                    </span>
                  ) : isAddingToCart ? (
                    <span className="flex items-center justify-center gap-1">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Adding...
                    </span>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookListItem;
