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
  Shield,
  Lock,
  Eye,
  Database,
  Cookie,
  Users,
} from 'lucide-react';

export default function PrivacyPage() {
  const lastUpdated = 'March 15, 2025';

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">TicketHub</span>
          </Link>
          <div className="ml-auto">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information when you use TicketHub.
            </p>
            <Badge variant="outline" className="gap-2">
              <Lock className="h-3 w-3" />
              Last updated: {lastUpdated}
            </Badge>
          </div>

          {/* Privacy Highlights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Privacy at a Glance
              </CardTitle>
              <CardDescription>
                Key points about how we handle your data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">
                      We don't sell your data
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Your information is never sold to third parties
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Encrypted storage</p>
                    <p className="text-xs text-muted-foreground">
                      All data is encrypted at rest and in transit
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">You control your data</p>
                    <p className="text-xs text-muted-foreground">
                      Request deletion or export at any time
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">
                      Minimal data collection
                    </p>
                    <p className="text-xs text-muted-foreground">
                      We only collect what's necessary for the service
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Navigation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Quick Navigation
              </CardTitle>
              <CardDescription>
                Jump to specific sections of our privacy policy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 md:grid-cols-2">
                <Link
                  href="#collection"
                  className="text-sm text-primary hover:underline"
                >
                  1. Information We Collect
                </Link>
                <Link
                  href="#usage"
                  className="text-sm text-primary hover:underline"
                >
                  2. How We Use Information
                </Link>
                <Link
                  href="#sharing"
                  className="text-sm text-primary hover:underline"
                >
                  3. Information Sharing
                </Link>
                <Link
                  href="#security"
                  className="text-sm text-primary hover:underline"
                >
                  4. Data Security
                </Link>
                <Link
                  href="#retention"
                  className="text-sm text-primary hover:underline"
                >
                  5. Data Retention
                </Link>
                <Link
                  href="#rights"
                  className="text-sm text-primary hover:underline"
                >
                  6. Your Rights
                </Link>
                <Link
                  href="#cookies"
                  className="text-sm text-primary hover:underline"
                >
                  7. Cookies and Tracking
                </Link>
                <Link
                  href="#changes"
                  className="text-sm text-primary hover:underline"
                >
                  8. Policy Changes
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Content */}
          <div className="space-y-8">
            <Card id="collection">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">1</Badge>
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <h4>Account Information</h4>
                <p>
                  When you create an account, we collect your name, email
                  address, and any profile information you choose to provide.
                  This information is necessary to provide our ticket management
                  services.
                </p>

                <h4>Ticket Data</h4>
                <p>
                  We collect information you provide when creating and managing
                  tickets, including:
                </p>
                <ul>
                  <li>Ticket titles and descriptions</li>
                  <li>Comments and attachments</li>
                  <li>Status updates and priority levels</li>
                  <li>Assignment and collaboration data</li>
                </ul>

                <h4>Usage Information</h4>
                <p>
                  We automatically collect certain information about how you use
                  our service, including:
                </p>
                <ul>
                  <li>Log data (IP address, browser type, pages visited)</li>
                  <li>Device information (operating system, device type)</li>
                  <li>Usage patterns and feature interactions</li>
                </ul>
              </CardContent>
            </Card>

            <Card id="usage">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">2</Badge>
                  How We Use Information
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>
                    Provide, maintain, and improve our ticket management
                    services
                  </li>
                  <li>Process and respond to your support requests</li>
                  <li>Send you important service updates and notifications</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Detect and prevent fraud or security issues</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p>
                  We do not use your information for advertising purposes or
                  sell it to third parties.
                </p>
              </CardContent>
            </Card>

            <Card id="sharing">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">3</Badge>
                  Information Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  We may share your information in the following limited
                  circumstances:
                </p>

                <h4>Within Your Organization</h4>
                <p>
                  Ticket information is shared with other users in your
                  organization based on their role and permissions. Admins and
                  agents may have access to tickets they're assigned to or
                  managing.
                </p>

                <h4>Service Providers</h4>
                <p>
                  We work with trusted third-party service providers who help us
                  operate our service, such as:
                </p>
                <ul>
                  <li>
                    Cloud hosting providers (for data storage and processing)
                  </li>
                  <li>Authentication services (for secure login)</li>
                  <li>Email services (for notifications)</li>
                </ul>

                <h4>Legal Requirements</h4>
                <p>
                  We may disclose information if required by law, court order,
                  or to protect our rights and the safety of our users.
                </p>
              </CardContent>
            </Card>

            <Card id="security">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">4</Badge>
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  We implement comprehensive security measures to protect your
                  information:
                </p>
                <ul>
                  <li>
                    <strong>Encryption:</strong> All data is encrypted in
                    transit using TLS and at rest using AES-256
                  </li>
                  <li>
                    <strong>Access Controls:</strong> Strict access controls and
                    authentication requirements
                  </li>
                  <li>
                    <strong>Regular Audits:</strong> Regular security audits and
                    vulnerability assessments
                  </li>
                  <li>
                    <strong>Monitoring:</strong> 24/7 monitoring for suspicious
                    activities
                  </li>
                  <li>
                    <strong>Backup:</strong> Regular encrypted backups with
                    secure storage
                  </li>
                </ul>
                <p>
                  While we implement strong security measures, no system is 100%
                  secure. We encourage you to use strong passwords and enable
                  two-factor authentication.
                </p>
              </CardContent>
            </Card>

            <Card id="retention">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">5</Badge>
                  Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  We retain your information for as long as necessary to provide
                  our services and comply with legal obligations:
                </p>
                <ul>
                  <li>
                    <strong>Account Data:</strong> Retained while your account
                    is active
                  </li>
                  <li>
                    <strong>Ticket Data:</strong> Retained for 7 years after
                    ticket closure for business records
                  </li>
                  <li>
                    <strong>Log Data:</strong> Retained for 90 days for security
                    and troubleshooting
                  </li>
                  <li>
                    <strong>Deleted Accounts:</strong> Most data deleted within
                    30 days, some retained for legal compliance
                  </li>
                </ul>
                <p>
                  You can request deletion of your data at any time, subject to
                  legal retention requirements.
                </p>
              </CardContent>
            </Card>

            <Card id="rights">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">6</Badge>
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  You have the following rights regarding your personal
                  information:
                </p>
                <ul>
                  <li>
                    <strong>Access:</strong> Request a copy of your personal
                    data
                  </li>
                  <li>
                    <strong>Correction:</strong> Update or correct inaccurate
                    information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    data
                  </li>
                  <li>
                    <strong>Portability:</strong> Export your data in a
                    machine-readable format
                  </li>
                  <li>
                    <strong>Restriction:</strong> Limit how we process your
                    information
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to certain types of
                    processing
                  </li>
                </ul>
                <p>
                  To exercise these rights, contact us at privacy@tickethub.com.
                  We'll respond within 30 days.
                </p>
              </CardContent>
            </Card>

            <Card id="cookies">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">7</Badge>
                  Cookies and Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>We use cookies and similar technologies to:</p>
                <ul>
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic
                    functionality (login, security)
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings
                    and preferences
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Understand how you use
                    our service (anonymized)
                  </li>
                </ul>
                <p>
                  You can control cookies through your browser settings.
                  Disabling essential cookies may affect service functionality.
                </p>
                <p>
                  We do not use third-party advertising cookies or tracking
                  pixels.
                </p>
              </CardContent>
            </Card>

            <Card id="changes">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">8</Badge>
                  Policy Changes
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  We may update this Privacy Policy from time to time. When we
                  make changes:
                </p>
                <ul>
                  <li>
                    We'll update the "Last updated" date at the top of this
                    policy
                  </li>
                  <li>
                    For significant changes, we'll notify you via email or
                    in-app notification
                  </li>
                  <li>
                    Your continued use of the service constitutes acceptance of
                    the updated policy
                  </li>
                </ul>
                <p>
                  We encourage you to review this policy periodically to stay
                  informed about how we protect your information.
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
                Contact Our Privacy Team
              </CardTitle>
              <CardDescription>
                Questions about privacy? We're here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Privacy Email:</strong> privacy@tickethub.com
                </p>
                <p>
                  <strong>Data Protection Officer:</strong> dpo@tickethub.com
                </p>
                <p>
                  <strong>Address:</strong> 158 Jan Smuts Avenue Rosebank ,
                  Johannesburg, Sandton, South Africa
                </p>
                <p>
                  <strong>Phone:</strong> (063) 695 7571
                </p>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-muted-foreground">
                  For EU residents: You also have the right to lodge a complaint
                  with your local data protection authority.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
