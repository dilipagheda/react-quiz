import React, { Component } from 'react'

class QuizQuestion extends Component
{
    render()
    {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options[0]}
                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion