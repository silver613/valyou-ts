import { Avatar, IconButton, TextField } from '@mui/material';
import Close from '@mui/icons-material/Close';
import CommentItem from './CommentItem';
import SendIcon from '@mui/icons-material/Send';

export default function CommentBox() {
  return (
    <div className="box-shadow-thin w-[29%] p-2 h-[40vw] overflow-y-auto flex flex-col">
      <div className="flex justify-between items-center border-b">
        <p className="font-bold">Comments</p>
        <IconButton>
          <Close />
        </IconButton>
      </div>
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
      <div className="flex items-center justify-between gap-2 py-2 border-t">
        <Avatar
          src="/image/sampleAvatar.jpg"
          sx={{ width: '30px', height: '30px' }}
        />
        <TextField
          placeholder="Write a comment"
          size="small"
          fullWidth
          InputProps={{ sx: { borderRadius: '50px' } }}
        />
        <IconButton className="bg-pink-gradient">
          <SendIcon color="primary" />
        </IconButton>
      </div>
    </div>
  );
}
