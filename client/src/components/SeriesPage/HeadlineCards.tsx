import React from 'react';
import SeriesCard from './SeriesCard';


const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-2 grid-cols-1 gap-6'>

      <SeriesCard />

      {/* {transactions?.map((item) => (
                <div
                  key={item.id}
                  onClick={() => router.push(`/Market/transaction/${item.id}`)}
                >
                  <Card item={item} my={false} />
                </div>
              ))} */}
   
      <SeriesCard />
   
      <SeriesCard />
   
      <SeriesCard />
    </div>
  );
};

export default HeadlineCards;
