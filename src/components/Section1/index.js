import { Quote, SectionContent, SectionText } from './SectionElemens'
import React from 'react'
import {Parallax} from 'react-scroll-parallax'


const Section1 = () => {

    return (
        <>
          <SectionContent>
              <Parallax y={[-100, 100]}>
                <SectionText>
                The most important thought I had was that I must have something else. I didn't want to be content with the general template. <br /> I wanted users to take a trip to see what it is like now and what the user experience will be from today.
                    </SectionText>
                    <Quote/>
                </Parallax>
            </SectionContent> 
            
        </>
    )
}

export default Section1
