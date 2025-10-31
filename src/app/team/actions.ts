'use server';

import { generateTeamBioBlurbs, GenerateTeamBioBlurbsInput, GenerateTeamBioBlurbsOutput } from '@/ai/flows/generate-team-bio-blurbs';

export async function getTeamBios(data: GenerateTeamBioBlurbsInput): Promise<{ success: boolean; data?: GenerateTeamBioBlurbsOutput['bioBlurbs']; error?: string }> {
  try {
    const result = await generateTeamBioBlurbs(data);
    if (result && result.bioBlurbs) {
      return { success: true, data: result.bioBlurbs };
    }
    return { success: false, error: 'AI response was invalid.' };
  } catch (error) {
    console.error('Error generating team bios:', error);
    return { success: false, error: 'An unexpected error occurred while generating bios.' };
  }
}
