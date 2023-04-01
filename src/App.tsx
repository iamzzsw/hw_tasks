import React from 'react';
import LargeCard from './components/LargeCard/LargeCard';
import image from "./d1d537dc25d42b824598a30f2aa0427c.jpg"


import './App.css';
import MidleCard from './components/MidleCard/MidleCard';
import SmallCard from './components/SmallCard/SmallCard';

function App() {
  return (
    <div className="App">
      <div className='dd'>
      <LargeCard 
        id={1} 
        title='Astronauts prep for new solar arrays on nearly seven-hour spacewalk' 
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'  
        date='April 20, 2021' 
        image={image} 
        author={0} />
        <SmallCard 
        id={1} 
        title='Astronauts prep for new solar arrays on nearly seven-hour spacewalk' 
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'  
        date='April 20, 2021' 
        image={image} 
        author={0} />
        </div>
       <div className="container">
        <MidleCard 
        id={1} 
        title='Astronauts prep for new solar arrays on nearly seven-hour spacewalk' 
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'  
        date='April 20, 2021' 
        image={image} 
        author={0} />
        <MidleCard 
        id={1} 
        title='Astronauts prep for new solar arrays on nearly seven-hour spacewalk' 
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'  
        date='April 20, 2021' 
        image={image} 
        author={0} />
        </div>

    </div>
  );
}

export default App;
