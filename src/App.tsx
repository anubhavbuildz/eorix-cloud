import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { CloudListSection } from './components/sections/CloudListSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { FinopsCycleSection } from './components/sections/FinopsCycleSection';
import { ClosingBandSection } from './components/sections/ClosingBandSection';
import './styles/main.css';

export function App() {
  return (
    <div className="app-root">
      <Header />

      <main id="main-content">
        <HeroSection />
        <CloudListSection />
        <FeaturesSection />
        <FinopsCycleSection />
        <ClosingBandSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
