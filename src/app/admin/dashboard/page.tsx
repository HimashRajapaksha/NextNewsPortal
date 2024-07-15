"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import NewsTable from './NewsTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';

interface NewsItem {
  _id: string;
  title: string;
  content: string;
  imageUrl: string; // Added imageUrl field for editing
  createdAt: string;
}

export default function AdminDashboard() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingImage, setEditingImage] = useState<File | null>(null); // State for editing image
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:8070/news');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  const handleEditNews = (newsItem: NewsItem) => {
    setEditingNews(newsItem);
    setTitle(newsItem.title);
    setContent(newsItem.content);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setEditingImage(e.target.files[0]);
    }
  };

  const handleUpdateNews = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (editingNews) {
      try {
        let updatedImageUrl = editingNews.imageUrl;

        // Check if there's a new image to upload
        if (editingImage) {
          const formData = new FormData();
          formData.append('file', editingImage);
          formData.append('upload_preset', 'ik0twiux'); // Ensure this is the correct preset

          const response = await fetch(
            `https://api.cloudinary.com/v1_1/dz1scy2s3/image/upload`,
            {
              method: 'POST',
              body: formData,
            }
          );
          const data = await response.json();
          if (data.error) {
            throw new Error(data.error.message);
          }
          updatedImageUrl = data.secure_url;
        }

        // Update news with new or existing image URL
        await axios.put(`http://localhost:8070/news/update/${editingNews._id}`, { title, content, imageUrl: updatedImageUrl });
        setSuccess('News updated successfully!');
        fetchNews();
        setEditingNews(null);
        setTitle('');
        setContent('');
        setEditingImage(null);
        toast.success('News updated successfully!', {
          position: "bottom-right"
        });
      } catch (error) {
        setError('Error updating news. Please try again.');
        console.error('Error updating news:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed pt-8" style={{ backgroundImage: "url('/images/newsbg.jpg')" }}>
      <ToastContainer />
      <div className="container mx-auto p-4 bg-white bg-opacity-75 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        <div className="flex justify-between items-center mb-4">
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
                  rows={5}
                  style={{ height: '250px' }}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                  
                ></textarea>
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  onChange={handleImageChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              {success && <div className="text-green-500 text-sm">{success}</div>}
              <div className="flex justify-between">
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
              </div>
            </form>
          </div>
        ) : (
          <NewsTable news={news} fetchNews={fetchNews} onEditNews={handleEditNews} />
        )}
      </div>
    </div>
  );
}