
import { HeroScroll } from "@/components/Scroll";
import { SearchBar } from "@/components/seach";
import { TravelGrid } from "@/components/travel-grid";
import  WanderlustSection  from "@/components/calltoaction";
import { Footer } from "@/components/ui/footer";


export default function Home() {
  return (
   <>
   
   <HeroScroll/>
   <SearchBar/>
   <TravelGrid/>
   <WanderlustSection/>

   </>
  );
}
