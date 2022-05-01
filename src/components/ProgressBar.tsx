import styles from "../styles/progressbar.module.css";
function ProgressBar() {
  const { container, progress, symbol } = styles;
  return (
    <div className={container}>
      <div className={progress}>
        <div className={symbol}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
