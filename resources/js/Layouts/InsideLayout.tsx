import { ReactNode } from 'react';
import { Container } from '@mui/material';
import InsideHeader from './inside/InsideHeader';

interface LayoutProps {
  children: ReactNode;
  activeTab?: string;
}

export default function InsideLayout({
  children,
  activeTab = 'Bank',
}: LayoutProps) {
  return (
    <>
      <InsideHeader activeTab={activeTab} />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
}
