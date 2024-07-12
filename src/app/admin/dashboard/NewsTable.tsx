"use client";

import React from 'react';
import axios from 'axios';

interface NewsItem {
  _id: string;
  title: string;
  content: string;
}

interface Props {
  news: NewsItem[];
  fetchNews: () => void;
  onEditNews: (newsItem: NewsItem) => void;
}

const NewsTable: React.FC<Props> = ({ news, fetchNews, onEditNews }) => {
  const handleDeleteNews = async (id: string) => {
    const confirmed = confirm('Are you sure you want to delete this news item?');
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:8070/news/delete/${id}`);
        fetchNews();
      } catch (error) {
        console.error('Error deleting news:', error);
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Content</th>
            <th className="py-2 px-4 border-b">Operations</th>
          </tr>
        </thead>
        <tbody>
          {news.map(item => (
            <tr key={item._id}>
              <td className="py-2 px-4 border-b">{item.title}</td>
              <td className="py-2 px-4 border-b">{item.content}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => onEditNews(item)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-600 transition duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteNews(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsTable;
