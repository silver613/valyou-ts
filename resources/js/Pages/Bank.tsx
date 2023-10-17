import * as React from 'react';
import InsideLayout from '@/Layouts/InsideLayout';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PersoanlAccount from '@/Components/bank/PersonalAccount';

export default function Bank() {
  const [value, setValue] = React.useState('account');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <InsideLayout>
        <Box marginTop={'40px'}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange}>
                <Tab label="Personal Account" value="account" />
                <Tab label="Artist Compnay Funding" value="funding" />
                <Tab label="Investments" value="investment" />
                <Tab label="Business" value="business" />
              </TabList>
            </Box>
            <TabPanel value="account">
              <PersoanlAccount />
            </TabPanel>
            <TabPanel value="funding">Item Two</TabPanel>
            <TabPanel value="investment">Item Three</TabPanel>
            <TabPanel value="business">Item Four</TabPanel>
          </TabContext>
        </Box>
      </InsideLayout>
    </>
  );
}
