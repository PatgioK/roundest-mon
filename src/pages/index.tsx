import { trpc } from '@/utils/trpc'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const {data, isLoading} = trpc.useQuery(["hello", {text: 'pat'}])

  if(isLoading) return <div>Loading...</div>

  if (data) return <div>{data.greeting}</div>
  
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='text-2xl text-center'> Which Pokemon is rounder?</div>
      <div className="p-3"></div>
      <div className='border rounded p-8 flex items-center max-w-2xl justify-between'>
        <div className='w-16 h-16 bg-red-700'></div>
        <div className='p-8'>VS</div>
        <div className='w-16 h-16 bg-red-600'></div>
      </div>
    </div>
  )
}

export default Home
