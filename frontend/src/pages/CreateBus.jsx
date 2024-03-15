import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import BackButton from '../components/BackButton';
import Spinner from '../components/spinner';
import axios from "axios";
import TripInputFields from './TripInputFields';


const InputField = ({ label, value, onChange, placeholder }) => (
  <div className='my-4'>
    <label className='text-xl mr-4 text-gray-500'>{label}</label>
    <input
      type='text'
      value={value}
      onChange={onChange}
      className='border-2 border-gray-400 px-4 py-2 w-full'
      placeholder={placeholder}
    />
  </div>
);


const CreateBus = () => {
  const [loading, setLoading] = useState(false);
  const [busData, setBusData] = useState({
    staffName: { driverName: '', helperName: '' },
    busNumber: '',
    busName: '',
    tripSat1: { tripType: '', startTime: '', endTime: '' },
    tripSat2: { tripType: '', startTime: '', endTime: '' },
    tripSat3: { tripType: '', startTime: '', endTime: '' },

    tripSun1: { tripType: '', startTime: '', endTime: '' },
    tripSun2: { tripType: '', startTime: '', endTime: '' },
    tripSun3: { tripType: '', startTime: '', endTime: '' },

    tripMon1: { tripType: '', startTime: '', endTime: '' },
    tripMon2: { tripType: '', startTime: '', endTime: '' },
    tripMon3: { tripType: '', startTime: '', endTime: '' },

    tripTue1: { tripType: '', startTime: '', endTime: '' },
    tripTue2: { tripType: '', startTime: '', endTime: '' },
    tripTue3: { tripType: '', startTime: '', endTime: '' },

    tripWed1: { tripType: '', startTime: '', endTime: '' },
    tripWed2: { tripType: '', startTime: '', endTime: '' },
    tripWed3: { tripType: '', startTime: '', endTime: '' },

    tripThu1: { tripType: '', startTime: '', endTime: '' },
    tripThu2: { tripType: '', startTime: '', endTime: '' },
    tripThu3: { tripType: '', startTime: '', endTime: '' },
  });

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleInputChange = (e, field, subfield) => {
    const { value } = e.target;
    setBusData(prevState => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        [subfield]: value
      }
    }));
  };

  const handleSaveBus = () => {
    setLoading(true);
    axios
      .post(`http://localhost:5000/buses`, busData)
      .then((response) => {
        setLoading(false);
        enqueueSnackbar("Bus Created Successfully", { variant: "success" });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4 text-center mx-auto font-bold'>Create Bus</h1>
      {loading && <Spinner />}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <InputField
          label='Driver Name'
          value={busData.staffName.driverName}
          onChange={(e) => handleInputChange(e, 'staffName', 'driverName')}
          placeholder='Enter driver name'
        />
        <InputField
          label='Helper Name'
          value={busData.staffName.helperName}
          onChange={(e) => handleInputChange(e, 'staffName', 'helperName')}
          placeholder='Enter helper name'
        />
        <InputField
          label='Bus Number'
          value={busData.busNumber}
          onChange={(e) => setBusData({ ...busData, busNumber: e.target.value })}
          placeholder='Enter bus number'
        />

        <InputField
          label='Bus Name'
          value={busData.busName}
          onChange={(e) => setBusData({ ...busData, busName: e.target.value })}
          placeholder='Enter bus name'
        />



        <TripInputFields day="Sat" tripType="1" busData={busData} handleInputChange={handleInputChange} />
        <TripInputFields day="Sat" tripType="2" busData={busData} handleInputChange={handleInputChange} />
        <TripInputFields day="Sat" tripType="3" busData={busData} handleInputChange={handleInputChange} />

        <TripInputFields day="Sun" tripType="1" busData={busData} handleInputChange={handleInputChange} />
        <TripInputFields day="Sun" tripType="2" busData={busData} handleInputChange={handleInputChange} />
        <TripInputFields day="Sun" tripType="3" busData={busData} handleInputChange={handleInputChange} />

        <TripInputFields day="Mon" tripType="1" busData={busData} handleInputChange={handleInputChange} />
        <TripInputFields day="Mon" tripType="2" busData={busData} handleInputChange={handleInputChange} />
        <TripInputFields day="Mon" tripType="3" busData={busData} handleInputChange={handleInputChange} />
        
        <TripInputFields day="Tue" tripType="1" busData={busData} handleInputChange={handleInputChange} />
        <TripInputFields day="Tue" tripType="2" busData={busData} handleInputChange={handleInputChange} />
        <TripInputFields day="Tue" tripType="3" busData={busData} handleInputChange={handleInputChange} />
        
        <TripInputFields day="Wed" tripType="1" busData={busData} handleInputChange={handleInputChange} />
        <TripInputFields day="Wed" tripType="2" busData={busData} handleInputChange={handleInputChange} />
        <TripInputFields day="Wed" tripType="3" busData={busData} handleInputChange={handleInputChange} />

        <TripInputFields day="Thu" tripType="1" busData={busData} handleInputChange={handleInputChange} />
        <TripInputFields day="Thu" tripType="2" busData={busData} handleInputChange={handleInputChange} />
        <TripInputFields day="Thu" tripType="3" busData={busData} handleInputChange={handleInputChange} />

        
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBus}>
          Create Bus
        </button>
      </div>
    </div>
  );
};

export default CreateBus;
