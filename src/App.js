import logo from './logo.svg';
import pic from './graduation.JPG';
import pic2 from './crossfit1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jonathon Tasker</h1>
        <img src={pic} className="App-logo" alt="pic" />
        <p>
        I am an assertive and friendly young man who enjoys technology, animals and interaction with people. 
        I am focused, a self-starter and have a drive to succeed at anything I do. 
        Even though I take my work seriously, I have a good sense of humour. 
        </p>
        <p>
        Experience using OOP, MVC, lists, dictionaries, trees, arrays and creating algorithms from university modules.
        </p>
        <p>I developed a mobile and desktop learning application for the Down Syndrome Association of Pretoria to help their students learn words, maths and recognise pictures as my final university project.

</p>
        <p>I love crossfit, gaming, football and rugby</p>
        <img src={pic2}  alt="pic" width="600" height="300"/>
        <p>I want to apply to the Sovtech graduate programme because I have heard from people who work there that its one of the best grad programs 
          and that I will learn so much by being a part of it!
          SovTech feels like the perfect place for me to improve my coding skills and become a great developer.</p>
        <p></p>
      </header>
    </div>
  );
}

export default App;
