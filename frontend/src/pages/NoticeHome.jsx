/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { IoColorFilter } from "react-icons/io5";
import { useSnackbar } from "notistack";
import BackButton from "../components/BackButton";
const NoticeHome = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState([false]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://busschedulingapp-cuet-transitlink-3.onrender.com/notices")
      .then((response) => {
        setNotices(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <div>
        <div>
          <h1 className="text-2xl my-8y text-center font-bold">Notice Board</h1>
        </div>
        <Link to="/notices/create" className="flex flex-row text-sky-800">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
          <h5>Create Notice</h5>
        </Link>
      </div>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <table className="w-full border-separate border-spacing-1">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No</th>
                <th className="border border-slate-600 rounded-md">
                  Notice Title
                </th>
                <th className="border border-slate-600 rounded-md">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice, index) => (
                <tr key={notice._id} className="h-8">
                  <td className="border border-slate-600 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-600 rounded-md text-center">
                    {notice?.noticeTitle}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <h2>Operations</h2>
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/notices/details/${notice._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`/notices/delete/${notice._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-800" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default NoticeHome;
