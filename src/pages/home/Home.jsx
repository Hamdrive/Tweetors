import React from 'react'
import { useAuth } from '../../context';
import { Auth, Dashboard } from "./pages";

export const Home = () => {
      const { user } = useAuth();

  return <div>{user ? <Dashboard /> : <Auth />}</div>;
}
