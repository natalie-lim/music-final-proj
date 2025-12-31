import "./App.css";

function App() {
  return (
    <>
      <div className="background-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
        <div className="blob blob-5"></div>
        <div className="blob blob-6"></div>
      </div>
      <div className="content">
        <h1 className="playlist-title">
          natalie's tilting and lilting playlist
        </h1>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/19iuabCDSXkbjxVrhCUjWF?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        <div className="videos-section">
          <div className="video-item">
            <h2 className="video-title">atmospheric soundscapes</h2>
            <p className="video-description">
              A gentle, ambient piece that drifts through ethereal melodies and
              soft textures, perfect for moments of reflection and calm.
            </p>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/0lNFHD0lUAQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-item">
            <h2 className="video-title">melodic reverie</h2>
            <p className="video-description">
              Lush harmonies and flowing rhythms create a dreamy landscape that
              invites you to wander through its musical corridors.
            </p>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/0KNtHyNAXEM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-item">
            <h2 className="video-title">sonic landscapes</h2>
            <p className="video-description">
              An immersive journey through layered sounds and shifting moods,
              where each note finds its place in the greater musical narrative.
            </p>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/HuS5NuXRb5Y"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
