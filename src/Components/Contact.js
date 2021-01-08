import React, { Component } from 'react';
//import * as emailjs from 'emailjs-com'

class Contact extends Component {

   constructor(props) {
      super(props)
      this.state = {
         contactName: '',
         contactEmail: '',
         contactSubject: '',
         contactMessage: '',
      }
   }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
                  <p className="lead">{message}</p><br/>
                  <p 
                     className="lead warning"
                     style={{ color: 'red' }}
                  >Warning: Contact form not yet configured, please contact me via normal email for now</p>

            </div>
         </div>

         <div className="row">
            <div className="eight columns">

               <form id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
                     <input 
                        type="text" 
                        value={this.state.contactName} 
                        size="35" 
                        id="contactName" 
                        name="contactName"
                        onChange={e => this.setState({ contactName: e.target.value})}
                     />
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                     <input 
                        type="email" 
                        value={this.state.contactEmail} 
                        size="35" 
                        id="contactEmail" 
                        name="contactEmail" 
                        onChange={e => this.setState({ contactEmail: e.target.value})}
                     />
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
                     <input 
                        type="text" 
                        value={this.state.contactSubject} 
                        size="35" 
                        id="contactSubject" 
                        name="contactSubject" 
                        onChange={e => this.setState({ contactSubject: e.target.value})}
                     />
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea 
                        cols="50" 
                        rows="15" 
                        value={this.state.contactMessage}
                        id="contactMessage" 
                        name="contactMessage"
                        onChange={e => this.setState({ contactMessage: e.target.value})}
                        >
                     </textarea>
                  </div>

                  <div>
                     {/* <input type="submit" value="Submit" onChange={e => this.handleFormSubmit(e)} /> */}
                     <button className="submit">Submit</button>
                     {/* <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span> */}
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error </div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span><br/>
                     <a href="mailto:jaheyliger@yahoo.com"><span>{email}</span></a>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact
