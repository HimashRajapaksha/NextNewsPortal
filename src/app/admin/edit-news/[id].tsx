// src/app/admin/edit-news/[id].tsx

"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface NewsItem {
  _id: string;
  title: string;
  content: string;
}

export default function EditNews() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchNews(typeof id === 'string' ? id : id[0]);
    }
  }, [id]);

  const fetchNews = async (newsId: string) => {
    try {
      const response = await axios.get(`http://localhost:8070/news/${newsId}`);
      setTitle(response.data.title);
      setContent(response.data.content);
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('Error fetching news. Please try again.');
    }
  };

  const handleUpdateNews = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await axios.put(`http://localhost:8070/news/update/${id}`, { title, content });
      setSuccess('News updated successfully!');
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 2000);
    } catch (error) {
      setError('Error updating news. Please try again.');
      console.error('Error updating news:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit News</h1>
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
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {success && <div className="text-green-500 text-sm">{success}</div>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Update
        </button>
      </form>
    </div>
  );
}
