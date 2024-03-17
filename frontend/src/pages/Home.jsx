/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from '../components/spinner';
import {Link} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle}  from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { IoColorFilter } from "react-icons/io5";
import { useSnackbar } from 'notistack';

const Home = () => {
    const [buses, setBuses] = useState([]);
    const [loading, setLoading] = useState(false);
    const {enqueueSnackbar} = useSnackbar();
    useEffect(()=>{
        setLoading(true);
        axios
        .get('http://localhost:5000/buses')
        .then((response)=>{
            setBuses(response.data.data);
            setLoading(false);
        })
        .catch((error)=>{
            enqueueSnackbar('Error', {variant:'error'});
            console.log(error);
            setLoading(false); 
        });
    }, []);

  return (
    <div className='p-4'>
        <div>
            <div className='flex flex-col  items-center'>
                    <h1 className='text-3xl my-8y text-center mx-auto font-bold'>
                        Chittagong University of Engineering and Technology(CUET)
                    </h1>
                    <h3 className='text-2xl my-8y text-center mx-auto font-bold'>
                        Roster Duty(Driver and Helper) for the month March
                    </h3>  
            </div>
            <Link to = '/buses/create' className='flex flex-row text-sky-800'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl'/>
                    <h5>Add Bus</h5>
            </Link>
            <span className='flex flex-row my-4 text-sky-800 underline hover:text-darkblue hover:cursor-pointer'>
            <Link to = '/buses/filter'>
                    {/* <IoColorFilter className='text-sky-800 text-4xl'/> */}
                    <h5> FIlTER BUS</h5>
            </Link>
            <Link to = '/notices' className='ml-10'>
                <h5>NOTICE BOARD</h5>
            </Link>
            </span>
        </div>
        {
            loading?(
                <Spinner/>
            ):
            (
                <table className = 'w-full border-seprate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>No</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Driver Name</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Helper Name</th>
                            <th className='border border-slate-600 rounded-mdmax-md:hidden'>Bus No.</th>
                            <th className='border border-slate-600 rounded-md '>Bus Name</th>
                            <th className='border border-slate-600 rounded-md '>Sat 1st</th>
                            <th className='border border-slate-600 rounded-md '>Sat 2nd</th>
                            <th className='border border-slate-600 rounded-md '>Sat 3rd</th>
                            <th className='border border-slate-600 rounded-md '>Sun 1st</th>
                            <th className='border border-slate-600 rounded-md '>Sun 2nd</th>
                            <th className='border border-slate-600 rounded-md '>Sun 3rd</th>
                            <th className='border border-slate-600 rounded-md '>Mon 1st</th>
                            <th className='border border-slate-600 rounded-md '>Mon 2nd</th>
                            <th className='border border-slate-600 rounded-md '>Mon 3rd</th>
                            <th className='border border-slate-600 rounded-md '>Tue 1st</th>
                            <th className='border border-slate-600 rounded-md '>Tue 2nd</th>
                            <th className='border border-slate-600 rounded-md '>Tue 3rd</th>
                            <th className='border border-slate-600 rounded-md '>Wed 1st</th>
                            <th className='border border-slate-600 rounded-md '>Wed 2nd</th>
                            <th className='border border-slate-600 rounded-md '>Wed 3rd</th>
                            <th className='border border-slate-600 rounded-md '>Thu 1st</th>
                            <th className='border border-slate-600 rounded-md '>Thu 2nd</th>
                            <th className='border border-slate-600 rounded-md '>Thu 3rd</th>
                            <th className='border border-slate-600 rounded-md'>Operations</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {
                            buses.map((bus, index) =>(
                                <tr key={bus._id} className='h-8'>
                                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                        {index +1}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                        {bus.staffName.driverName}
                                    </td>

                                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                        {bus.staffName.helperName}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                        {bus.busNumber}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {bus.busName}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripSat1 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripSat1.tripType}</div>
                                                <div>{bus.tripSat1.startTime} - {bus.tripSat1.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripSat2 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripSat2.tripType }</div>
                                                <div>{bus.tripSat2.startTime} - {bus.tripSat2.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripSat3 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripSat3.tripType}</div>
                                                <div>{bus.tripSat3.startTime} - {bus.tripSat3.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>
                                    
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripSun1 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripSun1.tripType}</div>
                                                <div>{bus.tripSun1.startTime} - {bus.tripSun1.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripSun2 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripSun2.tripType }</div>
                                                <div>{bus.tripSun2.startTime} - {bus.tripSun2.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripSun3 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripSun3.tripType}</div>
                                                <div>{bus.tripSun3.startTime} - {bus.tripSun3.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>

                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripMon1 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripMon1.tripType}</div>
                                                <div>{bus.tripMon1.startTime} - {bus.tripMon1.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripMon2 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripMon2.tripType }</div>
                                                <div>{bus.tripMon2.startTime} - {bus.tripMon2.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripMon3 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripMon3.tripType}</div>
                                                <div>{bus.tripMon3.startTime} - {bus.tripMon3.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>

                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripTue1 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripTue1.tripType}</div>
                                                <div>{bus.tripTue1.startTime} - {bus.tripTue1.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripTue2 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripTue2.tripType }</div>
                                                <div>{bus.tripTue2.startTime} - {bus.tripTue2.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripTue3 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripTue3.tripType}</div>
                                                <div>{bus.tripTue3.startTime} - {bus.tripTue3.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>

                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripWed1 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripWed1.tripType}</div>
                                                <div>{bus.tripWed1.startTime} - {bus.tripWed1.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripWed2 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripWed2.tripType }</div>
                                                <div>{bus.tripWed2.startTime} - {bus.tripWed2.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripWed3 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripWed3.tripType}</div>
                                                <div>{bus.tripWed3.startTime} - {bus.tripWed3.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>

                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripThu1 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripThu1.tripType}</div>
                                                <div>{bus.tripThu1.startTime} - {bus.tripThu1.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripThu2 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripThu2.tripType }</div>
                                                <div>{bus.tripThu2.startTime} - {bus.tripThu2.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {bus.tripThu3 ? (
                                            <div className="flex flex-col">
                                                <div className='font-bold'>{bus.tripThu3.tripType}</div>
                                                <div>{bus.tripThu3.startTime} - {bus.tripThu3.endTime}</div>
                                            </div>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>
                                    
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        <div className='flex justify-center gap-x-4'>
                                            <Link to= {`/buses/details/${bus._id}`}>
                                                <BsInfoCircle className = 'text-2xl text-green-800'/>
                                            </Link>
                                            <Link to= {`/buses/edit/${bus._id}`}>
                                                <AiOutlineEdit className = 'text-2xl text-yellow-800'/>
                                            </Link>
                                            <Link to= {`/buses/delete/${bus._id}`}>
                                                <MdOutlineDelete className = 'text-2xl text-red-800'/>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )
        }
    </div>
  )
}

export default Home