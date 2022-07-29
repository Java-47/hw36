import React from 'react'
import { result } from '../utils/contants'
import { cards } from '../utils/contants'
class Game extends React.Component{
  constructor(props) {
    super(props)

  
    this.state = {
       myCard: 'Player card',
       compCard: 'Computer card'
    }
  }
  handleChangeCardsComp = e => {
    this.setState({compCard: e})
    cards.pop()
  }
  handleChangeCardsPlayer= e => {
    this.setState({myCard: e})
    cards.pop()
  }


  render()
  {
    
  return (
    <div>
        <h2>Computer</h2>
        <p>{this.state.myCard}</p>
        <p>{this.state.compCard}</p>
        <h2>{this.props.myName}</h2>
        <button onClick={() => {
          if (cards[cards.length-1]){
            this.handleChangeCardsComp(cards[cards.length-1].card)
            this.handleChangeCardsPlayer(cards[cards.length-1].card)
            
          }
          else{
            this.props.changePage(result);
          }

        
        }}>Next</button>
    </div>
  )
}
  }
  
export default Game