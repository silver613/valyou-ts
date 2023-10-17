import { Avatar, Button, Card, Chip } from '@mui/material';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import CommentIcon from '../icons/CommentIcon';
import PromoteIcon from '../icons/PromoteIcon';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function DetailCard() {
  return (
    <Card className="p-2 my-4">
      <Card className="flex items-center px-2 py-4">
        <Avatar
          src="/image/sampleAvatar.jpg"
          sx={{ width: '65px', height: '65px' }}
        />
        <div className="ml-2">
          <p className="text-xl font-bold">Drake</p>
          <p className="text-sm">
            <span className="font-bold text-gray-500">Rapper</span> shared video
            track <SlideshowIcon fontSize="small" />
          </p>
        </div>
        <p className="text-sm block ml-auto">Major artist</p>
      </Card>
      <video src="/video/sampleVideo.mp4" controls className="w-full my-2" />
      <div className="flex">
        <div className="flex">
          <Button
            variant="outlined"
            startIcon={<CommentIcon />}
            sx={{ color: '#000', fontWeight: '600' }}
          >
            comments
          </Button>
          <Button
            variant="outlined"
            startIcon={<PromoteIcon />}
            sx={{
              color: '#000',
              fontWeight: '600',
              marginLeft: '10px',
            }}
          >
            promote
          </Button>
        </div>
        <div className="flex ml-auto">
          <Button variant="outlined" sx={{ color: '#000', fontWeight: '600' }}>
            Valyou song
          </Button>
          <Button
            className="bg-gradient-to-r from-[#1db8ba] to-[#28f0c0]"
            variant="contained"
            sx={{
              fontWeight: '600',
              marginLeft: '10px',
            }}
          >
            invest in artist
          </Button>
        </div>
      </div>

      <Card className="px-2 py-4 flex">
        <Avatar src="/image/sampleAvatar.jpg" />
        <Swiper>
          <SwiperSlide>
            <p className="font-bold">Drake-</p>
            <div className="border border-gray-300 rounded-full px-2 py-1">
              <p className="color-primary font-semibold">
                Stock Price{' '}
                <span className="color-primary font-bold">$78.44 VXD</span>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Card>
    </Card>
  );
}
