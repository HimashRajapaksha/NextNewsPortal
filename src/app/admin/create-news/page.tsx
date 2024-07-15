"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Cloudinary } from 'cloudinary-core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cloudinary = new Cloudinary({ cloud_name: 'dz1scy2s3', secure: true });

export default function CreateNews() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleCreateNews = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      let imageUrl = '';

      if (image) {
        const formData = new FormData();
        formData.append('file', image);
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
        imageUrl = data.secure_url;
      }

      await axios.post('http://localhost:8070/news/add', { title, content, imageUrl });
      setSuccess('News created successfully!');
      setTitle('');
      setContent('');
      setImage(null);
      toast.success('News created successfully!', {
        position: "bottom-right"
      });
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 1500); // Redirect to dashboard after 1.5 seconds
    } catch (error) {
      setError('Error creating news. Please try again.');
      console.error('Error creating news:', error);
    }
  };

  const handleCancel = () => {
    router.push('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4" style={{ backgroundImage: `url('/images/createbg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <ToastContainer />
      <div className="container max-w-xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Create News</h1>
        <form onSubmit={handleCreateNews} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
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
              onChange={e => setContent(e.target.value)}
              rows={5}
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
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
