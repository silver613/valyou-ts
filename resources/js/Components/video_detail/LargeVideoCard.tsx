import { Button, useMediaQuery } from '@mui/material';

import CommentIcon from '../icons/CommentIcon';
import PromoteIcon from '../icons/PromoteIcon';

interface Props {
  isCommentOpen: boolean;
  shareCommentStatus: (data: boolean) => void;
  sharePromoteStatus?: (data: boolean) => void;
  shareSongStatus?: (data: boolean) => void;
}

export default function LargeVideoCard({
  isCommentOpen = false,
  shareCommentStatus,
  sharePromoteStatus,
  shareSongStatus,
}: Props) {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className="shadow-lg p-2 w-full lg:w-[70%] box-shadow rounded sticky !top-0 md:static">
      <a href="/video_detail">
        <img
          src="/image/drake-starting-bottom.webp"
          alt="drake-starting-bottom.webp"
        />
      </a>
      <div className="flex mt-2 mb-4">
        <div className="flex">
          <Button
            variant="outlined"
            startIcon={<CommentIcon />}
            sx={{ color: '#000', fontWeight: '600' }}
            onClick={() => shareCommentStatus(!isCommentOpen)}
            size={isMobile ? 'small' : 'medium'}
          >
            comments
          </Button>
          <Button
            variant="outlined"
            startIcon={<PromoteIcon />}
            size={isMobile ? 'small' : 'medium'}
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
          <Button
            variant="outlined"
            sx={{ color: '#000', fontWeight: '600' }}
            size={isMobile ? 'small' : 'medium'}
          >
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
    </div>
  );
}
