import React, { useState } from 'react';
import { FaLayerGroup } from 'react-icons/fa6';
import DataTable from "react-data-table-component";
import TasksComponent from '../component/TasksComponent';
import Paper from "@mui/material/Paper";

function TabsChallengesContent({ getCategories, domain, brandChallenges }) {
  const columns = [
    {
      name: 'Title',
      cell: row => (
        <a href={`https://www.contrib.com/challenge/details/${row.ChallengeId}/${row.Slug}`} target="_blank" rel="noopener noreferrer">
          {row.ChallengeTitle}
        </a>
      ),
    },
    {
      name: 'Description',
      selector: row => row.ChallengeDesc,
      sortable: false, // Disable default sorting for this column
      cell: row => {
        // Extract text content from HTML
        const textContent = row.ChallengeDesc.replace(/<[^>]+>/g, '');
        return <div>{textContent}</div>;
      },
      width: '40%', // Set the width to 40% of the table container
    },
    {
      name: 'Action',
      cell: row => (
        <a href={`https://www.contrib.com/challenge/details/${row.ChallengeId}/${row.Slug}`} target="_blank" className="btn btn-sm btn-primary">View</a>
      ),
    },
  ];

  const initialData = brandChallenges.data.challenges;
  

  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(initialData);

  const filteredData = data.filter(item =>
    item.ChallengeTitle.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="classmain">
      <div className="col-lg-12">
        <div className="m-portlet">
          <div className="m-portlet__head">
            <div className="m-portlet__head-caption">
              <div className="m-portlet__head-title">
                <span className="m-portlet__head-icon">
                  <FaLayerGroup className="tw-w-5 tw-h-5" />
                </span>
                <h3 className="m-portlet__head-text text-capitalize">
                  Challenges for {domain}. Showing latest challenges on Contrib
                </h3>
              </div>
            </div>
          </div>
          <div className="m-portlet__body">
            <div className="input-search">
              <input
                type="text"
                placeholder="Search by title..."
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                className="border rounded px-3 py-1"
              />
            </div>
            <Paper>
              <DataTable
                columns={columns}
                data={filteredData}
                pagination
              />
            </Paper>
          </div>
        </div>
      </div>
      <TasksComponent getCategories={getCategories} domain={domain} />
    </div>
  );
};

export default TabsChallengesContent;
