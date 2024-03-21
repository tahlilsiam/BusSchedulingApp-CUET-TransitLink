/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import BackButtonToNotice from "../components/BackButtonToNotice";
import axios from "axios";

import Spinner from "../components/spinner";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const ShowNotice = () => {
  const [notice, setNotice] = useState([]);
  const [loading, setLoading] = useState([false]);
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    setLoading(false);
    axios
      .get(
        `https://busschedulingapp-cuet-transitlink-3.onrender.com/notices/${id}`
      )
      .then((response) => {
        setNotice(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Error", { variant: "error" });
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <BackButtonToNotice />
      <h1 className="text-3xl my-8y mx-auto font-bold text-center">
        Notice Description
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className=" mr-4 text-black-800 font-bold">
              Notice Title:
            </span>
            <span>{notice.noticeTitle}</span>
          </div>
          <div className="my-4">
            <span className=" mr-4 text-black-800 font-bold">
              Notice Description :
            </span>
            <span>{notice.noticeBody}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowNotice;
