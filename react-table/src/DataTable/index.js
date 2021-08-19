import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Table } from 'antd';

const DataTable = () => {
   const [gridData, setGridData] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      loadData();
   }, []);

   const loadData = async () => {
      setLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
      setGridData(response.data);
      setLoading(false);
   };

   console.log(gridData);

   const modifiedData = gridData.map(({body, ...item}) => ({
      ...item,
      key: item.id,
      comment: body,
   }));

   return (
      <>
         <h2>Data Table</h2>
      </>
   )
};

export default DataTable;