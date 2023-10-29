import HeadlineCards from '@/components/SeriesPage/HeadlineCards';
import MainSeries from '@/components/SeriesPage/MainSeries';


import { ExampleSeries } from '@/constants';


// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   console.log('getServerSide33', context.params?.seriesID);
//   const transaction = await fetch(
//     `http://localhost:3000/api/get-transaction/get-transaction?id=${context.params?.seriesID}`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       if (!data.items) {
//         context.res.writeHead(302, { Location: '/item_not_exist ' });
//         context.res.end();
//         return;
//       }
//       return data.items;
//     });

//   return {
//     props: { transaction: { ...transaction } },
//   };
// }



const index = (props: { transaction: any }) => {
  return (
    <div className='mb-20'>
 

      <MainSeries mainSeries={ExampleSeries} />
      
<div className='flex relative flex-col md:flex-row items-center p-5  rounded-b-2xl'>
<div className='absolute top-30 left-0 w-full h-96 bg-gradient-to-br from-green-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50'></div>
      <HeadlineCards />
</div>
   
    </div>
  );
};

export default index;
