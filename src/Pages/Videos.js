import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import { YouTubeProps } from "react-youtube";

const Video = () => {
  const opts = {
    height: "400",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const videoIds = [
    "WkyzaltuJvE",
    "v_wITjyVzvM",
    "M8g3tyeURmg",
    "Znrlu8RFBBM",
    "DGPTVlw-x0Y",
    "s1amWglxYi4",
  ];

  const videos = videoIds.map((videoId, index) => (
    <div key={index} style={{ flex: "0 0 50%", padding: "10px" }}>
      <Link to={`/video/${videoId}`}>
        <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
      </Link>
    </div>
  ));

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{videos}</div>
    </div>
  );

  function _onReady(event) {
    event.target.pauseVideo();
  }
};

export default Video;
