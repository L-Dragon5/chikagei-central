import { usePage } from '@inertiajs/react';

const Dashboard = () => {
  const { auth } = usePage().props;

  return 'hi';
};

export default Dashboard;
