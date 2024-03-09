import Intro from '@/app/_components/intro';
import About from '@/app/_components/about';
import Agenda from '@/app/_components/agenda';
import Panelists from './_components/panelists';

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Agenda />
      <Panelists />
    </>
  );
}
