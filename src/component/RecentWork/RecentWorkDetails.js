import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../assets/courseDetails.json'

const RecentWorkDetails = () => {
   const {id}=useParams()
   const detailsData=data.find(item => item.id ===id)
   console.log(detailsData)

    
    return (
        <div className='mt-[70px] w-4/5 mx-auto  '>

        <p className='text-4xl text-black text-center mb-9'> {detailsData.title}</p>

        <div className=' flex flex-col lg:flex-row items-center justify-center gap-5 '>
       
        
        <div>
        {detailsData.imgs.map(img=>(
            <img src={img} alt="" className='w-96' />
        ))}
        </div>
        
        <div className='ml-5'>
        
        <p className='text-black text-lg mb-3'><p className='font-bold'>KeyFeatures: </p>{detailsData.KeyFeatures}</p>
        <p className='text-black'><p className='font-bold'>TechnologyUsed:</p> {detailsData.TechnologyUsed.map(t =>(
            <ul className='list-disc'>
            <li className='ml-5'>{t}</li>
            </ul>
          
        ))}</p>
        <p className='font-bold text-blue-600'> <a href={detailsData.gitclient}>Client git Link:</a> </p>
        {detailsData.gitserver && <p className='font-bold text-blue-600'> <a href={detailsData.gitserver}>Server git Link:</a> </p>} 
        <a href={detailsData.livelink} className='work_button'>Live Link</a>
        </div>
        </div>
        
        
        </div>
        
       
    );
};

export default RecentWorkDetails;