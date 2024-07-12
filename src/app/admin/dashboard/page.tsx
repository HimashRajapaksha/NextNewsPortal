"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import NewsTable from './NewsTable'; // Ensure the path is correct

interface NewsItem {
  _id: string;
  title: string;
  content: string;
}

export default function AdminDashboard() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const router = useRouter();

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:8070/news');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    router.push('/'); // Redirect to home page after logout
  };

  const handleEditNews = (id: string) => {
    router.push(`/admin/edit-news/${id}`); // Navigate to edit news page
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
        <button
          onClick={() => router.push('/admin/create-news')}
          className="bg-blue-500 text-white px-4 py-2 ml-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Create News
        </button>
      </div>

      <NewsTable news={news} fetchNews={fetchNews} onEditNews={handleEditNews} />
    </div>
  );
}
