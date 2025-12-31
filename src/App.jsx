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
          Natalie's Tilting and Lilting Playlist
        </h1>
        <p className="intro-text">
          I made this playlist off of a certain feeling. These songs, to me, are
          all kind of stretching and pulling in a certain way. As such, I added
          a few sonatas and spirituals (from class and not) that I feel match
          this description, on top of a lot of modern tracks. Also, some of
          these music tracks are pulled from ice skating programs I feel are
          particularly beautiful, particularly push-and-pull-y (if that makes
          sense). I'm an ice skater too, so I thought this would be a lovely
          visual aid to show the kind of quality I'm trying to describe. Spotify in websites
          can also be kind-of finicky, so please let me know if there are any issues accessing the playlist!
        </p>
        <div className="spotify-wrapper">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/19iuabCDSXkbjxVrhCUjWF?utm_source=generator"
            width="100%"
            height="500"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <h2 className="section-title">
          Live Performances & MVs for Some Tracks
        </h2>

        <div className="videos-section">
          <div className="video-item">
            <h2 className="video-title">mitski's tiny desk</h2>
            <p className="video-description">
              Not all of these songs sung perfectly match that feeling described
              above, but I think Mitski in general tends to have a very
              interesting way of piecing together music. Some songs
              (particularly "Liquid Smooth"), have that stretchy quality to it.
              Also, Mitski was my first ever concert. So, I decided to add this
              tiny desk!
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
            <h2 className="video-title">japanese breakfast live performance</h2>
            <p className="video-description">
              The live performance has a bit of a harsher quality than the
              recorded (not as tilted and lilted), but I still quite enjoy it.
              Also, Japanese Breakfast is the author of a book close to my
              heart, "Crying in HMart." Therefore, I thought it was right to
              include this.
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
            <h2 className="video-title">eleanor rigby, the beatles</h2>
            <p className="video-description">
              In the depths of Covid quarantine, my freshman year dance teacher
              forced us to do a ballet routine to the instrumental version of
              Eleanor Rigby. I wish I had a video (or perhaps not). Something
              about the violin instrumental really spoke to me, and thus Eleanor
              Rigby became the first Beatles song I willingly added to a
              playlist. I think it has a lot of tension and release with the
              violin backing, which I think matches our theme quite nicely.
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

        <h2 className="section-title">
          skating programs that also remind me of this theme
        </h2>

        <div className="videos-section">
          <div className="video-item">
            <h2 className="video-title">wakaba higuchi</h2>
            <p className="video-description">
              This is simply beautiful, a wonderfully mature program set to Kate
              Bush's "Running Up That Hill". A lot of tension and expression is
              in this program, especially in the step sequence.
            </p>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/PJplL-du0Go"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-item">
            <h2 className="video-title">jason brown</h2>
            <p className="video-description">
              Jason Brown is one of the most artistically talented ice skaters
              to ever live. I think this program particularly features his
              strengths, and also has that tilt and lilt to it, although it
              displays that quality in a fun way.
            </p>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/uzaecs1ylGo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-item">
            <h2 className="video-title">tessa virtue and scott moir</h2>
            <p className="video-description">
              The lore with these two goes deep, but their chemistry is
              undeniable. Their Moulin Rouge gold-medal-winning performance is
              also amazing. However, I think this program shows a wonderful
              tilting and lilting quality.
            </p>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/eysNtspIDWs"
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
