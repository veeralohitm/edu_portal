import React from 'react';
import './Profile.css';
import checklist from '../images/checklist.png';

const Profile = () => {
    return (  
         
    <div class="ui equal height grid container">
       
           <div class="eight wide column">
                <div class="ui bg container segment pd_h">
                    <div class="ui grid row">
                        <div class="six wide column">
                        <span class="circle">VL</span>
                      
                            <h4 class="ui header center aligned">Change Your Avatar</h4>
                        </div>
                        <div class="ten wide column">
                        <h1 class="ui header center aligned">USER PROFILE</h1>
                        <ul class="nls">
                            <li>Username : Veera Lohit</li>
                            <li>Email: lohit@odu.edu</li>
                            <li>Gender : Male</li>
                            <li>Location: Hyderabad </li>
                        </ul> 
                        </div>
                    </div>
                </div>
            </div> 
            <div class="eight wide column ">
            <div class="ui bg container segment">
                <h1 class="ui header">CPCDP ACTIVITIES</h1>
                <ul>
                    <li>Completed Pre Survey on <label>Wednesday, December 31, 1969.</label> </li>
                    <li>Cultural Proficiency Continnum Q-Sort form is pending your comptletion.</li>
                    <li>Your facilitator's comments on your reactions are pending the facilitator's completion.(You will
                        receive an email notifying you to login into your profile and review your facilitator's reactions.
                    </li>
                    <li>Post-Survey is pending your completion.</li>
                </ul>
                <div class="icons">
                    <ul>
                        <li><i class="circular pencil alternate icon"></i></li>
                        <li class="bl"><i class="circular calendar alternate outline icon "></i></li>
                        <li class="bl"><i class="circular plus icon"></i></li>
                        <li class="bl"><i class="circular pencil alternate icon"></i></li>
                        <li class="bl"><i class="circular chart bar icon"></i></li>
                        <li class="bl"><i class="circular file alternate icon"></i></li>
                        
                    </ul>        
                </div>
               
            </div>
            </div>
            
        
            <div class="sixteen wide column">
            <div class="ui bg container segment">
                <h2 class="ui header">Cultural Proficiency Continuum Q-Sort: A Majority-Minority PreK-12
                    Schooling Context
                </h2>
                <p>
                    Before  Engaging  with  the  Cultural  Proficiency  Continuum  Q-Sort  (CPCQ),  situate yourselfas a  new  teacher  in  a  U.S  public  school  that
                    educates  a  <b>majority - minority  student  population</b>. You  are   at  this  school  for an interview as  apotential  new  teacher.
                     The  principle  is  taking  you  on  a  tour  of  the  school  during  which  you  will  observe  a  variety  of  culturally  proficient interactions. While
                     you  are  completing  CPCQ,  consider  how you  may  react  to   these   interactions   during  your  tour.
                </p>
               
                <img src={checklist} class="center_chck"></img>
                
                <button class="ui button ffb506">
                     CPCQ Directions
                </button>
            </div>
            </div>
           

       </div> 
    
    );
    };
  export default Profile;