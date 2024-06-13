import WebDev from "./WebDev";
import DataAnalytics from "./DataAnalytics";

// Dummy components for content
export const WebDevelopmentProjects = () => (
    <WebDev />
);

export const DataAnalyticsProjects = () => (
    <DataAnalytics />
);

export const MoreProjects = () => (
    <div>More Projects</div>
);

export const initialTabs = [
    { label: "Web Development", content: <WebDevelopmentProjects /> },
    { label: "Data Analytics", content: <DataAnalyticsProjects /> },
    // { label: "More", content: <MoreProjects /> },
];