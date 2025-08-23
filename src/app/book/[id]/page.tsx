// src/app/book/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { books } from '../../data/books';
import { Book, CartItem } from '../../types';

export default function BookDetailPage() {
  const [book, setBook] = useState<Book | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    if (id) {
      const foundBook = books.find((b) => b.id === id);
      if (foundBook) {
        setBook(foundBook);
      } else {
        setError('Book not found.');
      }
      setIsLoading(false);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!book) return;

    const cartItem: CartItem = {
      id: `${book.id}-${Date.now()}`,
      bookId: book.id,
      quantity: quantity,
      addedAt: new Date().toISOString(),
    };

    // Retrieve existing cart from localStorage
    const storedCart = localStorage.getItem('cart');
    const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

    // Check if the book is already in the cart
    const existingItemIndex = cart.findIndex((item) => item.bookId === book.id);

    if (existingItemIndex > -1) {
      // Update quantity if item already exists
      cart[existingItemIndex].quantity += quantity;
    } else {
      // Add new item to cart
      cart.push(cartItem);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Dispatch a custom event to notify the Navbar
    window.dispatchEvent(new CustomEvent('cartUpdated'));

    // Redirect to the cart page after adding
    router.push('/cart');
  };
  
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


  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-red-500">{error}</h1>
        <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  if (!book) {
    return null; // Should be handled by error state
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Book Image */}
        <div className="relative h-96 md:h-[600px] w-full shadow-lg rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
          {/* Book Icon Placeholder */}
          <div className="text-8xl text-gray-400">📚</div>
        </div>

        {/* Book Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
          
          <div className="flex items-center mb-4">
            {renderStars(book.rating)}
            <span className="text-md text-gray-500 ml-2">({book.reviewCount} reviews)</span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">{book.description}</p>

          <div className="mb-4">
            {book.genre.map((g) => (
              <span key={g} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {g}
              </span>
            ))}
          </div>

          <div className="text-3xl font-bold text-blue-600 mb-6">${book.price.toFixed(2)}</div>

          <div className="flex items-center space-x-4 mb-6">
            <label htmlFor="quantity" className="font-semibold">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
              className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold"
          >
            Add to Cart
          </button>

          <Link href="/" className="text-blue-500 hover:underline mt-6 text-center">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
