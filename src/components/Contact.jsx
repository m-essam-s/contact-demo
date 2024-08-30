import propType from 'prop-types';
import PhoneIcon from '/icons/phone-icon.png';
import EmailIcon from '/icons/mail-icon.png';

const Contact = (props) => {
    return(
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={PhoneIcon} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={EmailIcon} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

Contact.propTypes = {
    img: propType.string.isRequired,
    name: propType.string.isRequired,
    phone: propType.string.isRequired,
    email: propType.string.isRequired
}



export default Contact;