import React from 'react'
import { AppTextBar, AppNameTag, AppName, ArrowBar, Arrow, AppInfo, AppInfoText, ToGit, ToGitLink, ArrowLink } from '../WorksElements'

const CommingSoon = () => {
    return (
        <>     
                <AppNameTag to = '/home'>
                    <AppName data-aos = 'fade-left'>
                        Comming soon
                    </AppName>
                    <ArrowBar data-aos = 'fade-left'>
                        <Arrow delay = '0'/>
                        <Arrow delay = '0.5s'/>
                        <Arrow delay = '1s'/>
                    </ArrowBar>
                </AppNameTag>

                <AppInfo >
                    <AppTextBar >
                        <AppInfoText>
                            Comming soon
                        </AppInfoText>
                    </AppTextBar>

                    <ToGit data-aos="fade-right" data-aos-duration="400">
                        <ToGitLink  href = '/'>show_on_git</ToGitLink>
                        <ArrowLink/>
                    </ToGit>
                </AppInfo>
        </>
    )
}

export default CommingSoon