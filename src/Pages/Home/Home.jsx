import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed'; // Import the updated Feed component
import './Home.css';

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);
  const [videos, setVideos] = useState([]); // State to store videos

  const handleThumbnailClick = (video) => {
    setVideos(videos); // Update videos state even if clicked video doesn't change (important for refreshing data)
    setSelectedVideo(video);
  };

  return (
    <>
      <Sidebar setCategory={setCategory} sidebar={sidebar} category={category} />
      <div className={`container ${sidebar ? '' : 'large-container'}`}>
        <Feed videos={videos} category={category} setVideos={setVideos} />
      </div>
    </>
  );
};

export default Home;
