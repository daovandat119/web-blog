import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import TopPicks from "./pages/TopPicks";
import BlogTopPicks from "./pages/BlogTopPicks";
import Topics from "./pages/Topics";
import NoteTakingApps from "./pages/NoteTakingApps";
import ArticleCategory from "./components/ArticleCategory";
import ScrollToTop from "./components/ScrollToTop";
import NotionAlternatives from "./pages/NotionAlternatives";
import BestPDFEditors from "./pages/BestPDFEditors";
import BestAIMeetingManagers from "./pages/BestAIMeetingManagers";
import AiProductivityTools from "./pages/AiProductivityTools";
import BestAiTaskManager from "./pages/BestAiTaskManager";
import BestAiNoteTakingApp from "./pages/BestAiNoteTakingApp";
import BestAisChedulingAssistant from "./pages/BestAisChedulingAssistant";
import BestCollAborationToolsForRemoteTeams from "./pages/BestCollAborationToolsForRemoteTeams";
import BestEmailProductivityApps from "./pages/BestEmailProductivityApps";
import NotionReview from "./pages/NotionReview";
import ObsidianReview from "./pages/ObsidianReview";
import AnytypeReview from "./pages/AnytypeReview";
import XtilesReview from "./pages/XtilesReview";
import NotebooklmReview from "./pages/NotebooklmReview";
import CodaIoReview from "./pages/CodaIoReview";
import EvernoteReview from "./pages/EvernoteReview";
import FirefliesAiReview from "./pages/FirefliesAiReview";
import MeetgeekReview from "./pages/MeetgeekReview";
import TldvReview from "./pages/TldvReview"
import FellowAppReview from "./pages/FellowAppReview"
import FathomReview from "./pages/FathomReview"
import MinuteslinkReview from "./pages/MinuteslinkReview";
import KrispReview from "./pages/KrispReview";
import SoftwareReviews from "./pages/SoftwareReviews";
import MeetingTools from "./pages/MeetingTools";
import PdfTools from "./pages/PdfTools";
import ProjectManagement from "./pages/ProjectManagement";
import ProductivityGuides from "./pages/ProductivityGuides";
import BusinessGrowth from "./pages/BusinessGrowth";
import AdobeAcrobatVsUpdf from "./pages/AdobeAcrobatVsUpdf";
import TaskadeVsCoda from "./pages/TaskadeVsCoda";
import NotionVsNotebooklm from "./pages/NotionVsNotebooklm";
import XtilesVsNotion from "./pages/XtilesVsNotion";
import OtterAiVsFathom from "./pages/OtterAiVsFathom";
import FirefliesAiVsOterAi from "./pages/FirefliesAiVsOterAi";
import EvernoteVsXtiles from "./pages/EvernoteVsXtiles";
import FoxitVsPdfelement from "./pages/FoxitVsPdfelement";
import MotionVsNotion from "./pages/MotionVsNotion";
import EvernoteVsObsidian from "./pages/EvernoteVsObsidian";
import EvernoteVsNotion from "./pages/EvernoteVsNotion";
import PdfEditorsForWindows from "./pages/PdfEditorsForWindows";
import AdobeAcrobatAternatives from "./pages/AdobeAcrobatAternatives";
import GoliAshwagandha from "./pages/GoliAshwagandha";
import Lifestyle from "./pages/Lifestyle";
import LastCrumbCookies from "./pages/LastCrumbCookies";
import ChronicPain from "./pages/ChronicPain";
import Health from "./pages/Health";
import Fashion from "./pages/Fashion";
import Beauty from "./pages/Beauty";
import DoubleOakEssentials from "./pages/DoubleOakEssentials";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/top-picks" element={<TopPicks />} />
          <Route path="/blog-top-picks" element={<BlogTopPicks />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/note-taking-apps" element={<NoteTakingApps />} />
          <Route path="/article-category" element={<ArticleCategory />} />
          <Route path="/notion-alternatives" element={<NotionAlternatives />} />
          <Route path="/best-pdf-editors" element={<BestPDFEditors />} />
          <Route path="/best-ai-meeting-manager" element={<BestAIMeetingManagers />} />
          <Route path="/ai-productivity-tools" element={<AiProductivityTools />} />
          <Route path="/best-ai-task-manager" element={<BestAiTaskManager />} />
          <Route path="/best-ai-note-taking-app" element={<BestAiNoteTakingApp />} />
          <Route path="/best-ai-scheduling-assistant" element={<BestAisChedulingAssistant />} />
          <Route path="/best-collaboration-tools-for-remote-teams" element={<BestCollAborationToolsForRemoteTeams />} />
          <Route path="/best-email-productivity-apps" element={<BestEmailProductivityApps />} />
          <Route path="/notion-review" element={<NotionReview />} />
          <Route path="/obsidian-review" element={<ObsidianReview />} />
          <Route path="/anytype-review" element={<AnytypeReview />} />
          <Route path="/xtiles-review" element={<XtilesReview />} />
          <Route path="/notebooklm-review" element={<NotebooklmReview />} />
          <Route path="/coda-io-review" element={<CodaIoReview />} />
          <Route path="/evernote-review" element={<EvernoteReview />} />
          <Route path="/fireflies-ai-review" element={<FirefliesAiReview />} />
          <Route path="/meetgeek-review" element={<MeetgeekReview />} />
          <Route path="/tldv-review" element={<TldvReview />} />
          <Route path="/fellow-app-review" element={<FellowAppReview />} />
          <Route path="/fathom-review" element={<FathomReview />} />
          <Route path="/minuteslink-review" element={<MinuteslinkReview />} />
          <Route path="/krisp-review" element={<KrispReview />} />
          <Route path="/software-reviews" element={<SoftwareReviews />} />
          <Route path="/meeting-tools" element={<MeetingTools />} />
          <Route path="/pdf-tools" element={<PdfTools />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/productivity-guides" element={<ProductivityGuides />} />
          <Route path="/business-growth" element={<BusinessGrowth />} />
          <Route path="/adobe-acrobat-vs-updf" element={<AdobeAcrobatVsUpdf />} />
          <Route path="/taskade-vs-coda" element={<TaskadeVsCoda />} />
          <Route path="/notion-vs-notebooklm" element={<NotionVsNotebooklm />} />
          <Route path="/xtiles-vs-notion" element={<XtilesVsNotion />} />
          <Route path="/otter-ai-vs-fathom" element={<OtterAiVsFathom />} />
          <Route path="/fireflies-ai-vs-otter-ai" element={<FirefliesAiVsOterAi />} />
          <Route path="/evernote-vs-xtiles" element={<EvernoteVsXtiles />} />
          <Route path="/foxit-vs-pdfelement" element={<FoxitVsPdfelement />} />
          <Route path="/motion-vs-notion" element={<MotionVsNotion />} />
          <Route path="/evernote-vs-obsidian" element={<EvernoteVsObsidian />} />
          <Route path="/evernote-vs-notion" element={<EvernoteVsNotion />} />
          <Route path="/pdf-editors-for-windows" element={<PdfEditorsForWindows />} />
          <Route path="/adobe-acrobat-alternatives" element={<AdobeAcrobatAternatives />} />
          <Route path="/goli-ashwagandha" element={<GoliAshwagandha />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/last-crumb-cookies" element={<LastCrumbCookies />} />
          <Route path="/chronic-pain" element={<ChronicPain />} />
          <Route path="/health" element={<Health />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/double-oak-essentials" element={<DoubleOakEssentials />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
