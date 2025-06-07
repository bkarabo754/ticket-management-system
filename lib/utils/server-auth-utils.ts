// lib/utils/server-auth-utils.ts
// This file CAN import from '@clerk/nextjs/server'

import { Role } from '@/lib/types'; // Make sure this path is correct for your Role type
import { clerkClient, User } from '@clerk/nextjs/server'; // This import is now safe here
import type { UserResource } from '@clerk/types';

// Import getUserRole from the client-safe file to reuse its logic
import { getUserRole } from '@/lib/utils/client-auth-utils'; // <--- IMPORTANT: Use the client-safe version here

export async function isUserAdmin(userId: string): Promise<boolean> {
  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  return getUserRole(user as unknown as UserResource) === 'ADMIN';
}

export async function isUserAgent(userId: string): Promise<boolean> {
  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const role = getUserRole(user as unknown as UserResource);
  return role === 'ADMIN' || role === 'AGENT';
}

// Optionally, if you want server components to only import from this file,
// you can re-export getUserRole:
export { getUserRole }; // Re-exporting the client-safe function from here for server-side usage
