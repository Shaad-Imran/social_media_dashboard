import "./App.css";

import { MainHeader, SocialMediaCard, OverviewCard } from "./components";
import { socialMediaData, overviewData } from "./data";

const App = () => {
  return (
    <>
      {/* Main Header Component */}
      <MainHeader />

      <main>
        {/* Section for Social Media Cards */}
        <section className="container cards">
          {/* Mapping through social media data to render SocialMediaCard component */}
          {socialMediaData.map((socialMedia, index) => (
            <SocialMediaCard key={index} {...socialMedia} />
          ))}
        </section>

        {/* Section for Overview Cards */}
        <section className="container">
          <h2>Overview - Today</h2>
          <div className="cards">
            {/* Mapping through overview data to render OverviewCard component */}
            {overviewData.map((overview, index) => (
              <OverviewCard key={index} {...overview} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
