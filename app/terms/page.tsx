import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeft,
  FileText,
  Shield,
  Users,
  AlertTriangle,
} from 'lucide-react';

export default function TermsPage() {
  const lastUpdated = 'March 15, 2025';

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 lg:px-8 mx-auto max-w-screen-lg">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">TicketHub</span>
          </Link>
          <div className="ml-auto">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-12 px-4 lg:px-8 mx-auto max-w-screen-lg">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FileText className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using TicketHub's ticket
              management services.
            </p>
            <Badge variant="outline" className="gap-2">
              <AlertTriangle className="h-3 w-3" />
              Last updated: {lastUpdated}
            </Badge>
          </div>

          {/* Quick Navigation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Quick Navigation
              </CardTitle>
              <CardDescription>
                Jump to specific sections of our terms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 md:grid-cols-2">
                <Link
                  href="#acceptance"
                  className="text-sm text-primary hover:underline"
                >
                  1. Acceptance of Terms
                </Link>
                <Link
                  href="#services"
                  className="text-sm text-primary hover:underline"
                >
                  2. Description of Services
                </Link>
                <Link
                  href="#accounts"
                  className="text-sm text-primary hover:underline"
                >
                  3. User Accounts
                </Link>
                <Link
                  href="#conduct"
                  className="text-sm text-primary hover:underline"
                >
                  4. User Conduct
                </Link>
                <Link
                  href="#data"
                  className="text-sm text-primary hover:underline"
                >
                  5. Data and Privacy
                </Link>
                <Link
                  href="#intellectual"
                  className="text-sm text-primary hover:underline"
                >
                  6. Intellectual Property
                </Link>
                <Link
                  href="#limitation"
                  className="text-sm text-primary hover:underline"
                >
                  7. Limitation of Liability
                </Link>
                <Link
                  href="#termination"
                  className="text-sm text-primary hover:underline"
                >
                  8. Termination
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Terms Content */}
          <div className="space-y-8">
            <Card id="acceptance">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">1</Badge>
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  By accessing and using TicketHub ("the Service"), you accept
                  and agree to be bound by the terms and provision of this
                  agreement. If you do not agree to abide by the above, please
                  do not use this service.
                </p>
                <p>
                  These Terms of Service ("Terms") govern your use of our ticket
                  management platform and any related services provided by
                  TicketHub. By creating an account or using our services, you
                  acknowledge that you have read, understood, and agree to be
                  bound by these Terms.
                </p>
              </CardContent>
            </Card>

            <Card id="services">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">2</Badge>
                  Description of Services
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  TicketHub provides a comprehensive ticket management system
                  that allows organizations to:
                </p>
                <ul>
                  <li>Create, manage, and track support tickets</li>
                  <li>Assign tickets to team members and agents</li>
                  <li>Collaborate through comments and updates</li>
                  <li>Generate analytics and reports</li>
                  <li>Manage user roles and permissions</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any
                  aspect of the Service at any time, with or without notice.
                </p>
              </CardContent>
            </Card>

            <Card id="accounts">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">3</Badge>
                  User Accounts
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  To access certain features of the Service, you must create an
                  account. You are responsible for:
                </p>
                <ul>
                  <li>
                    Maintaining the confidentiality of your account credentials
                  </li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Promptly updating your account information</li>
                </ul>
                <p>
                  You must be at least 18 years old to create an account.
                  Organizations are responsible for ensuring their users comply
                  with these terms.
                </p>
              </CardContent>
            </Card>

            <Card id="conduct">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">4</Badge>
                  User Conduct
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>You agree not to use the Service to:</p>
                <ul>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the Service</li>
                  <li>
                    Use the Service for any commercial purpose without
                    authorization
                  </li>
                </ul>
                <p>
                  We reserve the right to investigate and take appropriate
                  action against users who violate these terms.
                </p>
              </CardContent>
            </Card>

            <Card id="data">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">5</Badge>
                  Data and Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  Your privacy is important to us. Our Privacy Policy explains
                  how we collect, use, and protect your information. By using
                  the Service, you consent to our data practices as described in
                  our Privacy Policy.
                </p>
                <p>
                  You retain ownership of any content you submit to the Service.
                  However, you grant us a license to use, store, and process
                  this content to provide the Service.
                </p>
                <p>
                  We implement appropriate security measures to protect your
                  data, but cannot guarantee absolute security. You are
                  responsible for maintaining the confidentiality of sensitive
                  information.
                </p>
              </CardContent>
            </Card>

            <Card id="intellectual">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">6</Badge>
                  Intellectual Property
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  The Service and its original content, features, and
                  functionality are owned by TicketHub and are protected by
                  international copyright, trademark, patent, trade secret, and
                  other intellectual property laws.
                </p>
                <p>
                  You may not copy, modify, distribute, sell, or lease any part
                  of our Service without our prior written consent. Reverse
                  engineering or attempting to extract source code is
                  prohibited.
                </p>
              </CardContent>
            </Card>

            <Card id="limitation">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">7</Badge>
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  The Service is provided "as is" without warranties of any
                  kind. We do not guarantee that the Service will be
                  uninterrupted, secure, or error-free.
                </p>
                <p>
                  To the maximum extent permitted by law, TicketHub shall not be
                  liable for any indirect, incidental, special, consequential,
                  or punitive damages, including but not limited to loss of
                  profits, data, or business interruption.
                </p>
                <p>
                  Our total liability for any claims arising from your use of
                  the Service shall not exceed the amount you paid for the
                  Service in the 12 months preceding the claim.
                </p>
              </CardContent>
            </Card>

            <Card id="termination">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">8</Badge>
                  Termination
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  You may terminate your account at any time by contacting our
                  support team. We may terminate or suspend your account
                  immediately if you violate these Terms.
                </p>
                <p>
                  Upon termination, your right to use the Service will cease
                  immediately. We may retain certain information as required by
                  law or for legitimate business purposes.
                </p>
                <p>
                  Provisions that by their nature should survive termination
                  will remain in effect, including intellectual property rights,
                  limitation of liability, and dispute resolution.
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator />

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Contact Us
              </CardTitle>
              <CardDescription>
                Questions about these terms? We're here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong> legal@tickethub.com
                </p>
                <p>
                  <strong>Address:</strong> 158 Jan Smuts Avenue Rosebank ,
                  Johannesburg, Sandton, South Africa
                </p>
                <p>
                  <strong>Phone:</strong> (063) 695 7571
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
