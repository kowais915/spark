import Image from "next/image";

// Page Compnents
import Login from '@/components/pages/LoginPage';

export default function Home() {
  return (
    <main className="flex items-center justify-center ">
      <Login/>
    </main>
  );
}
