'use client';
import { signIn } from "next-auth/react";
// Router
import { useRouter } from "next/navigation";
// Firebase
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
// Auth
import { useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if(session){
    const addUserToDatabase = async () => {
      const docRef = await setDoc(doc(db, 'users', session?.user?.email!), {
          watchList: [],
      });
    };
    router.push('/');
    addUserToDatabase();
  }

  return (
    <section className='text-center mt-20'>
        <h2 className='text-2xl font-bold'>Crypto App powered by CoinGecko API V3</h2>
        <button className='border rounded px-8 py-2 mt-8 cursor-pointer' onClick={() => signIn('google')}>Sign In</button>
    </section>
  )
}

export default Login