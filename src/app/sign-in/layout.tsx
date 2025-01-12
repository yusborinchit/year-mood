interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: "Year Mood | Sign In",
};

export default function SignInLayout({ children }: Readonly<Props>) {
  return children;
}
