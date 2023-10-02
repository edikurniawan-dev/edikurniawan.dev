import Link from 'next/link';
import { Button } from '@nextui-org/button';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <Link href="/home">Home</Link>
      <Button>this is button</Button>
      <ThemeSwitcher />
    </div>
  );
}
