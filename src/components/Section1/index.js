import { Quote, SectionContent, SectionText } from './SectionElemens'
import React from 'react'
import {Parallax} from 'react-scroll-parallax'


const Section1 = () => {

    return (
        <>
          <SectionContent>
              <Parallax y={[-100, 100]}>
                <SectionText>
                   The most important consideration we had was that I needed to have something different. I didn't want to settle for a generic template. I wanted users to take a trip, to see how things are now and what the user experiance will be like from today.
                    </SectionText>
                    <Quote/>
                </Parallax>
            </SectionContent> 
        </>
    )
}

export default Section1
