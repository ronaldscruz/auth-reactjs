import React from 'react';
import styled from 'styled-components'

import {
   FaCheckCircle, FaExclamationCircle
} from 'react-icons/fa'

// This component displays an callback. Ex.: "Wrong username / Password reset successfull / etc."

function Info(props){

   // If there is not message to show, Info displays just a empty paragraph
   if(!(props.msg)){
      return <p></p>
   }

   // The info color depends on the infoType
   if(props.infoType === 'error'){
      const InfoMessage = styled.p`
         color: rgb(219, 65, 65);
      `

      return(
         <InfoMessage>
            <FaExclamationCircle/> {props.msg} 
         </InfoMessage>
      )
   }else if(props.infoType === 'success'){
      const InfoMessage = styled.p`
         color: #1adb00;
      `
      return(
         <InfoMessage>
            <FaCheckCircle/> {props.msg} 
         </InfoMessage>
      )
   }

   // If the conditions are not satisfied, Info returns a empty paragraph
   return <p></p>
}
 
export default Info;