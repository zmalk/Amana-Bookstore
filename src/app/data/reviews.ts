// src/app/data/reviews.ts
import { Review } from '../types';

export const reviews: Review[] = [
  // Reviews for The Alchemist (1)
  {
    id: 'review-1',
    bookId: '1',
    author: 'Sarah Johnson',
    rating: 5,
    title: 'Life-changing masterpiece',
    comment: 'This book completely changed my perspective on life. Coelho\'s writing is both simple and profound. The journey of Santiago resonates with anyone who has ever had a dream.',
    timestamp: '2024-01-15T10:30:00Z',
    verified: true
  },
  {
    id: 'review-2',
    bookId: '1',
    author: 'Michael Chen',
    rating: 4,
    title: 'Beautiful allegory',
    comment: 'A beautiful story about following your dreams. Some parts felt a bit repetitive, but the overall message is powerful and inspiring.',
    timestamp: '2024-02-03T14:22:00Z',
    verified: true
  },
  {
    id: 'review-3',
    bookId: '1',
    author: 'Emma Rodriguez',
    rating: 5,
    title: 'Must read for everyone',
    comment: 'I\'ve read this book three times and discover something new each time. The wisdom about listening to your heart and pursuing your personal legend is timeless.',
    timestamp: '2024-02-20T09:15:00Z',
    verified: false
  },
  {
    id: 'review-4',
    bookId: '1',
    author: 'David Thompson',
    rating: 3,
    title: 'Good but overhyped',
    comment: 'It\'s a decent book with good messages, but I think it\'s a bit overhyped. The story is simple and the philosophy, while nice, isn\'t groundbreaking.',
    timestamp: '2024-03-01T16:45:00Z',
    verified: true
  },
  {
    id: 'review-5',
    bookId: '1',
    author: 'Lisa Park',
    rating: 5,
    title: 'Perfect for soul searching',
    comment: 'Read this during a difficult time in my life. It reminded me to trust the journey and believe in my dreams. Beautifully written and deeply moving.',
    timestamp: '2024-03-12T11:20:00Z',
    verified: true
  },

  // Reviews for Sapiens (book-2)
  {
    id: 'review-6',
    bookId: '2',
    author: 'Professor Williams',
    rating: 5,
    title: 'Brilliant analysis of human history',
    comment: 'Harari presents complex historical and anthropological concepts in an accessible way. This book challenges many assumptions about human civilization and progress.',
    timestamp: '2024-01-08T13:30:00Z',
    verified: true
  },
  {
    id: 'review-7',
    bookId: '2',
    author: 'Alex Kumar',
    rating: 4,
    title: 'Thought-provoking but dense',
    comment: 'Fascinating insights into human evolution and society. Some chapters are quite dense, but the overall narrative is compelling and well-researched.',
    timestamp: '2024-01-25T08:45:00Z',
    verified: true
  },
  {
    id: 'review-8',
    bookId: '2',
    author: 'Rachel Green',
    rating: 5,
    title: 'Mind-blowing perspective',
    comment: 'This book completely changed how I think about human history, religion, and society. Harari\'s ability to connect seemingly unrelated events is remarkable.',
    timestamp: '2024-02-14T15:10:00Z',
    verified: false
  },
  {
    id: 'review-9',
    bookId: '2',
    author: 'James Wilson',
    rating: 4,
    title: 'Great overview, some bias',
    comment: 'Excellent broad overview of human history. However, I felt some of Harari\'s conclusions were a bit speculative. Still highly recommend for the big picture thinking.',
    timestamp: '2024-02-28T12:00:00Z',
    verified: true
  },
  {
    id: 'review-10',
    bookId: '2',
    author: 'Maria Santos',
    rating: 5,
    title: 'Essential reading',
    comment: 'Should be required reading in schools. Harari makes you question everything you thought you knew about human progress and civilization.',
    timestamp: '2024-03-05T17:30:00Z',
    verified: true
  },

  // Reviews for Atomic Habits (book-3)
  {
    id: 'review-11',
    bookId: '3',
    author: 'Jennifer Lee',
    rating: 5,
    title: 'Actually works!',
    comment: 'I\'ve tried many self-help books, but this one actually delivers. The 1% better concept is simple but powerful. I\'ve built several new habits using Clear\'s methods.',
    timestamp: '2024-01-20T09:00:00Z',
    verified: true
  },
  {
    id: 'review-12',
    bookId: '3',
    author: 'Robert Kim',
    rating: 4,
    title: 'Practical and actionable',
    comment: 'Clear provides concrete strategies backed by research. The four laws of behavior change are easy to remember and implement. Some examples felt repetitive though.',
    timestamp: '2024-02-05T14:15:00Z',
    verified: true
  },
  {
    id: 'review-13',
    bookId: '3',
    author: 'Amanda Foster',
    rating: 5,
    title: 'Life-changing habits book',
    comment: 'This book helped me understand why I struggled with habits before. The identity-based approach is brilliant. I\'ve completely transformed my daily routine.',
    timestamp: '2024-02-18T10:45:00Z',
    verified: false
  },
  {
    id: 'review-14',
    bookId: '3',
    author: 'Steve Martinez',
    rating: 4,
    title: 'Good framework, nothing revolutionary',
    comment: 'Solid book with a good framework for building habits. The advice is practical, though not entirely new if you\'ve read other productivity books.',
    timestamp: '2024-03-02T16:20:00Z',
    verified: true
  },
  {
    id: 'review-15',
    bookId: '3',
    author: 'Nicole Brown',
    rating: 5,
    title: 'Perfect for beginners',
    comment: 'If you\'re new to habit formation, this is the perfect starting point. Clear explains complex behavioral science in simple terms with actionable steps.',
    timestamp: '2024-03-15T13:30:00Z',
    verified: true
  },

  // Reviews for The Hitchhiker's Guide to the Galaxy (book-4)
  {
    id: 'review-16',
    bookId: '4',
    author: 'Tom Anderson',
    rating: 5,
    title: 'Hilarious and brilliant',
    comment: 'Adams\' humor is unmatched. This book is both incredibly funny and surprisingly philosophical. The absurdity of the universe has never been so entertaining.',
    timestamp: '2024-01-12T11:00:00Z',
    verified: true
  },
  {
    id: 'review-17',
    bookId: '4',
    author: 'Sophie Clark',
    rating: 4,
    title: 'Quirky British humor',
    comment: 'If you enjoy dry, absurd British humor, you\'ll love this. The plot is wonderfully chaotic and the characters are memorable. Don\'t panic!',
    timestamp: '2024-01-28T15:45:00Z',
    verified: true
  },
  {
    id: 'review-18',
    bookId: '4',
    author: 'Mark Johnson',
    rating: 5,
    title: 'Sci-fi comedy gold',
    comment: 'A perfect blend of science fiction and comedy. Adams created something truly unique. The Guide entries are hilarious and the story is surprisingly touching.',
    timestamp: '2024-02-10T08:30:00Z',
    verified: false
  },
  {
    id: 'review-19',
    bookId: '4',
    author: 'Kate Miller',
    rating: 3,
    title: 'Not for everyone',
    comment: 'I can see why people love it, but the humor didn\'t really land for me. The randomness felt a bit forced at times. Still appreciate the creativity.',
    timestamp: '2024-02-25T12:15:00Z',
    verified: true
  },
  {
    id: 'review-20',
    bookId: '4',
    author: 'Chris Davis',
    rating: 5,
    title: 'Timeless classic',
    comment: 'Read this as a teenager and again as an adult. It\'s even funnier now. Adams\' wit and imagination are unparalleled. A true masterpiece of comedy.',
    timestamp: '2024-03-08T14:00:00Z',
    verified: true
  },

  // Reviews for 1984 (book-5)
  {
    id: 'review-21',
    bookId: '5',
    author: 'Dr. Patricia White',
    rating: 5,
    title: 'Terrifyingly relevant',
    comment: 'Orwell\'s vision feels more relevant than ever. The concepts of doublethink, newspeak, and surveillance are chillingly prescient. A must-read for understanding modern society.',
    timestamp: '2024-01-05T10:20:00Z',
    verified: true
  },
  {
    id: 'review-22',
    bookId: '5',
    author: 'Benjamin Taylor',
    rating: 4,
    title: 'Dystopian masterpiece',
    comment: 'Powerful and disturbing in all the right ways. Orwell\'s writing is clear and the world-building is incredible. Some parts are quite heavy, but that\'s the point.',
    timestamp: '2024-01-22T16:30:00Z',
    verified: true
  },
  {
    id: 'review-23',
    bookId: '5',
    author: 'Hannah Moore',
    rating: 5,
    title: 'Essential dystopian fiction',
    comment: 'This book should be required reading. The parallels to modern surveillance and propaganda are striking. Orwell was truly ahead of his time.',
    timestamp: '2024-02-07T09:45:00Z',
    verified: false
  },
  {
    id: 'review-24',
    bookId: '5',
    author: 'Ryan Cooper',
    rating: 4,
    title: 'Dark but important',
    comment: 'Incredibly well-written but deeply unsettling. The psychological manipulation depicted is both fascinating and horrifying. Important book for our times.',
    timestamp: '2024-02-21T13:10:00Z',
    verified: true
  },
  {
    id: 'review-25',
    bookId: '5',
    author: 'Elena Vasquez',
    rating: 5,
    title: 'Orwell\'s prophetic vision',
    comment: 'Reading this in 2024 is both enlightening and terrifying. Orwell\'s understanding of power, control, and human nature is unmatched. Brilliant and disturbing.',
    timestamp: '2024-03-10T11:25:00Z',
    verified: true
  },

  // Reviews for To Kill a Mockingbird (book-6)
  {
    id: 'review-26',
    bookId: '6',
    author: 'Mary Johnson',
    rating: 5,
    title: 'Timeless American classic',
    comment: 'Harper Lee\'s masterpiece remains as powerful today as when it was first published. Scout\'s perspective on justice and morality is both innocent and profound.',
    timestamp: '2024-01-18T14:40:00Z',
    verified: true
  },
  {
    id: 'review-27',
    bookId: '6',
    author: 'Carlos Rodriguez',
    rating: 4,
    title: 'Important but dated',
    comment: 'An important book that tackles difficult themes. While some aspects feel dated, the core message about empathy and justice remains relevant.',
    timestamp: '2024-02-01T10:15:00Z',
    verified: true
  },
  {
    id: 'review-28',
    bookId: '6',
    author: 'Linda Thompson',
    rating: 5,
    title: 'Beautiful and heartbreaking',
    comment: 'Lee\'s prose is beautiful and the story is both heartwarming and heartbreaking. Atticus Finch remains one of literature\'s great moral figures.',
    timestamp: '2024-02-16T15:50:00Z',
    verified: false
  },
  {
    id: 'review-29',
    bookId: '6',
    author: 'Kevin Park',
    rating: 4,
    title: 'Complex moral landscape',
    comment: 'A nuanced exploration of prejudice and justice in the American South. The child\'s perspective adds both innocence and insight to heavy themes.',
    timestamp: '2024-03-01T08:20:00Z',
    verified: true
  },
  {
    id: 'review-30',
    bookId: '6',
    author: 'Grace Williams',
    rating: 5,
    title: 'Essential American literature',
    comment: 'Every American should read this book. Lee\'s exploration of racism, childhood, and moral courage is masterful. Scout and Atticus are unforgettable characters.',
    timestamp: '2024-03-14T12:35:00Z',
    verified: true
  },

  // Reviews for The Great Gatsby (book-7)
  {
    id: 'review-31',
    bookId: '7',
    author: 'Jonathan Smith',
    rating: 4,
    title: 'Jazz Age masterpiece',
    comment: 'Fitzgerald captures the excess and emptiness of the Jazz Age perfectly. Gatsby\'s tragic pursuit of the American Dream is both beautiful and devastating.',
    timestamp: '2024-01-10T13:25:00Z',
    verified: true
  },
  {
    id: 'review-32',
    bookId: '7',
    author: 'Ashley Chen',
    rating: 5,
    title: 'Poetic and profound',
    comment: 'Fitzgerald\'s prose is absolutely gorgeous. Every sentence is crafted with care. The symbolism and themes are rich and multilayered.',
    timestamp: '2024-01-30T09:40:00Z',
    verified: true
  },
  {
    id: 'review-33',
    bookId: '7',
    author: 'Daniel Garcia',
    rating: 3,
    title: 'Overrated classic',
    comment: 'I can appreciate the literary merit, but I found the characters unlikable and the plot somewhat thin. The writing is beautiful though.',
    timestamp: '2024-02-12T16:10:00Z',
    verified: false
  },
  {
    id: 'review-34',
    bookId: '7',
    author: 'Michelle Lee',
    rating: 5,
    title: 'American Dream critique',
    comment: 'A brilliant critique of the American Dream and the corruption of wealth. Nick\'s narration provides the perfect lens through which to view Gatsby\'s tragedy.',
    timestamp: '2024-02-26T11:55:00Z',
    verified: true
  },
  {
    id: 'review-35',
    bookId: '7',
    author: 'Paul Anderson',
    rating: 4,
    title: 'Short but powerful',
    comment: 'Amazing how much Fitzgerald packed into such a short novel. The green light symbolism and the final paragraph are unforgettable. A true American classic.',
    timestamp: '2024-03-11T14:20:00Z',
    verified: true
  },

  // Reviews for Pride and Prejudice (book-8)
  {
    id: 'review-36',
    bookId: '8',
    author: 'Elizabeth Brown',
    rating: 5,
    title: 'Austen at her finest',
    comment: 'Jane Austen\'s wit and social commentary are unmatched. Elizabeth Bennet is one of literature\'s greatest heroines. The romance with Darcy is perfectly developed.',
    timestamp: '2024-01-14T10:05:00Z',
    verified: true
  },
  {
    id: 'review-37',
    bookId: '8',
    author: 'William Davis',
    rating: 4,
    title: 'Timeless romance',
    comment: 'Despite being over 200 years old, this story feels fresh and relevant. Austen\'s characters are complex and her social observations are sharp.',
    timestamp: '2024-02-04T15:30:00Z',
    verified: true
  },
  {
    id: 'review-38',
    bookId: '8',
    author: 'Victoria Martinez',
    rating: 5,
    title: 'Perfect blend of romance and satire',
    comment: 'Austen masterfully balances romance with social satire. The character development is superb and the dialogue sparkles with wit and intelligence.',
    timestamp: '2024-02-19T12:45:00Z',
    verified: false
  },
  {
    id: 'review-39',
    bookId: '8',
    author: 'Richard Wilson',
    rating: 3,
    title: 'Not my cup of tea',
    comment: 'I can see why it\'s considered a classic, but the pacing felt slow to me and I struggled to connect with the characters. The writing is undeniably skillful though.',
    timestamp: '2024-03-03T09:15:00Z',
    verified: true
  },
  {
    id: 'review-40',
    bookId: '8',
    author: 'Catherine Taylor',
    rating: 5,
    title: 'Literary perfection',
    comment: 'This book has everything: memorable characters, brilliant dialogue, social commentary, and a satisfying romance. Austen\'s influence on literature cannot be overstated.',
    timestamp: '2024-03-16T16:40:00Z',
    verified: true
  }
];
