import './Styles/App.scss';
import Article1 from './Articles/Article1';
import hImg from "./Assets/Group7141.png"
import Article2 from './Articles/Article2';
import img1 from "./Assets/UI Design Illustration1.png"
import img2 from "./Assets/Maintenance Illustration2png.png"
import img3 from "./Assets/Development Illustration3.png"
import img4 from "./Assets/Discuss Illustration5.png"
import img5 from "./Assets/How We Work Illustration.png"
import img6 from "./Assets/2digitak.png"

const data = [
  {
    id: 0,
    img: img1,
    span: "DEFI",
    title: "Scale the world of DeFi",
    p: "Being the veterans in the blockchain industry, we understand the hype of decentralized finance and the contemporary optimizations in the financial sector and hence taking the grasp of the moment , we have developed exceptional projects in the world of DeFi.",
  },
  {
    id: 1,
    img: img2,
    span: "DAPPS",
    title: "Technology made easier",
    p: "Decentralized applications have found a huge user base right in the initial stage , and therefore we as a team have gained extensive expertise into the creation of dapps.",
  },
  {
    id: 2,
    img: img3,
    span: "AUDIT",
    title: "Stay secure and safe",
    p:"Above all that matters is a secure and safe smart contract that is free from any vulnerability and does not hamper the investment of the various people who have trusted you. We also provide auditing services , so that you can stay assured of the security as we are quick in auditing and exposing the bugs of your smart contract.",
  },
  {
    id: 3,
    img: img4,
    span: "Expert",
    title:"Expert Review",
    p:"Experience the guidance of various trained professionals and developers who are with you at every phase of your projects. We not only develop your project but also give out the best recommendations for turning it into a huge success",
  },
  {
    id: 4,
    img: img5,
    span: "SMART CONTRACT",
    title: "Experience the Revolution",
    p: "Merklabs has efficient developers with exceptional coding skills that can create any type of smart contract you desire and with scalable and secure code. You desire, we create it for you.",
  },
  {
    id: 5,
    img: img6,
    span: "LAUNCHPAD",
    title: "Stabilize and Promote",
    p :"Amidst the competition in the Defi space, good marketing strategy and implementation plays the key role to stabilize and promote your growth in the blockchain industry. Retaining this awareness, we can develop launchpad and IDO for your presale and ICO."
  }
]

function App() {
  return (
    <div className="App">
       <header>
        <img src={hImg} alt="" />
      </header>
      <section className='main__section'>
        <Article1 />
        {data.map(i => <Article2 data={i} />)}
      </section>
    </div>
  );
}

export default App;
