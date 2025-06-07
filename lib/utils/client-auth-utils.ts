// lib/utils/client-auth-utils.ts
// This file MUST NOT import anything from '@clerk/nextjs/server'

import { Role } from '@/lib/types';
import type { UserResource } from '@clerk/types';

/**
 * Retrieves the user's role from their public metadata.
 * This function is client-safe as it only operates on the passed user object.
 */
export function getUserRole(user: UserResource): Role {
  return (user.publicMetadata?.role as Role) || 'CUSTOMER';
}
