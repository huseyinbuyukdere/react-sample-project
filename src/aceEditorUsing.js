import React , {Component} from 'react'
import AceEditor from 'react-ace'

export default class AceEditorUsing extends Component {


    constructor(props)
    {
        super(props);
    }


    render()
    {
        return (       
             <AceEditor             
              theme='sqlserver'
              ref={(r) => this.editor=r}
              name="editor"              
              width="100%"             
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
              }} /> )
    }
}
