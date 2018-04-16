import React from 'react';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fileNameIs: '',

            supported: ''
        }
        this.fileHandler = this.fileHandler.bind(this);
        this.uploadAction = this.uploadAction.bind(this);

    }
    fileHandler(e) {
        this.setState({
            fileNameIs: e.target.value
        })
    }
    uploadAction() {

        if (this.state.fileNameIs == 'undefined' || this.state.fileNameIs == '') {
            console.log('please select a file');
            this.setState({
                fileNameIs: "empty"
            })
        } else {
            var extension = this.state.fileNameIs.split('.')[1]

            console.log('file extension is',extension);
            var arr = ['pdf','odt','mp4','ppt','js','html','css','txt']
            console.log(arr.indexOf(extension))
            if (arr.indexOf(extension) != -1) {
                this.setState({
                    supported: true
                })
                console.log("supported")
               
            } else {
                this.setState({
                    supported: false
                })
                console.log("unsupported")
            }
          
        }
    }
    render() {
        return (
            <div>
                <h3>{this.state.fileNameIs}</h3>
                <h1>file upload testing component</h1>
                <input type="file" id="file" className="file" onChange={this.fileHandler} />
                <button className="btn" id="btn" onClick={this.uploadAction}>upload</button>
                <h5>{}</h5>
            </div>
        )
    }
}

export default App;