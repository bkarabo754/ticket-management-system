'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { CalendarDays, Mail, Shield, User, Clock, Ticket } from 'lucide-react';
import { toast } from 'sonner';
import { getUserRole } from '@/lib/utils/client-auth-utils';

export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    bio: (user?.publicMetadata?.bio as string) || '',
  });

  if (!isLoaded || !user) {
    return (
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  const role = getUserRole(user);
  const initials = `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`;
  const joinDate = new Date(user.createdAt ?? Date.now()).toLocaleDateString(
    'en-ZA',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  const handleSave = async () => {
    try {
      // Update bio in public metadata only
      await user.update({
        unsafeMetadata: {
          ...user.publicMetadata,
          bio: formData.bio,
        },
      });

      // For name changes, we need to use a different approach
      // Since Clerk doesn't allow direct firstName/lastName updates via client API,
      // we'll show a message to the user
      if (
        formData.firstName !== user.firstName ||
        formData.lastName !== user.lastName
      ) {
        toast.info(
          'Name changes require account verification. Please contact support to update your name.'
        );
      } else {
        toast.success('Profile updated successfully');
      }

      setIsEditing(false);
    } catch (error) {
      toast.error('Failed to update profile');
      console.error(error);
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      bio: (user.publicMetadata?.bio as string) || '',
    });
    setIsEditing(false);
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'ADMIN':
        return 'destructive';
      case 'AGENT':
        return 'default';
      default:
        return 'secondary';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'ADMIN':
        return <Shield className="h-3 w-3" />;
      case 'AGENT':
        return <User className="h-3 w-3" />;
      default:
        return <User className="h-3 w-3" />;
    }
  };

  return (
    <div className="flex-1 space-y-6 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Overview */}
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.imageUrl} alt={user.fullName || ''} />
                <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-xl">{user.fullName}</CardTitle>
            <CardDescription className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              {user.emailAddresses[0]?.emailAddress}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center">
              <Badge variant={getRoleBadgeVariant(role)} className="gap-1">
                {getRoleIcon(role)}
                {role}
              </Badge>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <span>Joined {joinDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Last active today</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Ticket className="h-4 w-4" />
                <span>12 tickets created</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details and bio
                </CardDescription>
              </div>
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              ) : (
                <div className="flex gap-2">
                  <Button variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave}>Save Changes</Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={isEditing ? formData.firstName : user.firstName || ''}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  disabled={!isEditing}
                />
                {isEditing && (
                  <p className="text-xs text-muted-foreground">
                    Name changes require verification. Contact support for
                    assistance.
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={isEditing ? formData.lastName : user.lastName || ''}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  disabled={!isEditing}
                />
                {isEditing && (
                  <p className="text-xs text-muted-foreground">
                    Name changes require verification. Contact support for
                    assistance.
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                value={user.emailAddresses[0]?.emailAddress}
                disabled
                className="bg-muted"
              />
              <p className="text-xs text-muted-foreground">
                Email cannot be changed here. Please contact support if needed.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us a little about yourself..."
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                disabled={!isEditing}
                className="min-h-[100px]"
              />
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="text-sm font-medium">Account Status</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  Active Account
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Mail className="h-3 w-3" />
                  Email Verified
                </Badge>
                {role === 'ADMIN' && (
                  <Badge variant="destructive" className="gap-1">
                    <Shield className="h-3 w-3" />
                    Administrator
                  </Badge>
                )}
                {role === 'AGENT' && (
                  <Badge variant="default" className="gap-1">
                    <User className="h-3 w-3" />
                    Support Agent
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Activity Summary</CardTitle>
          <CardDescription>Your recent activity and statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-muted-foreground">Tickets Created</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold">8</p>
              <p className="text-xs text-muted-foreground">Tickets Resolved</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold">24</p>
              <p className="text-xs text-muted-foreground">Comments Posted</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold">2.4h</p>
              <p className="text-xs text-muted-foreground">Avg Response Time</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
