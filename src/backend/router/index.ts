import * as trpc from '@trpc/server';
import { z } from 'zod';

import { PokemonClient } from 'pokenode-ts';

// Default trpc example

// export const appRouter = trpc.router().query('hello', {
//     input: z
//       .object({
//         text: z.string().nullish(),
//       })
//       .nullish(),
//     resolve({ input }) {
//       return {
//         greeting: `hello ${input?.text ?? 'world'}`,
//       };
//     },
//   });

export const appRouter = trpc.router().query("get-pokemon-by-id", {
  input: z.object({ id: z.number() }),
  async resolve({ input }) {
    const api = new PokemonClient();

    const pokemon = await api.getPokemonById(input.id)
    return {
      name: pokemon.name,
      sprites: pokemon.sprites,
    };
  },
})




// export type definition of API
export type AppRouter = typeof appRouter;