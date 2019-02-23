import React, { Component } from 'react'
import { render } from 'react-dom'
import { Card, CardWrapper } from 'react-swipeable-cards';
 
export default class SwipeCards extends Component {
  onSwipe(data) {
    console.log(data.name + " was swiped.");
  }

  onSwipeLeft(data){
      console.log(data.name + " was swiped left.")
  }

  onSwipeRight(data){
      console.log(data.name + " was swiped right.")      
  }
 
  renderCards() {
    let data = [{id: 1, name: "First"},{id: 2, name: "Second"}];
    return data.map((d) => {
      return(
        <Card
          key={d.id}
          onSwipe={this.onSwipe.bind(this)}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
          onSwipeRight={this.onSwipeRight.bind(this)}
          data={d}>
            <h2>{d.name}</h2>
        </Card>
      );
    });
  }
 
  render() {
    return(
      <CardWrapper>
        {this.renderCards()}
      </CardWrapper>
    );
  }
}