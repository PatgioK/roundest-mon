import { getOptionsForVote } from '@/utils/GetRandomPokemon'
import { trpc } from '@/utils/trpc'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';


export default function Home() {

  // Default trpc test
  // const {data, isLoading} = trpc.useQuery(["hello", {text: 'pat'}])
  // if(isLoading) return <div>Loading...</div>
  // if (data) return <div>{data.greeting}</div>

  // https://traviswimer.com/blog/easily-fix-react-hydration-errors/
  // const [hydrated, setHydrated] = useState(false);
  //   // This forces a rerender, so the date is rendered
  // 	// the second time but not the first
  // useEffect(() => {		
  //   setHydrated(true);
  // },[])
  // if (!hydrated){
  //   return null;
  // }
  const btn =
  "inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";


  const [ids, updateIds] = useState(getOptionsForVote());
  const [first, second] = ids;

  const firstPokemon = trpc.useQuery(["get-pokemon-by-id", { id: first }]);
  const secondPokemon = trpc.useQuery(["get-pokemon-by-id", { id: second }]);
  console.log(firstPokemon.data)

  if (firstPokemon.isLoading || secondPokemon.isLoading) return null;

  const voteForRoundest = (selected: number) => {
    // todo: fire mutation to persist changes
    updateIds(getOptionsForVote())
  }

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='text-2xl text-center'> Which Pokemon is rounder?</div>
      <div className="p-3"></div>
      <div className='border rounded p-8 flex items-center max-w-2xl justify-between'>
        <div className='w-64 h-64 flex flex-col items-center'>
          <div className='capitalize text-xl text-center'>{firstPokemon.data?.name}</div>
          <img src={firstPokemon.data?.sprites.front_default!} className='w-full' />
          <button className={btn} onClick={() => voteForRoundest(first)}>Rounder</button>
        </div>
        <div className='p-8'>VS</div>
        <div className='w-64 h-64 flex flex-col items-center'>
          <div className='capitalize text-xl text-center'>{secondPokemon.data?.name}</div>
          <img src={secondPokemon.data?.sprites.front_default!} className='w-full' />
          <button className={btn} onClick={() => voteForRoundest(second)}>Rounder</button>
        </div>
        <div className="p-4"></div>
      </div>
    </div>
  )
}

