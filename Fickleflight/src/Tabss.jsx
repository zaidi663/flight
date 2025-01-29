import React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const StyledTabs = styled((props) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 50,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

function HomeContent() {
  return (
    <div className='text-gray-100'>
      <h2 className=''>Welcome </h2>
      <p>Back.</p>
    </div>
  );
}

function DatasetsContent() {
  return (
    <div className='text-white'>
      <h2>Datasets</h2>
      <p>Content for the Datasets tab.</p>
    </div>
  );
}

function ConnectionsContent() {
  return (
    <div className='text-white'>
      <h2>Connections</h2>
      <p>Content for the Connections tab.</p>
    </div>
  );
}

function VirtualContent() {
    return (
      <div className='text-white'>
        <h2>Virtual Content</h2>
        <p>Content for the Connections tab.</p>
      </div>
    );
  }
  

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ bgcolor: '#2e1534' }}>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="Home" />
          <StyledTab label="Datasets" />
          <StyledTab label="Connections" />
          <StyledTab label="Virtual Options" />
        </StyledTabs>
        <Box sx={{ p: 3 }}>
          {value === 0 && <HomeContent />}
          {value === 1 && <DatasetsContent />}
          {value === 2 && <ConnectionsContent />}
          {value === 3 && <VirtualContent />}
        </Box>
      </Box>
    </Box>
 
  );
}
