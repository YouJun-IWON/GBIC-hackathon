import { Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <div className='w-full min-h-[600px] px-8 flex justify-center items-center bg-gradient-to-tr from-green-500 to-teal-500 text-black shadow-lg mb-20'>
      <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 flex flex-col items-center'>
          <h2 className='mb-4 text-4xl font-bold text-center text-white'>
            행위 인증자에게 스탬프 NFT 전달하기
          </h2>

          <Input
            type='string'
            label='받는 사람 지갑 주소'
            {...register('receiverAddress', { required: true })}
          />
          <Input
            type='string'
            label='시리즈 번호'
            {...register('Series Number', { required: true })}
          />
          <Input
            type='string'
            label='도장 번호 (몇번째 도장인지)'
            {...register('Stamp Number', { required: true })}
          />

          <button
            type='submit'
            className='relative items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group'
          >
            <span className='absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease'></span>
            <span className='absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease'>
              <span className='absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md'></span>
              <span className='absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md'></span>
            </span>
            <span className='relative text-white'>NFT 스탬프 전달하기 </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default index;
