import React from 'react'
class Form extends React.Component {
    constructor(props){
        super(props)
        this.date = new Date();
        this.state= {
            message: "",
            time_created: this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds(),
            date_created: this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate(),
            expire_date: "",
            expire_time: "",
            lat: 1,
            long: 2
            // lat long = this.state.lat, this.state.long
        }
    }

    componentDidMount(){
        
        this.props.fetchUsers();
        // 
    }
    componentDidUpdate(prevProps, prevState){
        
        if(this.props.secrets.message !== prevProps.secrets.message){
            alert(this.props.secrets.message + " was discreetly saved!")
        }
    }

    handleSubmit(e){
        e.preventDefault();
        let expire_time = this.state.expire_time.split('/');
        let expire_date = this.state.expire_date.split('/');
        
        if (expire_date.length !== 3 || expire_time.length !== 2) {
            return false;
        } 
        for (let i = 0; i < expire_date.length; i++) {
            
            if (i < 2 && expire_time[i].length > 2) {
                return false;
            }
            if (expire_date[i].length > 2) {
                return false;
            }
        }
        let time_start = this.state.date_create + this.state.time_created;
        let time_end = this.state.expire_date + this.state.expire_time;

        let secret={};
        
        secret["time_start"] = time_start;
        
        secret["time_end"] = time_start;
        secret["lat"] = this.state.lat;
        secret["long"] = this.state.long;
        secret["message"] = this.state.message
        
        this.props.createSecret(secret)
    }

    update(field){
        
        return e => this.setState({
            [field]: e.target.value
        });
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="Create-message-form">
                <h1 className="create-message-header">Message</h1>
                    <div className="create-message-form-div">
                        
                        <label className="create-message-label">
                            <input type="text"
                                placeholder="message"
                                value={this.state.message}
                                onChange={this.update('message')}
                            />
                        </label>

                    <label className="create-time-label">
                        <input type="text"
                            placeholder="time (mm/hh)"
                            value={this.state.expire_time}
                            onChange={this.update('expire_time')}
                        />
                    </label>
                        
                    <label className="create-date-label">
                        <input type="text"
                            placeholder="date (dd/mm/yy)"
                            value={this.state.expire_date}
                            onChange={this.update('expire_date')}
                        />
                    </label>
                        
                    </div>

                    <input type="submit" value="Submit" />
            </form>
        )

    }
}

export default Form