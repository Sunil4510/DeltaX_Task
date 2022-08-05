import React from 'react'
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import LyricsIcon from '@mui/icons-material/Lyrics';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDownSharpIcon from '@mui/icons-material/VolumeDownSharp';
import VolumeUpSharpIcon from '@mui/icons-material/VolumeUpSharp';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from 'react';
const Footer = () => {
  const [value, setValue] = useState(30);
  const handleChange = (e,target)=>{
    setValue(target)
  }
  return (
    <div className="sidebar_footer fixed bottom-0 p-1 text-white w-full flex items-center justify-between">
        <div className="footer_album flex items-center space-x-8 cursor-pointer">
            <img src="https://i.scdn.co/image/ab67616d0000b273badc10f3684a57f23c26f6c1" alt="img" className="w-20 h-20 m-2"/>
            <div className="album_info ">
              <h>Kar Har Maidaan Fateh</h>
              <p>Sukhwinder Singh - Shreya Ghoshal - Vikram Montrose</p>
            </div>
            <div>
                <FavoriteBorderOutlinedIcon/>
            </div>
        </div>

        <div className="footer_play flex flex-col ml-10">
            <div className="footer_play_uppper flex items-center justify-between cursor-pointer">
                <ShuffleIcon className="child"/>
                <SkipPreviousRoundedIcon className="child"/>
                <PlayCircleFilledRoundedIcon className="child" sx={{fontSize:45}}/>
                <SkipNextRoundedIcon className="child"/>  
                <RepeatIcon className="child"/>
            </div>
            <div className="flex items-center space-x-10 mt-2 ">
                <p classname="">0:00</p>
                <hr className="w-96"/>
                <p>2:43</p>
            </div>
        </div>
        <div className="footer_volume ml-14 flex items-center space-x-10 cursor-pointer">
          <LyricsIcon/>
          <QueueMusicIcon/>
          <PhonelinkIcon/>
          <Box sx={{ width: 300 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDownSharpIcon/>
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
            <VolumeUpSharpIcon/>
          </Stack>
          </Box>
        </div>
      </div>
  )
}

export default Footer