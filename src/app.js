import React, { Component} from 'react'
import { Select, Card, Button , MenuItem } from '@material-ui/core'
import SurveyJsEditorTest from './surveyJsEditorTest';
import AceEditorUsing from './aceEditorUsing';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedProject: 0
        }

    }

    render() {
        return ( <div>
            {this.getChoiceProjectContent()}
            <div style={{margin : 20}}>{this.getContent()}</div>
        </div>);
    }


    //#region Methods
    getContent()
    {
        var content ;
        switch (this.state.selectedProject) {
            case 1:
                content = this.getSurveyJsEditorTestContent();
                break;
            case 2:
                content = this.getAceEditorContent();
                break;
            default:
                break;
        }
        return content;
    }
    getChoiceProjectContent() {
        return (
            <Card style={{margin : 20}}>
                <Select
                    value={this.state.selectedProject}
                    inputProps={{
                        name: 'age',
                        id: 'age-simple',
                    }}
                    onChange ={this.handleChange.bind(this)}
                >
                    <MenuItem value={0}>Please Choice</MenuItem>
                    <MenuItem value={1}>Survey Js Creator</MenuItem>
                    <MenuItem value={2}>Ace Editor Page</MenuItem>

                </Select>
            </Card>
            )
    }
    getSurveyJsEditorTestContent()
    {
        return (
            <SurveyJsEditorTest />
        )
    }
    getAceEditorContent()
    {
        return(
            <AceEditorUsing />
        )
    }
    handleChange(event){
        this.setState({ selectedProject: event.target.value });
    };
    //#endregion Methods
}