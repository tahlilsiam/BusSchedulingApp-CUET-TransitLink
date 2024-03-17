/* eslint-disable no-unused-vars */
import BackButtonToNotice from "../components/BackButtonToNotice";
import Spinner from "../components/spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useSnackbar } from "notistack";

const DeleteNotice = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteNotice = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/notices/${id}`)
      .then((response) => {
        setLoading(false);
        enqueueSnackbar("Notice is deleted", { variant: "success" });
        navigate("/notices");
      })
      .catch((error) => {
        // alert('Some Error Occur. Check console');
        enqueueSnackbar("Error", { variant: "error" });
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div>
      <BackButtonToNotice/>
      <h1 className="text-3xl my-4 text-center mx-auto font-bold">
        Delete Notice
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl">Are you sure you want to delete the Notice?</h3>
          <button
            className="p-4 bg-red-500 text-white m-8 w-full"
            onClick={handleDeleteNotice}
          >
            Yes, Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteNotice;
