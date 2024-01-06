const MainHeader = () => {
  // Function to set the color mode and update the body class
  const setMode = (mode) => {
    document.body.classList = mode;
  };

  return (
    <header className="header container">
      {/* Header Title and Total Followers */}
      <div className="header__title">
        <h1>Social Media Dashboard 🔥🔥🔥🔥🔥</h1>
        <span className="header__subtitle">Total Followers: 23,004</span>
      </div>

      {/* Dark Mode Toggle */}
      <fieldset className="header__toggle toggle" role="radiogroup">
        <label>Dark Mode</label>
        <div className="toggle__wrapper">
          {/* Radio buttons for Dark and Light modes */}
          <input
            type="radio"
            name="theme"
            id="dark"
            onClick={() => setMode("dark")}
          />
          <input
            type="radio"
            name="theme"
            id="light"
            onClick={() => setMode("light")}
          />

          {/* Decorative elements for the toggle */}
          <span className="toggle__background"></span>
          <span className="toggle__button"></span>
        </div>
      </fieldset>
    </header>
  );
};

export default MainHeader;
