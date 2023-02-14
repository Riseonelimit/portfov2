import './App.css'
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import {Scroll} from "scrollex";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Socials';



// const keyframes = {
//   heading : ({ section, container }) => ({
//     [section.topAt("container-bottom")] : {
//       translateX:-container.width,
//     },    
//     [section.topAt("container-top") - container.height / 4] : {
//       translateX:0,
//     },    
//     [section.topAt("container-top") + container.height / 4] : {
//       translateX:0,
//     },    
//     [section.bottomAt("container-top")] : {
//       translateX:container.width,
//     },
//   }),
// };
const keyframes = {
  heading1: ({ section, container }) => ({
    [section.topAt("container-bottom")]: {
      translateX: -container.width,
    },
    [section.topAt("container-top") - container.height / 4]: {
      translateX: 0,
    },
    [section.topAt("container-top") + container.height / 4]: {
      translateX: 0,
    },
    [section.bottomAt("container-top")]: {
      translateX: container.width,
    },
  }),
  heading2: ({ section, container }) => ({
    [section.topAt("container-bottom")]: {
      translateX: +container.width,
    },
    [section.topAt("container-top") - container.height / 4]: {
      translateX: 0,
    },
    [section.topAt("container-top") +container.height / 4]: {
      translateX: 0,
    },
    [section.bottomAt("container-top")]: {
      translateX: container.width,
    },
  }),
};

function App() {
  
  return (
    <div className="App">
      <Scroll.Container scrollAxis="y" className="h-screen">
      <Scroll.Section className="h-screen center bg-1">
        <Scroll.Item keyframes={keyframes.heading1}>
          <Navbar/>        
          <Main/>  
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-screen center bg-2">
        <Scroll.Item keyframes={keyframes.heading1}>
        <About/>
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-screen center bg-1">
        <Scroll.Item keyframes={keyframes.heading2}>
          <Skills/>  
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-screen center bg-1">
        <Scroll.Item keyframes={keyframes.heading2}>
          <Projects/>  
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-screen center bg-1">
        <Scroll.Item keyframes={keyframes.heading2}>
          <Footer/>
        </Scroll.Item>
      </Scroll.Section>
    </Scroll.Container>
    </div>
  );
}

export default App;
