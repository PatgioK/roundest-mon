import { getOptionsForVote } from '@/utils/GetRandomPokemon'
import { trpc } from '@/utils/trpc'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';


export default function Home () {

  // Default trpc test
  // const {data, isLoading} = trpc.useQuery(["hello", {text: 'pat'}])
  // if(isLoading) return <div>Loading...</div>
  // if (data) return <div>{data.greeting}</div>

  // https://traviswimer.com/blog/easily-fix-react-hydration-errors/
  const [hydrated, setHydrated] = useState(false);
    // This forces a rerender, so the date is rendered
		// the second time but not the first
  useEffect(() => {		
    setHydrated(true);
  },[])
  if (!hydrated){
    return null;
  }

  const [first, second] = getOptionsForVote();
  
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='text-2xl text-center'> Which Pokemon is rounder?</div>
      <div className="p-3"></div>
      <div className='border rounded p-8 flex items-center max-w-2xl justify-between'>
        <div className='w-16 h-16 bg-red-700'>{first}</div>
        <div className='p-8'>VS</div>
        <div className='w-16 h-16 bg-red-600'>{second}</div>
      </div>
    </div>
  )
}

