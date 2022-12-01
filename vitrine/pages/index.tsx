

import Link from 'next/link'
import {useRouter} from "next/router";
import {useState} from "react";
import {redirect} from "next/navigation";


const Home = () => {

    const router = useRouter()


    if (typeof window !== 'undefined') {
        //if (!localStorage.getItem('token')) {
        //    router.push('/register')
        //}
        router.push('/register')

    }




  return (
      <main>
        <h1>Home</h1>
      </main>
  )
}
export default Home