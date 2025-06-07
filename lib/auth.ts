import { Role } from './types';
import { clerkClient, User } from '@clerk/nextjs/server';
import type { UserResource } from '@clerk/types';

export function getUserRole(user: UserResource): Role {
  return (user.publicMetadata.role as Role) || 'CUSTOMER';
}

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
