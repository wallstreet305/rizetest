import React, { Component } from 'react'
import {get_question} from '../../utilities/api-handler'
export default class GetQuestion extends Component {
    question_id = 2
    componentDidMount() {

         get_question(this.question_id).then(data => {
             console.log('dataQuestion', data);
             
        })
    }
    render() {
        return (
            <div>
                <p>get_question Form Here</p>
            </div>
        )
    }
}
