"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface NewsItem {
  _id: string;
  title: string;
  content: string;
  imageUrl: string; // Add the imageUrl field
}

export default function Home() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const router = useRouter();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:8070/news');
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const handleAdminLogin = () => {
    router.push('/admin/login');
  };

  const handleNewsClick = (newsItem: NewsItem) => {
    setSelectedNews(newsItem);
  };

  const closeNews = () => {
    setSelectedNews(null);
  };

  const filteredNews = news.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-white p-8">
      <div className="absolute top-4 right-4">
        <button
          onClick={handleAdminLogin}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Admin Login
        </button>
      </div>
      <div className="relative z-0 flex flex-col items-center mb-16">
        <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
        <h1 className="text-4xl font-bold mt-4">Welcome to Macro News Portal</h1>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-8">
        <div className="flex w-full justify-center mb-8 lg:mb-0">
          <input 
            type="text" 
            placeholder="Search news by title..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full max-w-lg p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {selectedNews ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg relative">
            <button onClick={closeNews} className="absolute top-4 right-4 text-2xl font-bold">X</button>
            {selectedNews.imageUrl && (
              <Image
                src={selectedNews.imageUrl}
                alt={selectedNews.title}
                width={800}
                height={450}
                className="w-full h-auto mb-4 rounded-lg"
              />
            )}
            <h2 className="text-4xl font-bold mb-4">{selectedNews.title}</h2>
            <p className="text-gray-700">{selectedNews.content}</p>
          </div>
        </div>
      ) : null}

      <div className="grid gap-8 text-center lg:grid-cols-3 lg:text-left w-full max-w-5xl">
        {filteredNews.map((item) => (
          <div key={item._id} className="group rounded-lg border border-gray-200 bg-white p-6 transition-all shadow-md hover:shadow-lg">
            {item.imageUrl && (
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={400}
                height={225}
                className="w-full h-auto mb-4 rounded-lg"
              />
            )}
            <h2
              onClick={() => handleNewsClick(item)}
              className="cursor-pointer text-2xl font-semibold mb-4 hover:text-blue-500 transition-colors"
            >
              {item.title}
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">-&gt;</span>
            </h2>
            <p className="text-gray-600 text-sm line-clamp-3">{item.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
