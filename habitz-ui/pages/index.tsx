import type { NextPage } from 'next';
import Layout from '../components/Layout';
import LandingPage from '../components/pages/LandingPage';

const Home: NextPage = () => {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
};

export default Home;
