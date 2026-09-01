import DedicatedEngineeringTeamsHero from '../components/dedicated-engineering-teams/DedicatedEngineeringTeamsHero';
import DedicatedEngineeringTeamsSections from '../components/dedicated-engineering-teams/DedicatedEngineeringTeamsSections';
import { SEOHead } from '../components/seo/SEOHead';
import { seoPages } from '../components/seo/seoConfig';

export default function DedicatedEngineeringTeamsPage() {
  return (
    <div className="overflow-x-clip bg-white font-body text-[#0a0a0a] selection:bg-[#df012a] selection:text-white">
      <SEOHead data={seoPages.dedicatedEngineeringTeams} />
      <main className="overflow-x-clip">
        <DedicatedEngineeringTeamsHero />
        <DedicatedEngineeringTeamsSections />
      </main>
    </div>
  );
}
