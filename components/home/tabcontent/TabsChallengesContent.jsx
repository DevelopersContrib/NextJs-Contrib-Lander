"use client"
import React, { useState } from 'react';
import { FaLayerGroup } from 'react-icons/fa6';
import TasksComponent from '../component/TasksComponent';
import DataTable from 'datatables.net-dt';
import { useEffect } from "react"
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
  useEffect(() => {
  let table = new DataTable('#tbl-challenges', {
    "order": [[0, "desc"]],
      "columnDefs": [
      {  "searchable": false,
          "visible": false,
          "targets": 0 
      },
      {
        "render": function ( data, type, row ) {
          var id = row[0];
          var title = data;
          var slug = row[3];
          return '<a href="https://www.contrib.com/challenge/details/'+id+'/'+slug+'" target="_blank" class="text-decoration-none">'+title+'</a>';
        },
        "targets": 1
      },
      {
        "targets": 2
      },
      {
        "render": function ( data, type, row ) {
          var id = row[0];
          var slug = data;
          return '<a href="https://www.contrib.com/challenge/details/'+id+'/'+slug+'" target="_blank" class="btn btn-sm btn-primary">View</a>';
        },
        "searchable": false,
        "targets":  3  
      },
      ],
      "processing": true,
      "serverSide": true,
      "ajax":"https://www.contrib.com/brand/getchallengesbrand"
  });
}, [])

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
              <table  id="tbl-challenges" className="table table-striped table-minimal-striped !tw-w-full">
                <thead>
                  <tr>
                    <th> Id</th>
                    <th> Title</th>
                    <th> Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
      <TasksComponent getCategories={getCategories} domain={domain} />
    </div>
  );
};

export default TabsChallengesContent;
