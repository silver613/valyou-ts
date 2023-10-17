import { ReactNode } from 'react';
import { Container } from '@mui/material';
import InsideHeader from './inside/InsideHeader';

interface LayoutProps {
  children: ReactNode;
}

export default function InsideLayout({ children }: LayoutProps) {
  return (
    <>
      <InsideHeader activeTab="Bank" />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
}
