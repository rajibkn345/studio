'use server';

import { z } from 'zod';

const inquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export async function handleInquiry(data: unknown): Promise<{ success?: string; error?: string }> {
  const parsed = inquirySchema.safeParse(data);

  if (!parsed.success) {
    console.error('Invalid inquiry data:', parsed.error.flatten().fieldErrors);
    return { error: 'Invalid data provided. Please check the form and try again.' };
  }

  // In a real application, you would process the data here:
  // - Send an email notification
  // - Save the inquiry to a database
  // - Trigger a CRM workflow
  console.log('New Inquiry Received:', parsed.data);

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: 'Thank you for your message. We will be in touch shortly!' };
}
