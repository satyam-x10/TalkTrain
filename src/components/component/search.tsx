// @ts-nocheck
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter hook for navigation
import data from "../../lib/scraper/train_data.json";

export function Search() {
  const router = useRouter(); // Initialize useRouter hook

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedTrain, setSelectedTrain] = useState(null); // Track selected train

  const handleSearch = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const filteredResults = data.filter((train) => {
      return (
        train.train_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        train.train_number.includes(searchQuery)
      );
    });
    if (searchQuery) {
      setSearchResults(filteredResults);
    }
  };

  // Function to handle train selection
  const handleTrainSelect = (trainNumber:any) => {
    setSelectedTrain(trainNumber);
  };

  // Function to start chat with selected train
  const startChat = () => {
    if (selectedTrain) {
      // Redirect to the route with selected train number
      router.push(`/${selectedTrain}`);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden m-4">
        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Find Your Train
          </h2>
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            onSubmit={handleSearch}
          >
            <input
              className="p-2 block text-black w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter train name or number"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
            >
              Search Trains
            </button>
          </form>
        </div>
      </div>
      {formSubmitted && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden m-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Search Results
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-800">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Train Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Train Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((train) => (
                  <tr
                    key={train.serial_no}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                      {train.train_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {train.train_number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <button
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => handleTrainSelect(train.train_number)}
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {selectedTrain && (
            <button
              className=" w-full col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={startChat}
            >
              Start Chat
            </button>
          )}
        </div>
      )}
    </div>
  );
}
