import Link from "next/link";
import { auth } from "~/server/auth";
import ProfileButton from "./auth/profile-button";
import { Button } from "./ui/button";

export default async function Header() {
  const session = await auth();
  const hasSession = session?.user;

  return (
    <header className="flex items-center justify-between gap-4">
      <Link href="/" className="text-lg font-bold tracking-tighter">
        YearMood
      </Link>
      {hasSession ? (
        <ProfileButton user={session.user} />
      ) : (
        <Button asChild>
          <Link href="/sign-in">Sign In</Link>
        </Button>
      )}
    </header>
  );
}
