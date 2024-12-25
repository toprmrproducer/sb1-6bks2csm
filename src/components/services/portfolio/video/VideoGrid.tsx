import React from 'react';
import VideoCard from './VideoCard';

const videos = [
  { id: "1041570617", title: "Brand Story" },
  { id: "1041570652", title: "Product Showcase" },
  { id: "1041570666", title: "Event Coverage" },
  { id: "1041570704", title: "Customer Testimonial" },
  { id: "1042097575", title: "Behind the Scenes" },
  { id: "1042097559", title: "Company Culture" },
  { id: "1042097540", title: "Team Spotlight" }
];

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {videos.map((video, index) => (
        <VideoCard
          key={video.id}
          {...video}
          index={index}
        />
      ))}
    </div>
  );
}