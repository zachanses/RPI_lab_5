import React from 'react';

export default class Button extends React.Component{
    render(){
        return(
            <div className={this.props.class} onClick={this.props.clickHandler} id={this.props.id}>
                {this.props.children}
            </div>
        );
    }
}