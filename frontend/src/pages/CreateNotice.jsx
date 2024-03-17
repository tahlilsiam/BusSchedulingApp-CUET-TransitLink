/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import BackButtonToNotice from '../components/BackButtonToNotice';
import Spinner from '../components/spinner';
import axios from "axios";

const CreateNotice = () => {
    const [loading, setLoading] = useState(false);
    const [noticeTitle, setNoticeTitle] = useState([]);
    const [noticeBody, setNoticeBody] = useState([]);
    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar();
    const handleSaveNotice = ()=>{
        const data = {
            noticeTitle, 
            noticeBody,
        };
        setLoading(true);
        axios
        .post(`http://localhost:5000/notices`, data)
        .then((reseponse) =>{
          setLoading(false);
          enqueueSnackbar("Notice Created Successfully", {variant:"success"});
          navigate('/notices');
    
        })
        .catch((error) =>{
          setLoading(false);
          enqueueSnackbar("Error", {variant:"error"});
          console.log(error);
        })
      }
  return (
    <div>
        <BackButtonToNotice/>
        <h1 className='text-3xl my-4 text-center mx-auto font-bold'>Create Notice</h1>
        {
        loading? (<Spinner/>):('')
      }
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Notice Title</label>
          <input
            type='text'
            value={noticeTitle}
            onChange={(e)=>setNoticeTitle(e.target.value)}
            className='border-2 border-gray-400 px-4 py-2 w-full'
            placeholder='Enter title'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Notice Description</label>
          <input
            type='text'
            value={noticeBody}
            onChange={(e)=>setNoticeBody(e.target.value)}
            className='border-2 border-gray-400 px-4 py-2 w-full'
            placeholder='Enter Description'
          />
        </div>
        
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveNotice}>
          click
        </button>

      </div>

    </div>
  )
}

export default CreateNotice