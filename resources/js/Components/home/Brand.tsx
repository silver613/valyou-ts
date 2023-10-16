import { Box, Typography } from '@mui/material';

export default function Brand() {
  const tempArr: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <Box className="shadow py-10 flex items-center justify-center rounded">
        <p className="lg:text-4xl text-lg font-bold text-center">
          Valyou X - Is A Multi Award Winning Start-Up
        </p>
      </Box>
      <Box className="flex flex-wrap my-4 justify-between">
        {tempArr.map((item: any) => (
          <Box
            className="shadow flex flex-col justify-center items-center py-4 my-1 rounded"
            sx={{ width: 'calc(100% / 5 - 15px)' }}
          >
            <Box className="w-3/5 mx-auto mb-2">
              <img src="/image/alibaba.png" alt="alibaba" />
            </Box>
            <p className="text-xs font-extralight">
              Alibaba Group Award Winner
            </p>
          </Box>
        ))}
      </Box>
    </>
  );
}
