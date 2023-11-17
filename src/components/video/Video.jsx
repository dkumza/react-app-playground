import "./Video.css";

const YoutubeVideo = ({ value }) => {
   return (
      <>
         {/*  shows video thumbnails */}
         {/* <img
            src={`http://img.youtube.com/vi/${value.thumbnail}/0.jpg`}
            alt="Video thumbnail"
         /> */}
         {/* shows video iframe */}
         <iframe
            width="500"
            height="250"
            src={`https://www.youtube.com/embed/${value.videoID}?autoplay=${value.autoplay}&color=${value.color}&controls=${value.controls}&start=${value.start}&end=${value.end}&loop=${value.loop}`}
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
         ></iframe>
      </>
   );
};

export default YoutubeVideo;
