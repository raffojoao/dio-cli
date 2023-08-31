import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Header from '../../components/Header'
import bannerImg from '../../assets/banner.png'

import { Container, TextContent, Title, TitleHighlight } from './styles'

export default function Feed() {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate.navigate('/login')
  }

  return (
    <>
      <Header />
      <Container> 
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
          Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn} />
        </div>
        <div>
          <img src={bannerImg} alt='Imagem principal' />
        </div>
      </Container>
    </>
  )
}
