import { formatTime } from '@/helpers/dayjs';
// import { Transactions } from '@prisma/client';
import { ExampleSeries as Transactions } from '@/constants';

import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';

import React, { Fragment, useEffect, useState } from 'react';

import Link from 'next/link';

import { useSession } from 'next-auth/react';

import Image from 'next/image';

import { Progress, Snippet } from '@nextui-org/react';

import './styles.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
import { seriesMintInfo } from '@/constants/category';

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

const SeriesID = (props: { transaction: any }) => {
  const { data: session, status } = useSession();
  const user: any = session?.user!;

  const KakaoMapSeries = dynamic(
    () => import('../../../components/KakaoMapSeries'),
    {
      ssr: false,
    }
  );

  const [index, setIndex] = useState(0);

  const router = useRouter();

  const { transactionId } = router.query;

  // useEffect(() => {
  //   if (transactionId !== null) {
  //     fetch(`/api/get-transaction/get-transaction?id=${transactionId}`)
  //       .then((res) => res.json())
  //       .then((data) => {});
  //   }
  // }, [transactionId]);

  const transaction = props.transaction;

  // const application = {
  //   address: '',
  //   seriesId: `${transaction.id}`,
  // };

  // const handleClick = async () => {
  //   try {
  //     const response = await fetch('http://13.232.70.72/participate-series', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(application),
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log('Error: ' + error);
  //   }
  // };

  // const transactionImages = {
  //   imageSrc: String(transaction.imageSrc),
  // };

  console.log(transaction);

  return (
    <div>
      <section className='bg-white dark:bg-gray-900'>
        <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-3 sm:py-16 md:gap-0 sm:flex-col lg:gap-8 lg:px-6'>
          <section className='relative col-span-2 '>
            <div className='py-8 px-4 mx-auto max-w-2xl sm:px-0 sm:py-0 lg:py-16 max-sm:max-w-sm'>
              <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className='mySwiper'
              >
                <SwiperSlide>
                  <Image
                    src='/NFTImages/stampBoardA.png'
                    width={800}
                    height={800}
                    alt='we'
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          <div className='mt-4 md:mt-0'>
            <h1 className='mb-4 text-6xl tracking-tight font-extrabold text-gray-900 '>
              {seriesMintInfo.seriesInfo.title}
            </h1>

            <p className='mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-3xl '>
              Series {seriesMintInfo.id}
            </p>

            <dl className='flex-col items-center'>
              <div>
                <dt className='mb-2 font-semibold leading-none text-gray-900 '>
                  시리즈 유효 기간
                </dt>
                <dd className='mb-4 font-light text-gray-600 sm:mb-5 '>
                  {formatTime(seriesMintInfo.seriesInfo.useWhenFrom)} ~{' '}
                  {formatTime(seriesMintInfo.seriesInfo.useWhenTo)}
                </dd>
              </div>
              <div>
                <dt className='mb-2 font-semibold leading-none text-gray-900 '>
                  혜택 및 티켓
                </dt>
                <dd className='mb-4 font-light text-gray-600 sm:mb-5 '>
                  {seriesMintInfo.seriesInfo.benefit}
                </dd>
              </div>
            </dl>

            <dl className='flex-col items-center'>
              <div>
                <dt className='mb-2 font-semibold leading-none text-gray-900 '>
                  사용처
                </dt>
                <dd className='mb-4 font-light text-gray-600 sm:mb-5 '>
                  {seriesMintInfo.seriesInfo.useWhere}
                </dd>
              </div>
              <div>
                <dt className='mb-2 font-semibold leading-none text-gray-900 '>
                  주최 사/인
                </dt>
                <dd className='mb-4 font-light text-gray-600 sm:mb-5 '>
                  {seriesMintInfo.seriesInfo.owner}
                </dd>
              </div>
            </dl>

            <div className=''>
              <dt className='mb-2 font-semibold text-gray-900 '>
                Transaction Hash
              </dt>
              <h1 className=' mb-4 w-full font-light text-gray-600 sm:mb-5 '>
                {seriesMintInfo.transactionHash}
              </h1>
            </div>

            <dl className='text-center text-gray-600 flex justify-center flex-col bg-green-100 border-5 border-green-300 ring-2 ring-green-500 p-3'>
              <dt className='mb-2 font-semibold  text-gray-900 '>
                {seriesMintInfo.data[0].name}
              </dt>
              <dd className=' font-light text-gray-600  '>
                {seriesMintInfo.data[0].description}
              </dd>
            </dl>

            <div className='flex-col items-center '>
              <br />

              <button
                className='inline-flex text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-xl shadow-green-500/50 font-medium rounded-lg text-lg px-5 py-3 text-center mr-2 mb-2'
                onClick={() => {
                  if (session === null) {
                    alert('Login first');
                    router.push('/auth/login');
                    return;
                  }
                }}
              >
                <svg
                  className='mr-2 w-6 h-6 text-white-800 '
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 21 20'
                >
                  <path d='M20.168 6.136 14.325.293a1 1 0 0 0-1.414 0l-1.445 1.444a1 1 0 0 0 0 1.414l5.844 5.843a1 1 0 0 0 1.414 0l1.444-1.444a1 1 0 0 0 0-1.414Zm-4.205 2.927L11.4 4.5a1 1 0 0 0-1-.25L4.944 5.9a1 1 0 0 0-.652.624L.518 17.206a1 1 0 0 0 .236 1.04l.023.023 6.606-6.606a2.616 2.616 0 1 1 3.65 1.304 2.615 2.615 0 0 1-2.233.108l-6.61 6.609.024.023a1 1 0 0 0 1.04.236l10.682-3.773a1 1 0 0 0 .624-.653l1.653-5.457a.999.999 0 0 0-.25-.997Z' />
                  <path d='M10.233 11.1a.613.613 0 1 0-.867-.868.613.613 0 0 0 .867.868Z' />
                </svg>
                신청하기
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className=' px-4 mx-auto max-w-screen-xl '>
        <div className='flex justify-between'>
          <p className='text-lg'>{seriesMintInfo.count}명 참여 완료</p>
          <p className='text-lg text-foreground/50'>
            최대 {seriesMintInfo.seriesInfo.quantity}명
          </p>
        </div>
        <Progress
          aria-label='Music progress'
          classNames={{
            indicator: 'bg-green-600 ',
            track: 'bg-default-500/30',
          }}
          color='default'
          size='md'
          value={
            seriesMintInfo.count *
            (100 / Number(seriesMintInfo.seriesInfo.quantity))
          }
        />
      </div>

      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 '>
        <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <Image
                src='/NFTImages/incheon1.jpeg'
                width={500}
                height={500}
                alt='we'
              />
            </SwiperSlide>
          </Swiper>
          <div className='text-center text-gray-600 flex justify-center flex-col bg-orange-100 border-5 border-orange-300 ring-2 ring-red-500 p-3'>
            <h3 className='mb-1  text-xl font-semibold tracking-tight text-gray-900 '>
              <span>{seriesMintInfo.data[1].name}</span>
            </h3>
            <p>{seriesMintInfo.data[1].description}</p>
            <br />
            <p className='text-black text-xl font-bold'>위치</p>
            <p className='mt-3'>{seriesMintInfo.data[1].attributes[2].value}</p>
            <br />
          </div>
          <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <Image
                src='/NFTImages/incheon2.jpeg'
                width={500}
                height={500}
                alt='we'
              />
            </SwiperSlide>
          </Swiper>
          <div className='text-center text-gray-600 flex justify-center flex-col bg-blue-100 border-5 border-blue-300 ring-2 ring-blue-500 p-3'>
            <h3 className='mb-1  text-xl font-semibold tracking-tight text-gray-900 '>
              <span>{seriesMintInfo.data[2].name}</span>
            </h3>
            <p>{seriesMintInfo.data[2].description}</p>
            <br />
            <p className='text-black text-xl font-bold'>위치</p>
            <p className='mt-3'>{seriesMintInfo.data[2].attributes[2].value}</p>
            <br />
          </div>
          <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <Image
                src='/NFTImages/incheon3.jpeg'
                width={500}
                height={500}
                alt='we'
              />
            </SwiperSlide>
          </Swiper>
          <div className='text-center text-gray-600 flex justify-center flex-col bg-teal-100 border-5 border-teal-300 ring-2 ring-teal-500 p-3'>
            <h3 className='mb-1  text-xl font-semibold tracking-tight text-gray-900 '>
              <span>{seriesMintInfo.data[3].name}</span>
            </h3>
            <p>{seriesMintInfo.data[3].description}</p>
            <br />
            <p className='text-black text-xl font-bold'>위치</p>
            <p className='mt-3'>{seriesMintInfo.data[3].attributes[2].value}</p>
            <br />
          </div>
          <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <Image
                src='/NFTImages/incheon4.jpeg'
                width={500}
                height={500}
                alt='we'
              />
            </SwiperSlide>
          </Swiper>

          <div className='text-center text-gray-600 flex justify-center flex-col bg-purple-100 border-5 border-purple-300 ring-2 ring-purple-500 p-3'>
            <h3 className='mb-1  text-xl font-semibold tracking-tight text-gray-900 '>
              <span>{seriesMintInfo.data[4].name}</span>
            </h3>
            <p>{seriesMintInfo.data[4].description}</p>
            <br />
            <p className='text-black text-xl font-bold'>위치</p>
            <p className='mt-3'>{seriesMintInfo.data[4].attributes[2].value}</p>
            <br />
          </div>
        </div>
      </div>

      <section className='bg-white dark:bg-gray-900'>
        <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
          <KakaoMapSeries
            height='400px'
            level={10}
            draggable={true}
            zoomable={true}
            latitude1={seriesMintInfo.data[1].attributes[0].value}
            longitude1={seriesMintInfo.data[1].attributes[1].value}
            latitude2={seriesMintInfo.data[2].attributes[0].value}
            longitude2={seriesMintInfo.data[2].attributes[1].value}
            latitude3={seriesMintInfo.data[3].attributes[0].value}
            longitude3={seriesMintInfo.data[3].attributes[1].value}
            latitude4={seriesMintInfo.data[4].attributes[0].value}
            longitude4={seriesMintInfo.data[4].attributes[1].value}
            lo1={seriesMintInfo.data[1].name}
            lo2={seriesMintInfo.data[2].name}
            lo3={seriesMintInfo.data[3].name}
            lo4={seriesMintInfo.data[4].name}
          />
          <div className='mt-4 md:mt-0'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 '>
              Description
            </h2>
            <p className='mb-6 font-light text-gray-500 md:text-lg '>
              {seriesMintInfo.seriesInfo.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeriesID;
