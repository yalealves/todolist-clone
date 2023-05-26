import React from 'react'

import { FooterContainer, Link } from './style'

function Footer() {
  return (
    <FooterContainer>
        <div>
            Developed by <Link href="https://www.github.com/yalealves" target='_BLANK'>Yale Alves</Link>.
        </div>
        <div>
            Designed by <Link href="https://www.figma.com/community/file/1175262836322989600/ToDo-List-%F0%9F%91%85" target='_BLANK'>Matheus Susko (Susko)</Link>
        </div>
    </FooterContainer>
  )
}

export default Footer