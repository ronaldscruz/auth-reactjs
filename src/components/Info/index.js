import React from 'react';
import styled from 'styled-components'

import {
   FaCheckCircle, FaExclamationCircle
} from 'react-icons/fa'

function Info(props){

   if(!(props.msg)){
      return <p></p>
   }

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

   return <p></p>
}
 
export default Info;