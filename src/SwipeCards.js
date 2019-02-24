import React, { Component } from 'react'
import { render } from 'react-dom'
import { Card, CardWrapper } from 'react-swipeable-cards';

const wrapperStyle = {
    backgroundColor: "white",
    backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")"
 }
  
  const cardStyle = {
    backgroundColor: "white"
    
  }

export default class SwipeCards extends Component {
    onSwipe(data) {
        console.log(data.name + " was swiped.");
    }

    onSwipeLeft(data) {
        console.log(data.name + " was swiped left.")
    }

    onSwipeRight(data) {
        console.log(data.name + " was swiped right.")
    }

    renderCards() {
        let data = [{ id: 1, name: "Elastic Temporal Drive",
                     picture: "https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_960_720.jpg",
                     maintainer: "John Doe",
                     description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.",
                     tag: 20 },
                     { id: 1, name: "Elastic Temporal Drive",
                     picture: "https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_960_720.jpg",
                     maintainer: "John Doe",
                     description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.",
                     tag: 20 },
                     { id: 1, name: "Elastic Temporal Drive",
                     picture: "https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_960_720.jpg",
                     maintainer: "John Doe",
                     description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.",
                     tag: 20 }
                    ];
        return data.map((d) => {
            return (
                <Card style={cardStyle}
                    key={d.id}
                    onSwipe={this.onSwipe.bind(this)}
                    onSwipeLeft={this.onSwipeLeft.bind(this)}
                    onSwipeRight={this.onSwipeRight.bind(this)}
                    data={d}>
                    <h2>{d.name}</h2>
                    <h4>Maintainer: {d.maintainer}</h4>
                    <h4>Description</h4>
                    <h6>{d.description}</h6>
                    <h4>Tag: {d.tag}</h4>

                </Card>
            );
        });
    }

    render() {
        return (
            <CardWrapper style={wrapperStyle}>
                {this.renderCards()}
            </CardWrapper>
        );
    }
}