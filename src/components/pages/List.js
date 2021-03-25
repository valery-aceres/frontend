import React, { Component } from 'react'

export class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <div className="list">
                {
                    list.map((list,index) =>(
                        <ul className="m-0" key={index}><li>{list}</li></ul>
                    ))
                }
            </div>
        )
    }
}

export default List
