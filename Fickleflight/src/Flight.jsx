import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import flickFlight from "./images/flickFlight.png";
// import banner from '../images/banner.png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Duration from './images/Duration.png'
import hotel from './images/hotel.png'
import beds from './images/beds.png'
import ahsan from './images/ahsan.jpeg'
import bg2 from './images/bg2.png'
import bg3 from './images/bg3.png'
import bg22 from './images/bg22.png'
import bg33 from './images/bg33.png'
import bg4 from './images/bg4.png'
import bg44 from './images/bg44.png'
import bg5 from './images/bg5.png'
import bg55 from './images/bg55.png'
import bg6 from './images/bg6.png'
import bg66 from './images/bg66.png'
import social from './images/social.png'
import Symbols from './images/Symbols.png'
import video from './images/video.png'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import './App.css'






const labels = {
  3.5: '4.9',
  4: 'Good+',
 
};


const options = ['Singapore', 'Pakistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon',
'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica',
'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji',
'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea',
'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq',
'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati',
'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico',
'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru',
'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman',
'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland',
'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan',
'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];



const pages = ['Explore', 'Search', 'Hotels','Offers'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Flight() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const [values] = React.useState(dayjs('2024-04-17'));
  const valu = 3.5;

  const [showCard, setShowCard] = useState(false);

  const handleButtonClick = () => {
    // Set showCard state to true when the button is clicked
    setShowCard(true);
  };


  return (
    <>
    <div>
    <AppBar position="static">
      <Container maxWidth="xl bg-white ">
        <Toolbar disableGutters>
        <img className='ml-10' src={flickFlight} alt="" />
           
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black', 
              textDecoration: 'none',
             
            }}
          >
  
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
           
          
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      {pages.map((page) => (
        <MenuItem key={page} onClick={() => handleMenuItemClick(page)}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      ))}
    </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >       
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end'} }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', textTransform: 'capitalize' }}
              >
                
                {page}
          
              </Button>
              
            ))}
            
          <IconButton
            
            aria-label="show notifications"
            color="black"
            sx={{ marginRight: '10px' }}
          >
            <Badge badgeContent={2} color="error" >
              <NotificationsIcon />
            </Badge>
          </IconButton>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Profile settings">
                
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Ahsan Zaidi" src={./} />        */}
                <img className='w-12 h-12 rounded-full' src={ahsan} alt="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>   
    </div>


    <div className='banner justify-center items-center'>
     <div className='text-white    text-center'>
     <Grid item xs={12} sm={12} md={8} lg={12}>
     <h2 className='pt-40 text-6xl font-bold'>Let’s explore & travel the world</h2>
        <p className='mt-4 text-2xl'>Find the best destinations and the most popular stays!</p>
  </Grid> 
     </div>

     <div className='flex justify-center  items-center mt-20'>
     <div className='  bg-white w-10/12 h-48 rounded-lg '>
        <h2 className='bg-white text-2xl mt-8 font-semibold ml-12'>SEARCH FLIGHTS

        <div className="mr-4 flex justify-end -mt-8">
        <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
       
      >
        <FormControlLabel value="Return" control={<Radio />} label="Return" />
        <FormControlLabel value="One-Way" control={<Radio />} label="One-Way" />
        
      </RadioGroup>
    </FormControl>
    </div>
        
        </h2>
        <div className='ml-12 mt-8 flex '>
     
     <br />
     <Autocomplete
       value={value}
       onChange={(event, newValue) => {
         setValue(newValue);
       }}
       inputValue={inputValue}
       onInputChange={(event, newInputValue) => {
         setInputValue(newInputValue);
       }}
       id="controllable-states-demo"
       options={options}
       sx={{ width: 350 }}
       renderInput={(params) => <TextField {...params} label="Departure" />}
     />

<div className='ml-8'>
     <Autocomplete
       value={value}
       onChange={(event, newValue) => {
         setValue(newValue);
       }}
       inputValue={inputValue}
       onInputChange={(event, newInputValue) => {
         setInputValue(newInputValue);
       }}
       id="controllable-states-demo"
       options={options}
       sx={{ width: 350 }}
       renderInput={(params) => <TextField {...params} label="Arrival" />} 
     />
     
   </div>

   <div className='ml-8 -mt-2'>
   <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        {/* <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} /> */}
        <DatePicker
          label="Date"
          value={values}
          onChange={(newValue) => setValue(newValue)}
          sx={{ width: 350 }}
        />
      </DemoContainer>
    </LocalizationProvider>
    </div>
    <button className='ml-16' variant="contained" style={{ width: '180px', height: '54px', backgroundColor: '#F99A0E', color:'white', borderRadius:'4px' }}>SEARCH FLIGHTS</button>
   </div>
    </div>
    </div>

    {/* Recent searches........................................................... */}
    <div className='Recent-searches flex   h-100vh mt-40'><div className='flex justify-start text-2xl ml-40 mt-20 font-bold'>Recent Searches</div>
    </div>

<div className='mt-12 flex justify-center mx-auto w-10/12 pb-12 font-medium  '>  
    <Grid container spacing={4}>
  <Grid item xs={6}>

    <div className='mt-4 border border-gray-500 rounded-md h-32'>
     <p className='mt-4 ml-6 text-blue-500 font-bold text-2xl'> DUB <span className='flex justify-center -mt-6 '><img src={Duration} alt="" /> </span>  <span className='text-blue-500 font-bold flex justify-end -mt-8 mr-6'>CAN</span></p>
    <p className='text-2xl font-medium ml-4 mt-4 flex justify-center'>Depart on: <span className='font-normal ml-2'> 7 May 2024</span></p>
    </div>
    
  </Grid>

  <Grid item xs={6}>
  <div className='mt-4 border border-gray-500 rounded-md h-32'>
     <p className='mt-4 ml-6 text-blue-500 font-bold text-2xl'> AUS <span className='flex justify-center -mt-6 '><img src={Duration} alt="" /> </span>  <span className='text-blue-500 font-bold flex justify-end -mt-8 mr-6'>UK</span></p>
    <p className='text-2xl font-medium ml-4 mt-4 flex justify-center'>Depart on: <span className='font-normal ml-2'> 9 May 2024</span></p>
    </div>
  </Grid>
 
</Grid>

</div>


{/* Prepare for your next trip.................................. */}
<div className='PrepareTrip'>
<h2 className=' ml-40 text-2xl text-gray-400'>Prepare For your trip

<div className='flex justify-between  w-11/12'>
<div className='Hotel mt-8 relative cursor-pointer'>
  <img src={hotel} alt="" />
  <img src={beds} className="absolute inset-0 ml-4 my-auto mt-5" alt="Overlay" />
  <p className='flex justify-center text-base'>Hotel</p>
</div>

<div className='Attractions mt-8 relative cursor-pointer '>
  <img src={bg2} alt="" />
  <img src={bg22} className="absolute inset-0 ml-4 my-auto mt-4" alt="Overlay" />
  <p className='flex justify-center text-base'>Attraction</p>
</div>

<div className='Eats mt-8 relative cursor-pointer  '>
  <img src={bg3} alt="" />
  <img src={bg33} className="absolute inset-0 ml-4 my-auto  mt-4" alt="Overlay" />
  <p className='flex justify-center text-base'>Eats</p>
</div>

<div className='Commute mt-8 relative  cursor-pointer '>
  <img src={bg4} alt="" className='mb-2'/>
  <img src={bg44} className="absolute inset-0 ml-5 my-auto mt-4  " alt="Overlay" />
  <p className='flex justify-center text-base'>Commute</p>
</div>

<div className='Taxi mt-8 relative cursor-pointer '>
  <img  src={bg5} alt="" className='mb-2'/>
  <img src={bg55} className="absolute inset-0 ml-5 my-auto mt-4" alt="Overlay" />
  <p className='flex justify-center text-base'>Taxi</p>
</div>

<div className='Movie mt-8 relative cursor-pointer '> 
  <img src={bg6} alt="" className='mb-2' />
  <img src={bg66} className="absolute inset-0 ml-5 my-auto mt-5" alt="Overlay" />
  <p className='flex justify-center text-base'>Movies</p>
</div>


</div>
</h2>
</div>

{/* Plan your next trip///////////////////////////////////// */}

<div className='PlanTrip  mt-16  flex justify-center'>

  <div className='w-10/12'>
  <h3 className='text-blue-800 text-2xl font-semibold'>PLAN YOUR NEXT TRIP</h3>
  <p className='text-4xl font-semibold mt-2'>Most Popular Destinations</p>

  <div className='All-Destinations'>
  <Grid container spacing={2}>
  <Grid item xs={12} md={6} lg={3} xl={3}>
  <div className='Paris mt-4  '>
  <p className='text-white ml-2 pt-2 font-bold'>Paris <span className=' ml-48 font-normal'>FROM</span></p>
  <p className='text-white flex justify-end pr-3 font-bold text-3xl'>$699</p>
                {/* <img src={ParisImage} alt="" className='Paris' /> */}
              
                
              </div>
  </Grid>
  <Grid item xs={12} md={6} lg={3} xl={3}>
  <div className=' mt-4 greece ' >
  <p className='text-white ml-2 pt-2 font-bold'>Norway <span className='ml-40 font-normal'>FROM </span></p>
  <p className='text-white flex justify-end pr-3 font-bold text-3xl'>$1079</p>

    {/* <img src={Norway} alt="" className='syd' /> */}
   
  
              </div>
  </Grid>
  <Grid item xs={12} md={6} lg={3} xl={3}>
  <div className=' mt-4 norway'>
  <p className='text-white ml-2 pt-2 font-bold'>Greece <span className=' ml-44 font-normal'>FROM</span></p>
  <p className='text-white flex justify-end pr-3 font-bold text-3xl'>$899</p>
                {/* <img src={Greece} alt="" className='sydney' /> */}
              </div>
  </Grid>
  <Grid item xs={12} md={6} lg={3} xl={3}>
  <div className=' mt-4  tuscany'>
  <p className='text-white ml-2 pt-2 font-bold'>Tuscany <span className=' ml-40 font-normal'>FROM</span></p>
  <p className='text-white flex justify-end pr-3 font-bold text-3xl'>$900</p>
                {/* <img src={Tuscany} alt="" className='canada' /> */}
              </div>
  </Grid>
</Grid>

   
</div>
  </div>


</div>

{/* Recommended Holidays ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

<div className='PlanTrip mt-24  flex justify-center'>

  <div className='w-10/12'>
  <p className='text-4xl font-semibold mt-2'>Recommended Holidays</p>

  <div className='All-Destinations'>
  <Grid container spacing={2}>
  <Grid item xs={12} md={6} lg={3} xl={3}>
  <div className=' Bali mt-4  '>
  </div>
  <div className='border border-slate-100 cont' ><p className='mt-2 ml-2 font-medium'>Bali  <span className='ml-52 relative top-2 text-blue-600 font-bold text-xl'>$900</span></p>
  <p className='ml-2 text-sm text-gray-400'>6D3N </p>
  </div>
  </Grid>

  <Grid item xs={12} md={6} lg={3} xl={3}>
  <div className=' mt-4 Boracay ' >
  </div>
  <div className='border border-slate-100 cont'><p className='mt-2 ml-2 font-medium'>Boracay<span className='ml-44 relative top-2 text-blue-600 font-bold text-xl'>$900</span></p>
  <p className='ml-2 text-sm text-gray-400'>4D3N</p>
  </div>
  </Grid>

  <Grid item xs={12} md={6} lg={3} xl={3}>
  <div className=' mt-4  Switzerland'>      
 </div>
 <div className='border border-slate-100 cont'><p className='mt-2 ml-2 font-medium'>Swiss<span className='ml-48 relative top-2 text-blue-600 font-bold text-xl'>$900</span></p>
 <p className='ml-2 text-sm text-gray-400'>3D5N</p>
 </div>
 
  </Grid>

  <Grid item xs={12} md={6} lg={3} xl={3}>
  <div className=' mt-4  Palawan '>
  </div>
  <div className='border border-slate-100 cont'><p className='mt-2 ml-2 font-medium'>Palawan<span className='ml-44 relative top-2 text-blue-600 font-bold text-xl'>$900</span></p>
  <p className='ml-2 text-sm text-gray-400'>5D3N</p>
  </div>
  </Grid>
</Grid>

   
</div>
  </div>


</div>

{/* Most Popular destination///////////////////////////////////////////////////////////////////////////////////// */}

<div className='popular-destination  mt-24 mb-8 flex justify-center  '>
  <div className='w-10/12'>
  <p className='text-4xl font-semibold mt-2'>Popular Stays</p>

  <div className='All-Destinations'>
  <Grid container spacing={2}>

  <Grid item xs={12} md={6} lg={3} xl={3}>
  <div className='Popular-Stays mt-4 cont border border-slate-100' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className='mt-3 cstm-img rounded-lg' style={{ width: '270px', height: '200px' }}>
      {/* Content of the custom image */}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', paddingRight: '10px' }}>
      <p className='ml-4 mt-3 text-gray-400'>Entire Bungalow</p>
      <img className='mt-3 mr-1 cursor-pointer' src={video} alt="Icon" style={{ width: '23px', height: '23px' }} />
    </div>
    <p className='mt-1 ml-4 font-bold text-lg' style={{ alignSelf: 'flex-start' }}>MatterHorns Suites.</p>
    <p className='ml-4' style={{ alignSelf: 'flex-start' }}>$575/night.</p>
    <Box
      sx={{
        width: 200,
        display: 'flex',
        mt: 2, // margin-top set to 4
      }}
    >
      <Box sx={{ mr: -4.5 }}>{labels[value]}</Box>
      <Rating
        name="text-feedback"
        value={valu}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        max={1}
      />
      <Box >{labels[valu]}</Box>
      <Box style={{ color: '#1262AF', marginLeft:'8px' }}>{`(60 reviews)`}</Box>
    </Box>
    <button className='w-64 mt-3 rounded-md font-medium' style={{ color: '#1262AF', borderColor: '#CCDCEC', borderWidth: '1px', borderStyle: 'solid', height:'44px' }}>More Details</button>
  </div>
</Grid>


{/* /////////////////////////////////     Discovery            /////////////////////////// */}

  <Grid item xs={12} md={6} lg={3} xl={3}>
  <div className='Popular-Stays mt-4 cont border border-slate-100' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className='mt-3 cstm-img2 rounded-lg' style={{ width: '270px', height: '200px' }}>
      {/* Content of the custom image */}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', paddingRight: '10px' }}>
      <p className='ml-4 mt-3 text-gray-400'>2-Story BeachFront Suite</p>
      <img className='mt-3 mr-1 cursor-pointer' src={video} alt="Icon" style={{ width: '23px', height: '23px' }} />
    </div>
    <p className='mt-1 ml-4 font-bold text-lg' style={{ alignSelf: 'flex-start' }}>Discovery Shores</p>
    <p className='ml-4' style={{ alignSelf: 'flex-start' }}>$360/night.</p>
    <Box
      sx={{
        width: 200,
        display: 'flex',
        mt: 2, // margin-top set to 4
      }}
    >
      <Box sx={{ mr: -4.5 }}>{labels[value]}</Box>
      <Rating
        name="text-feedback"
        value={valu}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        max={1}
      />
      <Box >{labels[valu]}</Box>
      <Box style={{ color: '#1262AF', marginLeft:'8px' }}>{`(116 reviews)`}</Box>
    </Box>
    <button className='w-64 mt-3 rounded-md font-medium' style={{ color: '#1262AF', borderColor: '#CCDCEC', borderWidth: '1px', borderStyle: 'solid', height:'44px' }}>More Details</button>
  </div>
  </Grid>


{/* ////////////////////////////    Arctic Hut ////////////////////////// */}
<Grid item xs={12} md={6} lg={3} xl={3}>
  <div className='Popular-Stays mt-4 cont border border-slate-100' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className='mt-3 cstm-img3 rounded-lg' style={{ width: '270px', height: '200px' }}>
      {/* Content of the custom image */}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', paddingRight: '10px' }}>
      <p className='ml-4 mt-3 text-gray-400'>Single Deluxe Hut</p>
      <img className='mt-3 mr-1 cursor-pointer' src={video} alt="Icon" style={{ width: '23px', height: '23px' }} />
    </div>
    <p className='mt-1 ml-4 font-bold text-lg' style={{ alignSelf: 'flex-start' }}>Arctic Hut</p>
    <p className='ml-4' style={{ alignSelf: 'flex-start' }}>$420/night.</p>
    <Box
      sx={{
        width: 200,
        display: 'flex',
        mt: 2, // margin-top set to 4
      }}
    >
      <Box sx={{ mr: -4.5 }}>{labels[value]}</Box>
      <Rating
        name="text-feedback"
        value={valu}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        max={1}
      />
      <Box >{labels[valu]}</Box>
      <Box style={{ color: '#1262AF', marginLeft:'8px' }}>{`(78 reviews)`}</Box>
    </Box>
    <button className='w-64 mt-3 rounded-md font-medium' style={{ color: '#1262AF', borderColor: '#CCDCEC', borderWidth: '1px', borderStyle: 'solid', height:'44px' }}>More Details</button>
  </div>

  </Grid>


{/* ////////////////////////////////   Lake    //////////////////////////// */}
<Grid item xs={12} md={6} lg={3} xl={3}>
  <div className='Popular-Stays mt-4 cont border border-slate-100' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className='mt-3 cstm-img4 rounded-lg' style={{ width: '270px', height: '200px' }}>
      {/* Content of the custom image */}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', paddingRight: '10px' }}>
      <p className='ml-4 mt-3 text-gray-400'>Deluxe King Room</p>
      <img className='mt-3 mr-1 cursor-pointer' src={video} alt="Icon" style={{ width: '23px', height: '23px' }} />
    </div>
    <p className='mt-1 ml-4 font-bold text-lg' style={{ alignSelf: 'flex-start' }}>Lake Louise Inn</p>
    <p className='ml-4' style={{ alignSelf: 'flex-start' }}>$244/night.</p>
    <Box
      sx={{
        width: 200,
        display: 'flex',
        mt: 2, // margin-top set to 4
      }}
    >
      <Box sx={{ mr: -4.5 }}>{labels[value]}</Box>
      <Rating
        name="text-feedback"
        value={valu}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        max={1}
      />
      <Box >{labels[valu]}</Box>
      <Box style={{ color: '#1262AF', marginLeft:'8px' }}>{`(63 reviews)`}</Box>
    </Box>
    <button className='w-64 mt-3 rounded-md font-medium' style={{ color: '#1262AF', borderColor: '#CCDCEC', borderWidth: '1px', borderStyle: 'solid', height:'44px' }}>More Details</button>
  </div>
  </Grid>

 
</Grid>

   
</div>
  </div>
</div>
{/* //////////////////////////// Footerrrrrrrrrrrrrrrr Section //////////////////////// */}
<div className='footer h-full'>
  <h2 className='flex justify-center pt-24 text-xl font-bold' style={{color:'#1262AF', backgroundColor:'none' , outline:"none"}}>SUBSCRIBE TO OUR NEWSLETTER </h2>
  <h3 className='flex justify-center text-2xl font-bold'>Get Weekly Updates</h3>

  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <Card sx={{ width: '600px', height: '320px', marginTop:'20px' }}>
    <CardContent>
      <Typography sx={{ marginLeft:'20px', fontSize:'16px', marginTop:"15px" }} color="text.secondary" gutterBottom >
      Fill in Your Details to join the party!
      </Typography>

      <Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '525px', height: '40px', marginLeft:'20px' }, // Adjust width and height here
  }}
  noValidate
  autoComplete="off"
>
  <TextField id="outlined-basic" label="Your Name" variant="outlined" />
</Box>

<Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '525px', height: '40px', marginLeft:'20px', marginTop:'30px' }, // Adjust width and height here
  }}
  noValidate
  autoComplete="off"
>
  <TextField id="outlined-basic" label="Email Address" variant="outlined" />
</Box>
    </CardContent>
    <CardActions>
    <button
        variant="contained"
        className='rounded-md h-10 submit-btn'
        onClick={handleButtonClick}
      >
        Submit
      </button>

    </CardActions>
  </Card>
</div>

</div>
<div className='footer-background '>
<Grid container spacing={2}>

<Grid item xs={12} md={6} lg={6} xl={6}>
           <div className='fickle mt-8 pl-32'>
 <img src={Symbols} alt="" />
</div> 
<div className=' pl-32 text-white mt-2 w-9/12'><p>Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop.</p></div>
<div className='social-icons mt-4 ml-32 cursor-pointer '>
  <img src={social} alt="" />
</div>
        </Grid>


        <Grid item xs={12} md={6} lg={6} xl={6}>
  <div className="flex">
    <div className="text-white">
      <p className="text-white pt-4 font-bold text-xl cursor-pointer">Company</p>
      <ul className="list-none cursor-pointer">
        <li className=" text-lg mt-1 hover:text-green-500">About us</li>
        <li className=" text-lg mt-1 hover:text-green-500">News</li>
        <li className=" text-lg mt-1 hover:text-green-500">Careers</li>
        <li className=" text-lg mt-1 hover:text-green-500">How We Work</li>
      </ul>
    </div>
    <div className="ml-40 text-white">
      <p className="text-white pt-4 font-bold text-xl cursor-pointer">Support</p>
      <ul className="list-none cursor-pointer">
        <li className=" text-lg mt-1 hover:text-green-500  ">Account</li>
        <li className="text-lg mt-1 hover:text-green-500">Support Center</li>
        <li className=" text-lg mt-1 hover:text-green-500">FAQ</li>
        <li className=" text-lg mt-1 hover:text-green-500">Accessibility</li>
      </ul>
    </div>

    <div className="ml-40 text-white">
      <p className="pt-4 font-bold text-xl cursor-pointer">More</p>
      <ul className="list-none cursor-pointer">
        <li className=" text-lg mt-1 hover:text-green-500">Covid Advisory</li>
        <li className=" text-lg mt-1 hover:text-green-500">Airline Fees</li>
        <li className=" text-lg mt-1 hover:text-green-500">Tips</li>
        <li className=" text-lg mt-1 hover:text-green-500">Quarantine Rules</li>
      </ul>
    </div>
  </div>
</Grid>  
      </Grid>
 
</div>
    </div>
   
    </>
  );
}
export default Flight;



