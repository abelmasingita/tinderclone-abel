import React,{useState} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
const TinderCards = () => {
    
    const[people,setPeople] = useState([
        {
            name: 'Abel Masinita',
            url: 'https://pyxis.nymag.com/v1/imgs/e0e/11b/93a73ed12f25f2fdcc4f5473fc9460a2ff-elon-musk.rsquare.w1200.jpg'
        },
        {
            name: 'Masingita Hlongwani',
            url: 'https://specials-images.forbesimg.com/imageserve/5f469ea85cc82fc8d6083f05/960x0.jpg?fit=scale'
        },
    ]) 

    const swipped = (direction,nametodelete)=> {
        console.log("Removing : " + nametodelete)
    }
    const outoFrame = (name) => {
        console.log(name + " : left the screen")
    }

    return ( 
        <div className='tindercards'>
          <div className='tindercards__cardContainer'>
              {
                people.map(person => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up','down']}
                        onSwipe={(dir)=> swipped(dir,person.name)}
                        onCardLeftScreen={() => outoFrame(person.name)}
                    >
                        <div style={{
                            backgroundImage: `url(${person.url})`
                        }}
                        className='card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))
              }
          </div> 
        </div>
    )
}

export default TinderCards
