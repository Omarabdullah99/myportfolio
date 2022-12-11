import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../assets/courseDetails.json'

const RecentWorkDetails = () => {
   const {id}=useParams()
   const detailsData=data.find(item => item.id ===id)
   console.log(detailsData)

    
    return (
        <div className='mt-[70px] w-4/5 mx-auto  '>

        <p className='text-4xl text-black text-center mb-9'>Title: {detailsData.title}</p>

        <div className=' flex flex-col lg:flex-row items-center justify-center gap-5 '>
       
        <img src={detailsData.img} alt="" className='w-96' />
        <div>
        
        <p className='text-black text-lg mb-3'><p className='font-bold'>KeyFeatures: </p>{detailsData.KeyFeatures}</p>
        <p className='text-black'><p className='font-bold'>TechnologyUsed:</p> {detailsData.TechnologyUsed.map(t =>(
           <p>{t}</p>
        ))}</p>
        </div>
        </div>
        
        
        </div>
        
       
    );
};

export default RecentWorkDetails;