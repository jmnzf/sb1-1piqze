import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';
import { PageTransition } from '../components/common/PageTransition/PageTransition';

export const MainLayout: React.FC = () => {
  const location = useLocation();

  return (
    <PageLayout>
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </AnimatePresence>
    </PageLayout>
  );
};