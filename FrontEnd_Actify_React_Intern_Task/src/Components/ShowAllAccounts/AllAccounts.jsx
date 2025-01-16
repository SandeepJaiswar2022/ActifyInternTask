import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers, searchBasedOn } from '../../States/UserProfile/UserProfileSlice';
import { utils, writeFile } from 'xlsx';
import { AiOutlineFileExcel } from 'react-icons/ai';

function AllAccounts() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const { filteredUsers } = useSelector((store) => store.user); // State from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(searchBasedOn({ city: searchQuery }));
    // console.log(searchQuery);

    setCurrentPage(1);
  };

  const handleSort = () => {
    const sortedUsers = [...filteredUsers].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.firstName.localeCompare(b.firstName);
      } else {
        return b.firstName.localeCompare(a.firstName);
      }
    });
    return sortedUsers;
  };

  const sortedUsers = handleSort();
  const startIndex = (currentPage - 1) * rowsPerPage;
  const usersToDisplay = sortedUsers.slice(startIndex, startIndex + rowsPerPage);

  const totalPages = Math.ceil(sortedUsers.length / rowsPerPage);

  const handleDownloadExcel = () => {
    const dataToExport = filteredUsers.map((user) => ({
      FullName: `${user.firstName} ${user.lastName}`,
      Email: user.email,
      ContactNo: user.contactNo,
      State: user.state,
      City: user.city,
      Pin: user.pinCode,
    }));

    const worksheet = utils.json_to_sheet(dataToExport);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'FilteredUsers');
    writeFile(workbook, 'FilteredUsers.xlsx');
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 border rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
            } hover:bg-blue-300`}
        >
          {i}
        </button>
      );
    }
    return (
      <>
        {pages.length > 3 && currentPage > 3 && (
          <button
            onClick={() => setCurrentPage(1)}
            className="px-3 py-1 border rounded bg-gray-100 text-gray-800 hover:bg-blue-300"
          >
            1
          </button>
        )}
        {currentPage > 3 && <span className="px-2">...</span>}
        {pages.slice(Math.max(0, currentPage - 3), currentPage + 2)}
        {pages.length > currentPage + 2 && <span className="px-2">...</span>}
        {pages.length > 3 && currentPage < totalPages - 2 && (
          <button
            onClick={() => setCurrentPage(totalPages)}
            className="px-3 py-1 border rounded bg-gray-100 text-gray-800 hover:bg-blue-300"
          >
            {totalPages}
          </button>
        )}
      </>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and controls */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
        {/* Search bar and button */}
        <div className="flex flex-wrap w-full md:w-auto gap-2">
          <input
            type="text"
            placeholder="Search by city"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 focus:outline-none border border-black  rounded "
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        {/* Excel download and sort buttons */}
        <div className="flex flex-col items-center md:items-start md:flex-row gap-2 w-full md:w-auto justify-center">
          <button
            onClick={handleDownloadExcel}
            className="text-green-600 text-2xl hover:text-green-800 hover:scale-105"
            title="Download Excel"
          >
            <AiOutlineFileExcel className='text-2xl mt-2' />
          </button>
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Sort ({sortOrder === 'asc' ? 'Asc' : 'Desc'})
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm text-left text-gray-800">
          <thead className="bg-gray-100 text-xs uppercase font-semibold text-gray-600">
            <tr>
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Contact No.</th>
              <th className="px-4 py-2">State</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Pin</th>
            </tr>
          </thead>
          <tbody>
            {usersToDisplay.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{`${user.firstName} ${user.lastName}`}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.contactNo}</td>
                <td className="px-4 py-2">{user.state}</td>
                <td className="px-4 py-2">{user.city}</td>
                <td className="px-4 py-2">{user.pinCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex flex-wrap justify-center items-center mt-4 gap-2">
        {renderPagination()}
      </div>
    </div>
  );
}

export default AllAccounts;
