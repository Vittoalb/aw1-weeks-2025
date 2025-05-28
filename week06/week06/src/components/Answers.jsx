import { Table, Button, Row, Col } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Answers(props){
    return (
        <>
        <Row>
            <Col as='h2'>
                Answers:
            </Col>
        </Row>
        <Row>
            <Col lg='10' className="mx-auto">
                <AnswerTable answers={props.answers} setAnswers={props.setAnswers}/>
            </Col>
        </Row>
        </>
    )
}

export default Answers;

function AnswerTable(props){
    return(
    <>
    <Table striped>
        <thead>
            <tr>
                <th>Date</th>
                <th>Text</th>
                <th>Author</th>
                <th>Score</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.answers.map((ans) => <AnswerRow key={ans.id} answer={ans} setAnswers={props.setAnswers} />)}
        </tbody>
    </Table>
    </>
    )
}

function AnswerRow(props){
    return(
        <tr>
            <AnswerInfo answer={props.answer}/>
            <AnswerActions setAnswers={props.setAnswers}/>
        </tr>
    )
}

function AnswerInfo(props){
    return(
        <>
            <td>{props.answer.date.format('YYYY-MM-DD')}</td>
            <td>{props.answer.text}</td>
            <td>{props.answer.email}</td>
            <td>{props.answer.score}</td>
        </>
    )
}

function AnswerActions(props){
    return(
        <>
            <td>
                <Button variant="warning">
                    <i className="bi bi-arrow-up" />
                </Button>
                <Button variant="primary">
                    <i className="bi bi-pencil-square" />
                </Button>
                <Button variant="danger">
                    <i className="bi bi-trash" />
                </Button>
            </td>
        </>
    )
}
