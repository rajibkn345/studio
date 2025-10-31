'use server';
/**
 * @fileOverview Generates team bio blurbs using Genkit to reflect people-first leadership.
 *
 * - generateTeamBioBlurbs - A function that generates the team bio blurbs.
 * - GenerateTeamBioBlurbsInput - The input type for the generateTeamBioBlurbs function.
 * - GenerateTeamBioBlurbsOutput - The return type for the generateTeamBioBlurbs function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTeamBioBlurbsInputSchema = z.object({
  teamMemberDetails: z.array(
    z.object({
      name: z.string().describe('The name of the team member.'),
      title: z.string().describe('The job title of the team member.'),
      previousExperience: z.string().describe('The previous experience of the team member.'),
    })
  ).describe('An array of team member details, including name, title, and previous experience.'),
});
export type GenerateTeamBioBlurbsInput = z.infer<typeof GenerateTeamBioBlurbsInputSchema>;

const GenerateTeamBioBlurbsOutputSchema = z.object({
  bioBlurbs: z.array(
    z.object({
      name: z.string().describe('The name of the team member.'),
      bio: z.string().describe('The generated bio blurb for the team member.'),
    })
  ).describe('An array of team member names and their generated bio blurbs.'),
});
export type GenerateTeamBioBlurbsOutput = z.infer<typeof GenerateTeamBioBlurbsOutputSchema>;

export async function generateTeamBioBlurbs(input: GenerateTeamBioBlurbsInput): Promise<GenerateTeamBioBlurbsOutput> {
  return generateTeamBioBlurbsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTeamBioBlurbsPrompt',
  input: {schema: GenerateTeamBioBlurbsInputSchema},
  output: {schema: GenerateTeamBioBlurbsOutputSchema},
  prompt: `You are tasked with creating short, engaging bio blurbs for the leadership team of RTG Navigator, reflecting a people-first leadership style.

  Given the following details for each team member, generate a bio blurb of approximately 50-75 words that highlights their experience and approachability. The tone should be confident, refined, and professional, yet warm and inviting.

  Team Member Details:
  {{#each teamMemberDetails}}
  Name: {{{name}}}
  Title: {{{title}}}
  Previous Experience: {{{previousExperience}}}

  ---
  {{/each}}

  Output the bio blurbs in the following JSON format:
  {
    "bioBlurbs": [
      {
        "name": "[Team Member Name]",
        "bio": "[Generated bio blurb]"
      },
       ...
    ]
  }
  `,
});

const generateTeamBioBlurbsFlow = ai.defineFlow(
  {
    name: 'generateTeamBioBlurbsFlow',
    inputSchema: GenerateTeamBioBlurbsInputSchema,
    outputSchema: GenerateTeamBioBlurbsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
