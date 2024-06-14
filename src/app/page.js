'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function handleNaviage(){
    router.push('products')
  }
  
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2 className={`mb-3 text-2xl font-semibold`}>
        Welcome To Next js course Learning 2024
      </h2>
      <Link href={'/products'} className="font-bold text-lg">Products Page</Link>
      <Link href={'/accounts'} className="font-bold text-lg">Accoutns Page</Link>
      <h2 className={`mb-3 text-2xl font-semibold`}>
        Alternative Ways of Navigation
      </h2>
      <button onClick={handleNaviage}>Product Page</button>
    </main>
  );
}
