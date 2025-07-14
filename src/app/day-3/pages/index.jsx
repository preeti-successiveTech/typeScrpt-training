import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default Home;
