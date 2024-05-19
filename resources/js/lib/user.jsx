import { usePage } from '@inertiajs/react';

export const useAuthUser = () => {
  const { auth } = usePage().props;

  if (auth?.user) {
    return { user: auth.user };
  }

  return { user: null };
};
