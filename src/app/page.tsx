"use client";

import Image from 'next/image';
import logo from '/public/images/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface NewsItem {
  _id: string;
  title: string;
  content: string;
}

export default function Home() {
  const [news, setNews] = useState<NewsItem[]>([]);
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-white p-8">
      <div className="relative z-0 flex flex-col items-center mb-16">
        <Image src={logo} alt="Logo" width={150} height={150} />
        <h1 className="text-4xl font-bold mt-4">Welcome to Macro News Portal</h1>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-8">
        <div className="flex w-full justify-center mb-8 lg:mb-0">
          <input 
            type="text" 
            placeholder="Search news..."
            className="w-full max-w-lg p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleAdminLogin}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Admin Login
        </button>
      </div>

      <div className="grid gap-8 text-center lg:grid-cols-3 lg:text-left">
        {news.map((item) => (
          <div key={item._id} className="group rounded-lg border border-transparent bg-white px-6 py-8 transition-all card-hover shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              {item.title}
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">-&gt;</span>
            </h2>
            <p className="text-gray-600 text-balance text-sm">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
