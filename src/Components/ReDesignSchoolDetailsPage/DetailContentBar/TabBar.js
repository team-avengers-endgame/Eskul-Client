import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BasicSchoolInfo from './BasicSchoolInfo';
import Description from './Description';
import Teachers from './Teachers/Teachers';
import SchoolContact from './SchoolContact';
import Feedback from '../../SchoolDetails/SchDetailsLayout/ContentBar/Feedback/Feedback';


const TabBar = () => {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <Box sx={{ width: '100%', typography: 'body1',mt:5 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList textColor="secondary" indicatorColor="secondary"  variant="scrollable"
  scrollButtons
  allowScrollButtonsMobile
  aria-label="scrollable force tabs example" onChange={handleChange} >
              <Tab label="Basic School Info" value="1" />
              <Tab label="Teachers" value="2" />
              <Tab label="Description" value="3" />
              {/* <Tab label="Board Result" value="4" /> */}
              <Tab label="Contact" value="5" />
              <Tab label="Feedback" value="6" />
              
            </TabList>
          </Box>
          <TabPanel value="1"><BasicSchoolInfo/></TabPanel>
          <TabPanel value="2"><Teachers/></TabPanel>
          <TabPanel value="3"><Description/></TabPanel>
          {/* <TabPanel value="4"><BoardResult/></TabPanel> */}
          <TabPanel value="5"><SchoolContact/></TabPanel>
          <TabPanel value="6"><Feedback/></TabPanel>
        </TabContext>
      </Box>
    );
};

export default TabBar;