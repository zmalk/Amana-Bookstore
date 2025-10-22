// src/app/components/BookCard.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  onAddToCart?: (bookId: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onAddToCart }) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        // Full star
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        // Half star
        stars.push(
          <div key={i} className="relative w-4 h-4">
            <svg className="w-4 h-4 text-gray-300 fill-current absolute" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        );
      } else {
        // Empty star
        stars.push(
          <svg key={i} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return <div className="flex items-center">{stars}</div>;
  };

  // Handle add to cart
  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    e.stopPropagation();
    
    if (!book.inStock || isAddingToCart) return;
    
    setIsAddingToCart(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (onAddToCart) {
        onAddToCart(book.id);
      }
      
      // Show success feedback
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      {/* Book Cover - Clickable */}
      <Link href={`/book/${book.id}`} className="block cursor-pointer">
        <div className="relative h-64 w-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
          {/* Book Icon Placeholder */}
          <div className="text-6xl text-gray-400">📚</div>
        </div>
      </Link>
      
      {/* Book Information */}
      <div className="p-4 ">
        <Link href={`/book/${book.id}`} className="block cursor-pointer">
          <h3 className="text-lg font-semibold text-gray-800 truncate hover:text-blue-600 transition-colors duration-200">{book.title}</h3>
          <p className="text-sm text-gray-600 mt-1">by {book.author}</p>
        </Link>
        
        <div className="flex items-center mt-2">
          {renderStars(book.rating)}
          <span className="text-xs text-gray-500 ml-2">({book.reviewCount} reviews)</span>
        </div>
        
        <div className="mt-2">
          {book.genre.slice(0, 2).map((g) => (
            <span key={g} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
              {g}
            </span>
          ))}
          {book.genre.length > 2 && (
            <span className="text-xs text-gray-500">+{book.genre.length - 2} more</span>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <p className="text-xl font-bold text-gray-900">${book.price.toFixed(2)}</p>
          {!book.inStock && (
            <span className="text-xs text-red-600 font-medium">Out of Stock</span>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <Link href={`/book/${book.id}`} className="flex-1 cursor-pointer">
            <button className="w-full px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
              View Details
            </button>
          </Link>
          
          <button
            onClick={handleAddToCart}
            disabled={!book.inStock || isAddingToCart}
            className={`flex-1 px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
              !book.inStock
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : showSuccess
                ? 'bg-green-600 text-white cursor-pointer'
                : isAddingToCart
                ? 'bg-blue-400 text-white cursor-wait'
                : 'bg-red-600 text-white hover:bg-red-200 cursor-pointer'
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
  );
};

export default BookCard;
