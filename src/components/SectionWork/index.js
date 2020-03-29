import React from 'react';

import * as S from './styled';

import iconCep from '../../assets/address.png';
import iconPetShop from '../../assets/pet-shop.png';
import iconProduct from '../../assets/product.png';
import iconPaymente from '../../assets/payment.png';

const SectionWork = () => {
  return(
    <S.Section>
      <S.TitleWrapper>
        <S.Title>Como Funciona</S.Title>
      </S.TitleWrapper>
      <S.SectionContent>
        <S.Image src={iconCep} />
        <S.TitleWork>Informe seu CEP</S.TitleWork>
        <S.Text>
          Informe seu CEP de localização, 
          os pet shops a lista aparacerá com 
          base na sua geolocalização
        </S.Text>
      </S.SectionContent>
      <S.SectionContent>
        <S.Image src={iconPetShop} />
        <S.TitleWork>Selecione o Pet Shop</S.TitleWork>
        <S.Text>
          Selecione um dos Pet Shop
          disponível na lista que atenda 
          na sua região
        </S.Text>
      </S.SectionContent>
      <S.SectionContent>
        <S.Image src={iconProduct} />
        <S.TitleWork>Selecione os produtos</S.TitleWork>
        <S.Text>
          Escolhas os produtos que você
          irá compra, depois adicone
          ao carrinho de compras
        </S.Text>
      </S.SectionContent>
      <S.SectionContent>
        <S.Image src={iconPaymente} />
        <S.TitleWork>Pague na entrega ou online</S.TitleWork>
        <S.Text>
          Escolha a forma de pagamento
          de sua preferência. Realizando 
          pagamento online ou na entrega
        </S.Text>
      </S.SectionContent>
    </S.Section>
  );
}

export default SectionWork;
