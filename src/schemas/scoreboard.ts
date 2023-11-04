import { z } from 'zod';

// example url:
// https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard?dates=2023&week=1

export const Scoreboard = z.object({
  events: z.array(
    z.object({
      id: z.string(),
      date: z.string(),
      name: z.string(),
      shortName: z.string(),
      season: z.object({
        year: z.number(),
        type: z.number(),
        slug: z.string(),
      }),
      week: z.object({ number: z.number() }),
    }),
  ),
});
