import React , {Component} from 'react'
import * as SurveyEditor from 'survey-creator'
import "survey-creator/survey-creator.css"

export default class SurveyJsEditorTest extends Component {

    constructor(props)
    {
        super(props);   

        //this.editor.saveSurveyFunc = this.saveMySurvey;
    }

    componentDidMount()
    {
        let editorOptions = { showEmbededSurveyTab: true };
        this.editor = new SurveyEditor.SurveyCreator(
          "surveyEditorContainer",
          editorOptions
        );
    }
    render()
    {
        return <div id="surveyEditorContainer" />;
    }
}