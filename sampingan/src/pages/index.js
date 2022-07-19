import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import BaseLayout from '../components/layouts/BaseLayout'
import styles from '../styles/Home.module.css'


function Home() {
  const router = useRouter();
  const [isLogin, setisLogin] = useState(false);
  useEffect(() => {
    // if(!isLogin){
    //   router.replace('/login', 'login');
    // }
    return () => {
      // cleanup
    };
  }, []);

  return (
    <BaseLayout>
      This is Home Page
    </BaseLayout>
  )
}

export async function getServerSideProps() {
  console.log('props are called here');
  return {
    props: {
      data: 'isempty'
    }
  }
}

export default Home
