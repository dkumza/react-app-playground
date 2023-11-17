import "./App.css";
// import image from "./components/images/logo.svg";
import YoutubeVideo from "./components/video/Video";
import VideoIsMissing from "./components/video/VideoIsMissing";

const App = () => {
   const videoData = [
      {
         videoID: "qd3mfYS_Xow",
         autoplay: "1",
         color: "white",
         controls: "1",
         start: "20",
         end: "",
         loop: "1",
         thumbnail: "qd3mfYS_Xow",
      },
      {
         videoID: "",
         autoplay: "",
         color: "",
         controls: "",
         start: "",
         end: "",
         loop: "",
      },
      {
         videoID: "GWYhtksrmhE",
         autoplay: "0",
         color: "",
         controls: "",
         start: "30",
         end: "40",
         loop: "",
         thumbnail: "GWYhtksrmhE",
      },
   ];
   return (
      <div className="content-container">
         <div className="main-para">
            <h1 className="main-title">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit...
            </h1>

            {/* <p className="main-para">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
               incidunt error, eligendi voluptas temporibus facilis quis nihil
               obcaecati, vero nam dignissimos esse minima, hic dolor eaque ea
               ipsum earum consequuntur voluptate suscipit aut! Accusantium nisi
               totam voluptate cupiditate pariatur consequuntur, veritatis
               asperiores commodi aliquid sunt provident aspernatur? Blanditiis
               recusandae, maxime inventore voluptatibus officiis commodi quas
               rerum dolorum minus iste aliquam sapiente itaque, aspernatur
               architecto earum voluptate laboriosam eos ducimus, amet
               obcaecati! Magnam est optio vel illum maxime itaque a suscipit,
               obcaecati, natus cupiditate rem, voluptas repellat! Corporis
               cumque nulla ratione libero quaerat porro aspernatur? Molestiae
               nobis architecto voluptas aut asperiores.
            </p> */}
         </div>
         <div className="video">
            {videoData.map((value) =>
               // *check if video is missing, then show random pic
               value.videoID ? (
                  <YoutubeVideo value={value} />
               ) : (
                  <VideoIsMissing />
               )
            )}
         </div>
         {/* <YoutubeVideo /> */}
      </div>
   );
};

export default App;
