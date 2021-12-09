import React from 'react'
import TM_logo from '../images/ColorLogoSince1924Navy_230px.jpg';
import meetingImageOct from '../images/AalborgTM_Meeting_Oct_500px.jpg'
import meetingImageOct2 from '../images/Oct2_2021_500px.jpg'
import meetingImageNov from '../images/NovMeeting_500px.jpg'
import meeting110 from '../images/110_500px.jpg'

export default () => (
  <div style={{ textAlign: 'center' }}>

            <h1>Aalborg Toastmasters</h1>
            <p>Learn about <a href="https://www.toastmasters.org/">Toastmasters International</a></p>

        <h2>Live Magic Show Special: 16/12-2021</h2>
        <ul>
            <li>Host : Kennith</li>

            <li>Online Access : <a href="https://tmclub.eu/portal.php?marknow=0">Tmclub.eu</a></li>
    
            <li>Meeting : 18:45 to 20:00</li>
            <li>Chat with us on our <a href="https://www.facebook.com/ToastmastersAalborg">Facebook Page</a> or email info@aalborgtoastmasters.org</li>
        </ul>

      
        <img src={ TM_logo } alt="Toastmaster International Logo" />
        <hr />
        <h4>Love Hybrid meeting : 02/12-2021</h4>
        <ul>
            <li>Host : Kennith</li>
            <li>Location : <a href="https://goo.gl/maps/K2xqk5F9JxpDrgFD7">Aalborg Hovedbiblioteket Rendsburggade 2, 9000 Aalborg</a></li>
            <li>Time : 18:45 to 20:00</li>
            <img id="meetingPhoto" src={meeting110} alt="Aalborg Toastmasters Meeting Photo" /><br /><br />
        </ul>


        <img src={TM_logo} alt="Toastmaster International Logo" />
        <h4>TM Hybrid Meeting : 18/11-2021</h4>
        <ul>

            <li>Location : <a href="https://goo.gl/maps/TYKZEF1ueKu8FaAw6">International House Rantzausgade 4, 9000 Aalborg</a></li>
            <li>Time : 18:45 to 20:30</li>
        </ul>
        <img id="meetingPhoto" src={meetingImageNov} alt="Aalborg Toastmasters Meeting Photo" /><br /><br />
        <img id="TMlogoWithDate" src={TM_logo} alt="Toastmaster International Logo" />
        <hr />


        <h4>Auroura : 04/11-2021</h4>
        <ul>
            <li>Host : Anna</li>
            <li>Location : <a href="https://goo.gl/maps/K2xqk5F9JxpDrgFD7">Aalborg Hovedbiblioteket Rendsburggade 2, 9000 Aalborg</a></li>
            <li>Time : 18:45 to 20:30</li>
        
        </ul>
        <img id="meetingPhoto" src={meetingImageOct2} alt="Aalborg Toastmasters Meeting Photo" /><br /><br />
        <img id="TMlogoWithDate" src={TM_logo} alt="Toastmaster International Logo" />
        <hr />

        <h4>Bond, James Bond : 21/10-2021</h4>
        <ul>
            <li>Host : Martina</li>
            <li>Location : <a href="https://goo.gl/maps/K2xqk5F9JxpDrgFD7">Aalborg Hovedbiblioteket Rendsburggade 2, 9000 Aalborg</a></li>
            <li>Time : 18:45 to 20:00</li>
        </ul>
        <img id="meetingPhoto" src={ meetingImageOct } alt="Aalborg Toastmasters Meeting Photo" /><br /><br />
        <img id="TMlogoWithDate" src={TM_logo} alt="Toastmaster International Logo" />

       
  </div>
)
