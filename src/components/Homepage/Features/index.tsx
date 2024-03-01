import React from "react";
import { features } from "./utils";
import FeatureCard from "./FeatureCard";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faChartLine,
  faDatabase,
  faGlobe,
  faChessKing,
} from "@fortawesome/free-solid-svg-icons";
import "./features.css";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const iconMap: Record<string, IconDefinition> = {
  "fa-chart-line": faChartLine,
  "fa-database": faDatabase,
  "fa-globe": faGlobe,
  "fa-chess-king": faChessKing,
};

const Features: React.FC = () => {
  const getIcon = (icon: string) => {
    return iconMap[icon] || faChartLine;
  };

  return (
    <div className="features-root">
      <h3>Our Approach</h3>
      <div className="underline"></div>
      <div className="features-container">
        {features.map((feature: Feature, index: number) => {
          const { icon, title, description } = feature;
          return (
            <FeatureCard
              icon={getIcon(icon)}
              title={title}
              description={description}
              key={Math.random()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
