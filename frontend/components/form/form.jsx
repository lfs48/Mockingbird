import React from 'react'
class Form extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            message: "",
            time_created: 6/20/2019,
            expiration: 4/20/2025,
        }
    }
    handleSubmit(){
        e.preventDefault();
        const message = this.state;


    }
    update(field){
        debugger
        return e => this.setState({
            [field]: e.target.value
        });
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className="Create-message-form">
                <h1 className="create-message-header">Message</h1>
                    <div className="create-message-form-div">
                        
                        <label className="create-message-label">
                            <input type="text"
                                placeholder="message"
                                value={this.state.message}
                                onChange={this.update('message')}
                            />
                        </label>

                        
                    </div>

                    <input type="submit" value="Submit" />
            </form>
        )

    }
}

export default Form