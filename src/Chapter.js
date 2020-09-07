import React, { Component } from 'react'
import './Chapter.css'
class Chapter extends Component {
    handleClick = () => {
        this.props.props.history.push(`/bibles/${this.props.chapter.bibleId}/books/${this.props.chapter.bookId}/chapters/${this.props.chapter.id}/verses`)
    }
    render() {
        const {number} = this.props.chapter
        return (
            <div className='Chapter' onClick={this.handleClick}>
                {number}
            </div>
        )
    }
}
export default Chapter