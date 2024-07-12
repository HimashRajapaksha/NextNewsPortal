"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import NewsTable from './NewsTable'; // Ensure the path is correct
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';

interface NewsItem {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
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
    localStorage.removeItem('token');
    router.push('/');
  };

  const handleEditNews = (newsItem: NewsItem) => {
    setEditingNews(newsItem);
    setTitle(newsItem.title);
    setContent(newsItem.content);
  };

  const handleUpdateNews = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingNews) {
      try {
        await axios.put(`http://localhost:8070/news/update/${editingNews._id}`, { title, content });
        toast.success('News updated successfully!', {
          position: "bottom-right"
        });
        fetchNews();
        setEditingNews(null);
        setTitle('');
        setContent('');
      } catch (error) {
        toast.error('Error updating news. Please try again.', {
          position: "bottom-right"
        });
        console.error('Error updating news:', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
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

      {editingNews ? (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Edit News</h2>
          <form onSubmit={handleUpdateNews} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => setEditingNews(null)}
              className="bg-gray-500 text-white px-4 py-2 ml-4 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <NewsTable news={news} fetchNews={fetchNews} onEditNews={handleEditNews} />
      )}
    </div>
  );
}
