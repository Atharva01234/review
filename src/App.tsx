import Features from "../src/components/Homepage/Features";
import ClientsCarousel from "../src/components/Homepage/ClientsCarousel";
import CustomMarketResearch from "../src/components/Homepage/CustomMarketResearch";
import Testimonials from "../src/components/Homepage/Testimonials";
import PictureHeading from "../src/components/Homepage/PictureHeading";
import useIsMobile from "../src/hooks/useIsMobile";

function App() {
const isMobile = useIsMobile();
  return (
    <div>
      <PictureHeading />
      <div className="margin-horizontal-homepage">
        <div className="homepage-middle-section">
          <div style={{ flex: 1, padding: isMobile ? "" : "0 20px 0 0" }}>
            {/* <PopularCategories /> */}
          </div>
          <div style={{ flex: 2, padding: isMobile ? "" : "0 0 0 20px" }}>
            {/* <LatestReports /> */}
          </div>
        </div>
        {/* <PopularReports /> */}
      </div>
      <ClientsCarousel />
      <div className="margin-horizontal-homepage">
        <Features />
        <CustomMarketResearch />
        <Testimonials />
      </div>
    </div>
);
}

export default App;