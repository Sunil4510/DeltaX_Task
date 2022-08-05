import React from 'react'
import SideIcon from './SideIcon'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Footer from './Footer';
import Body from './Body';
const Sidebar = () => {
  const list = ['Hindi','telugu','marathi','motivational'];
  const playlist = "text-gray-500 hover:text-white font-Dosis font-bold text-sm mt-4 tracking-widest uppercase cursor-pointer";
  return (
    <div className="sidebar">
    <div className="sidebar_body flex">
        <div className="sidebar_child bg-black p-1 pr-10 h-screen fixed">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" className="h-20 mr-20 p-3" alt="spotify"/>
              <SideIcon Icon={HomeIcon} title="Home"/>
              <SideIcon Icon={SearchIcon} title="Search"/>
              <SideIcon Icon={LibraryMusicIcon} title="Your Library"/>
                <div className="mt-10 ml-6 ">
                  <p className="text-green-600 hover:text-green-400 font-Dosis font-bold text-xl tracking-widest uppercase cursor-pointer">Playlist</p>
                  <hr className="sidebar_hr mt-2"/>
                  {list.map((value)=>(
                    <p className={playlist}>{value} songs</p>
                  ))}
                </div>
        </div>
        <div className="sidebar_b bg-gradient-to-r from-orange-500 via-white to-green-500 pl-80 p-10 pb-20 flex-1 h-screen">
            {/*body */}
            <Body/>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Sidebar



/*<p className="font-Dosis font-bold text-sm mt-4 tracking-widest uppercase">hindi songs</p>
                  <p className="font-Dosis font-bold text-sm mt-4 tracking-widest uppercase">telugu songs</p>
                  <p className="font-Dosis font-bold text-sm mt-4 tracking-widest uppercase">marathi songs</p>
                  <p className="font-Dosis font-bold text-sm mt-4 tracking-widest uppercase">motivational songs</p>
                  */