import styles from "../styles/app.module.css";
import background from "../assets/bg-desktop.png";
import ProgressBar from "./ProgressBar";
import Footer from "./Footer";
const logo = require("../assets/logo.svg").default;
const document = require("../assets/icon-document.svg").default;
const folder = require("../assets/icon-folder.svg").default;
const upload = require("../assets/icon-upload.svg").default;

function App() {
  const {
    container,
    backgroundContainer,
    contentContainer,
    left,
    right,
    iconsContainer,
    storageWrapper,
    usageContainer,
    remaining,
  } = styles;
  return (
    <>
      <div className={container}>
        <div className={backgroundContainer}>
          <img src={background} alt="background" />
        </div>
        <div className={contentContainer}>
          <div className={left}>
            <img src={logo} alt="logo" />
            <div className={iconsContainer}>
              <div>
                <img src={document} alt="document" />
              </div>
              <div>
                <img src={folder} alt="folder" />
              </div>
              <div>
                <img src={upload} alt="upload" />
              </div>
            </div>
          </div>
          <div className={right}>
            <div className={storageWrapper}>
              <p>
                You’ve used <span>815 GB</span> of your storage
              </p>
              <ProgressBar />
              <div className={usageContainer}>
                <p>0 GB</p>
                <p>1000 GB</p>
              </div>
              <div className={remaining}>
                <div>
                  <h1>185</h1>
                  <span>GB LEFT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
