import DetailCard from '@/Components/socialmedia/DetailCard';
import PostCard from '@/Components/socialmedia/PostCard';
import InsideLayout from '@/Layouts/InsideLayout';
import { Box } from '@mui/material';

export default function SocialMedia() {
  return (
    <InsideLayout activeTab="Social Media">
      <div className="w-full lg:w-3/5">
        <PostCard />
        <DetailCard />
      </div>
      <div className="hidden lg:block h-[100vh] w-[40vw] m-2 background-shadow !sticky top-0"></div>
    </InsideLayout>
  );
}
