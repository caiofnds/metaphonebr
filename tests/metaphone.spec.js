const metaphone = require('..');

describe('empresas', () => {
  test('PETROBRAS', () => {
    const expected = 'PTRBRS';
    const meta = metaphone('PETROBRAS');
    expect(meta).toEqual(expected);
  });
  test('VALE S/A', () => {
    const expected = 'VLS';
    const meta = metaphone('VALE S/A');
    expect(meta).toEqual(expected);
  });
  test('VIBRA ENERGIA (BR DISTR.)', () => {
    const expected = 'VBRENRJB2DSTR';
    const meta = metaphone('VIBRA ENERGIA (BR DISTR.)');
    expect(meta).toEqual(expected);
  });
  test('RAIZEN', () => {
    const expected = '2ZM';
    const meta = metaphone('RAIZEN');
    expect(meta).toEqual(expected);
  });
  test('IPIRANGA', () => {
    const expected = 'IPRNG';
    const meta = metaphone('IPIRANGA');
    expect(meta).toEqual(expected);
  });
  test('CARGILL', () => {
    const expected = 'KRJ';
    const meta = metaphone('CARGILL');
    expect(meta).toEqual(expected);
  });
  test('BRASKEM', () => {
    const expected = 'BRSKM';
    const meta = metaphone('BRASKEM');
    expect(meta).toEqual(expected);
  });
  test('BUNGE ALIMENTOS', () => {
    const expected = 'BNJALMNTS';
    const meta = metaphone('BUNGE ALIMENTOS');
    expect(meta).toEqual(expected);
  });
  test('ARCELORMITTAL BRASIL', () => {
    const expected = 'ARSLRMTBRZ';
    const meta = metaphone('ARCELORMITTAL BRASIL');
    expect(meta).toEqual(expected);
  });
  test('ATACADAO', () => {
    const expected = 'ATKD';
    const meta = metaphone('ATACADAO');
    expect(meta).toEqual(expected);
  });
  test('JBS', () => {
    const expected = 'JBS';
    const meta = metaphone('JBS');
    expect(meta).toEqual(expected);
  });
  test('SHELL', () => {
    const expected = 'X';
    const meta = metaphone('SHELL');
    expect(meta).toEqual(expected);
  });
  test('VIVO (TELEFONICA BRASIL)', () => {
    const expected = 'VVTLFNKBRZ';
    const meta = metaphone('VIVO (TELEFONICA BRASIL)');
    expect(meta).toEqual(expected);
  });
  test('BRF', () => {
    const expected = 'BRF';
    const meta = metaphone('BRF');
    expect(meta).toEqual(expected);
  });
  test('ASSAI ATACADISTA', () => {
    const expected = 'ASATKDST';
    const meta = metaphone('ASSAI ATACADISTA');
    expect(meta).toEqual(expected);
  });
  test('LOUIS DREYFUS BR', () => {
    const expected = 'LSDRFSB2';
    const meta = metaphone('LOUIS DREYFUS BR');
    expect(meta).toEqual(expected);
  });
  test('AMBEV', () => {
    const expected = 'AMBV';
    const meta = metaphone('AMBEV');
    expect(meta).toEqual(expected);
  });
  test('MAGAZINE LUIZA', () => {
    const expected = 'MGZNLZ';
    const meta = metaphone('MAGAZINE LUIZA');
    expect(meta).toEqual(expected);
  });
  test('VIA', () => {
    const expected = 'V';
    const meta = metaphone('VIA');
    expect(meta).toEqual(expected);
  });
  test('CLARO', () => {
    const expected = 'KLR';
    const meta = metaphone('CLARO');
    expect(meta).toEqual(expected);
  });
  test('USIMINAS', () => {
    const expected = 'UZMNS';
    const meta = metaphone('USIMINAS');
    expect(meta).toEqual(expected);
  });
  test('SUZANO', () => {
    const expected = 'SZN';
    const meta = metaphone('SUZANO');
    expect(meta).toEqual(expected);
  });
  test('PAO DE ACUCAR', () => {
    const expected = 'PDAKK2';
    const meta = metaphone('PAO DE ACUCAR');
    expect(meta).toEqual(expected);
  });
  test('CSN', () => {
    const expected = 'KSM';
    const meta = metaphone('CSN');
    expect(meta).toEqual(expected);
  });
  test('YARA BRASIL', () => {
    const expected = 'IRBRZ';
    const meta = metaphone('YARA BRASIL');
    expect(meta).toEqual(expected);
  });
  test('COAMO AGROINDUSTRIAL COOPERATIVA', () => {
    const expected = 'KMAGRNDSTRKPRTV';
    const meta = metaphone('COAMO AGROINDUSTRIAL COOPERATIVA');
    expect(meta).toEqual(expected);
  });
  test('RAIA DROGASIL', () => {
    const expected = '2DRGZ';
    const meta = metaphone('RAIA DROGASIL');
    expect(meta).toEqual(expected);
  });
  test('GERDAU COSIGUA', () => {
    const expected = 'JRDKZG';
    const meta = metaphone('GERDAU COSIGUA');
    expect(meta).toEqual(expected);
  });
  test('GAVILON DO BRASIL', () => {
    const expected = 'GVLMDBRZ';
    const meta = metaphone('GAVILON DO BRASIL');
    expect(meta).toEqual(expected);
  });
  test('CEMIG DISTRIBUICAO', () => {
    const expected = 'SMGDSTRBK';
    const meta = metaphone('CEMIG DISTRIBUICAO');
    expect(meta).toEqual(expected);
  });
  test('AMERICANAS', () => {
    const expected = 'AMRKNS';
    const meta = metaphone('AMERICANAS');
    expect(meta).toEqual(expected);
  });
  test('COPERSUCAR', () => {
    const expected = 'KPRSK2';
    const meta = metaphone('COPERSUCAR');
    expect(meta).toEqual(expected);
  });
  test('CORREIOS', () => {
    const expected = 'K2S';
    const meta = metaphone('CORREIOS');
    expect(meta).toEqual(expected);
  });
  test('TERNIUM BRASIL', () => {
    const expected = 'TRNMBRZ';
    const meta = metaphone('TERNIUM BRASIL');
    expect(meta).toEqual(expected);
  });
  test('ELETROPAULO (ENEL SP)', () => {
    const expected = 'ELTRPLNSP';
    const meta = metaphone('ELETROPAULO (ENEL SP)');
    expect(meta).toEqual(expected);
  });
  test('COFCO INTERNATIONAL', () => {
    const expected = 'KFKINTRNTN';
    const meta = metaphone('COFCO INTERNATIONAL');
    expect(meta).toEqual(expected);
  });
  test('BASF', () => {
    const expected = 'BSF';
    const meta = metaphone('BASF');
    expect(meta).toEqual(expected);
  });
  test('SABESP', () => {
    const expected = 'SBSP';
    const meta = metaphone('SABESP');
    expect(meta).toEqual(expected);
  });
  test('CSN MINERACAO S/A', () => {
    const expected = 'KSMMNRKS';
    const meta = metaphone('CSN MINERACAO S/A');
    expect(meta).toEqual(expected);
  });
  test('TIM', () => {
    const expected = 'TM';
    const meta = metaphone('TIM');
    expect(meta).toEqual(expected);
  });
  test('AURORA COOP', () => {
    const expected = 'ARRKP';
    const meta = metaphone('AURORA COOP');
    expect(meta).toEqual(expected);
  });
  test('C.VALE - COOPERATIVA AGROINDUSTRIAL', () => {
    const expected = 'KVLKPRTVAGRNDSTR';
    const meta = metaphone('C.VALE - COOPERATIVA AGROINDUSTRIAL');
    expect(meta).toEqual(expected);
  });
  test('LAR COOPERATIVA AGROINDUSTRIAL', () => {
    const expected = 'L2KPRTVAGRNDSTR';
    const meta = metaphone('LAR COOPERATIVA AGROINDUSTRIAL');
    expect(meta).toEqual(expected);
  });
  test('GERDAU ACOMINAS', () => {
    const expected = 'JRDAKMNS';
    const meta = metaphone('GERDAU ACOMINAS');
    expect(meta).toEqual(expected);
  });
  test('KLABIN', () => {
    const expected = 'KLBM';
    const meta = metaphone('KLABIN');
    expect(meta).toEqual(expected);
  });
  test('CPFL PAULISTA', () => {
    const expected = 'KPFPLST';
    const meta = metaphone('CPFL PAULISTA');
    expect(meta).toEqual(expected);
  });
  test('COPEL-DIS', () => {
    const expected = 'KPDS';
    const meta = metaphone('COPEL-DIS');
    expect(meta).toEqual(expected);
  });
  test('COPERSUCAR', () => {
    const expected = 'KPRSK2';
    const meta = metaphone('COPERSUCAR');
    expect(meta).toEqual(expected);
  });
  test('SPAL (COCA-COLA)', () => {
    const expected = 'SPKKKL';
    const meta = metaphone('SPAL (COCA-COLA)');
    expect(meta).toEqual(expected);
  });
  test('MARFRIG', () => {
    const expected = 'MRFRG';
    const meta = metaphone('MARFRIG');
    expect(meta).toEqual(expected);
  });
  test('PETROGAL BRASIL', () => {
    const expected = 'PTRGBRZ';
    const meta = metaphone('PETROGAL BRASIL');
    expect(meta).toEqual(expected);
  });
  test('COELBA', () => {
    const expected = 'KB';
    const meta = metaphone('COELBA');
    expect(meta).toEqual(expected);
  });
  test('REDE GLOBO', () => {
    const expected = '2DGLB';
    const meta = metaphone('REDE GLOBO');
    expect(meta).toEqual(expected);
  });
  test('ALE COMBUSTIVEIS', () => {
    const expected = 'ALKMBSTVS';
    const meta = metaphone('ALE COMBUSTIVEIS');
    expect(meta).toEqual(expected);
  });
  test('LIGHT - SESA', () => {
    const expected = 'LGJTSZ';
    const meta = metaphone('LIGHT - SESA');
    expect(meta).toEqual(expected);
  });
  test('CRBS (AMBEV)', () => {
    const expected = 'KRBSMBV';
    const meta = metaphone('CRBS (AMBEV)');
    expect(meta).toEqual(expected);
  });
  test('MINERVA FOODS', () => {
    const expected = 'MNRVFDS';
    const meta = metaphone('MINERVA FOODS');
    expect(meta).toEqual(expected);
  });
  test('COMPANHIA DE GAS DE SAO PAULO - COMGAS', () => {
    const expected = 'KMP3DGSDSPLKMGS';
    const meta = metaphone('COMPANHIA DE GAS DE SAO PAULO - COMGAS');
    expect(meta).toEqual(expected);
  });
  test('COMPANHIA BRASILEIRA DE METALURGIA E MINERACAO (CBMM)', () => {
    const expected = 'KMP3BRZLRDMTLRJEMNRKKBM';
    const meta = metaphone('COMPANHIA BRASILEIRA DE METALURGIA E MINERACAO (CBMM)');
    expect(meta).toEqual(expected);
  });
  test('FURNAS CENTRAIS ELETRICAS S/A', () => {
    const expected = 'FRNSSNTRSELTRKSS';
    const meta = metaphone('FURNAS CENTRAIS ELETRICAS S/A');
    expect(meta).toEqual(expected);
  });
  test('REFMAT', () => {
    const expected = '2FMT';
    const meta = metaphone('REFMAT');
    expect(meta).toEqual(expected);
  });
  test('CELESC DISTRIBUICAO', () => {
    const expected = 'SLSDSTRBK';
    const meta = metaphone('CELESC DISTRIBUICAO');
    expect(meta).toEqual(expected);
  });
  test('RENAULT AUTOMOVEIS', () => {
    const expected = '2NTATMVS';
    const meta = metaphone('RENAULT AUTOMOVEIS');
    expect(meta).toEqual(expected);
  });
  test('BTG PACTUAL COMMODITIES', () => {
    const expected = 'BTGPKTKMDTS';
    const meta = metaphone('BTG PACTUAL COMMODITIES');
    expect(meta).toEqual(expected);
  });
  test('LATAM AIRLINES BRASIL', () => {
    const expected = 'LTMARLNSBRZ';
    const meta = metaphone('LATAM AIRLINES BRASIL');
    expect(meta).toEqual(expected);
  });
  test('RGE SUL', () => {
    const expected = '2JS';
    const meta = metaphone('RGE SUL');
    expect(meta).toEqual(expected);
  });
  test('REDE D\'OR SAO LUIZ - AF', () => {
    const expected = '2DD2SLSAF';
    const meta = metaphone('REDE D\'OR SAO LUIZ - AF');
    expect(meta).toEqual(expected);
  });
  test('COMIGO', () => {
    const expected = 'KMG';
    const meta = metaphone('COMIGO');
    expect(meta).toEqual(expected);
  });
  test('AZUL LINHAS AEREAS', () => {
    const expected = 'AZL3SARS';
    const meta = metaphone('AZUL LINHAS AEREAS');
    expect(meta).toEqual(expected);
  });
  test('CELG D', () => {
    const expected = 'SGD';
    const meta = metaphone('CELG D');
    expect(meta).toEqual(expected);
  });
  test('RAIZEN ENERGIA', () => {
    const expected = '2ZMENRJ';
    const meta = metaphone('RAIZEN ENERGIA');
    expect(meta).toEqual(expected);
  });
  test('HAVAN', () => {
    const expected = 'AVM';
    const meta = metaphone('HAVAN');
    expect(meta).toEqual(expected);
  });
  test('BLUEWAY TRADING', () => {
    const expected = 'BLVTRDNG';
    const meta = metaphone('BLUEWAY TRADING');
    expect(meta).toEqual(expected);
  });
  test('ITAIPU', () => {
    const expected = 'ITP';
    const meta = metaphone('ITAIPU');
    expect(meta).toEqual(expected);
  });
  test('B3 S/A', () => {
    const expected = 'BS';
    const meta = metaphone('B3 S/A');
    expect(meta).toEqual(expected);
  });
  test('WHIRLPOOL', () => {
    const expected = 'RP';
    const meta = metaphone('WHIRLPOOL');
    expect(meta).toEqual(expected);
  });
  test('CENTRAIS ELETRICAS NORTE BRASIL S/A - ELETRONORTE', () => {
    const expected = 'SNTRSELTRKSNRTBRZSELTRNRT';
    const meta = metaphone('CENTRAIS ELETRICAS NORTE BRASIL S/A - ELETRONORTE');
    expect(meta).toEqual(expected);
  });
  test('LOCALIZA RENT A CAR', () => {
    const expected = 'LKLZ2NTAK2';
    const meta = metaphone('LOCALIZA RENT A CAR');
    expect(meta).toEqual(expected);
  });
  test('PETROBRAS TRANSPORTE S/A - TRANSPETRO', () => {
    const expected = 'PTRBRSTRNSPRTSTRNSPTR';
    const meta = metaphone('PETROBRAS TRANSPORTE S/A - TRANSPETRO');
    expect(meta).toEqual(expected);
  });
  test('BIANCHINI', () => {
    const expected = 'BNXN';
    const meta = metaphone('BIANCHINI');
    expect(meta).toEqual(expected);
  });
  test('REPSOL', () => {
    const expected = '2PS';
    const meta = metaphone('REPSOL');
    expect(meta).toEqual(expected);
  });
  test('SOLUCOES USIMINAS', () => {
    const expected = 'SLKSUZMNS';
    const meta = metaphone('SOLUCOES USIMINAS');
    expect(meta).toEqual(expected);
  });
  test('ELEKTRO REDES', () => {
    const expected = 'ELKTR2DS';
    const meta = metaphone('ELEKTRO REDES');
    expect(meta).toEqual(expected);
  });
  test('CELPE', () => {
    const expected = 'SP';
    const meta = metaphone('CELPE');
    expect(meta).toEqual(expected);
  });
  test('AMPLA ENERGIA', () => {
    const expected = 'AMPLENRJ';
    const meta = metaphone('AMPLA ENERGIA');
    expect(meta).toEqual(expected);
  });
  test('LOJAS RENNER', () => {
    const expected = 'LJS2N2';
    const meta = metaphone('LOJAS RENNER');
    expect(meta).toEqual(expected);
  });
  test('SALOBO', () => {
    const expected = 'SLB';
    const meta = metaphone('SALOBO');
    expect(meta).toEqual(expected);
  });
  test('CLARO NXT', () => {
    const expected = 'KLRNXT';
    const meta = metaphone('CLARO NXT');
    expect(meta).toEqual(expected);
  });
  test('BNDESPAR', () => {
    const expected = 'BNDSP2';
    const meta = metaphone('BNDESPAR');
    expect(meta).toEqual(expected);
  });
  test('COCAMAR', () => {
    const expected = 'KKM2';
    const meta = metaphone('COCAMAR');
    expect(meta).toEqual(expected);
  });
  test('CHESF', () => {
    const expected = 'XSF';
    const meta = metaphone('CHESF');
    expect(meta).toEqual(expected);
  });
  test('EQUATORIAL PARA', () => {
    const expected = 'EKTRPR';
    const meta = metaphone('EQUATORIAL PARA');
    expect(meta).toEqual(expected);
  });
  test('COELCE', () => {
    const expected = 'KS';
    const meta = metaphone('COELCE');
    expect(meta).toEqual(expected);
  });
  test('FUNDAÇÃO BUTANTAN', () => {
    const expected = 'FNDSBTNTM';
    const meta = metaphone('FUNDAÇÃO BUTANTAN');
    expect(meta).toEqual(expected);
  });
  test('SOTREQ', () => {
    const expected = 'STRK';
    const meta = metaphone('SOTREQ');
    expect(meta).toEqual(expected);
  });
  test('VOTORAN', () => {
    const expected = 'VTRM';
    const meta = metaphone('VOTORAN');
    expect(meta).toEqual(expected);
  });
  test('BSBIOS', () => {
    const expected = 'BSBS';
    const meta = metaphone('BSBIOS');
    expect(meta).toEqual(expected);
  });
  test('M. DIAS BRANCO', () => {
    const expected = 'MDSBRNK';
    const meta = metaphone('M. DIAS BRANCO');
    expect(meta).toEqual(expected);
  });
  test('APERAM', () => {
    const expected = 'APRM';
    const meta = metaphone('APERAM');
    expect(meta).toEqual(expected);
  });
  test('LIQUIGAS', () => {
    const expected = 'LKGS';
    const meta = metaphone('LIQUIGAS');
    expect(meta).toEqual(expected);
  });
});
describe('masculinos', () => {
  test('Miguel', () => {
    const expected = 'MG';
    const meta = metaphone('Miguel');
    expect(meta).toEqual(expected);
  });
  test('Arthur', () => {
    const expected = 'ART2';
    const meta = metaphone('Arthur');
    expect(meta).toEqual(expected);
  });
  test('Gael', () => {
    const expected = 'G';
    const meta = metaphone('Gael');
    expect(meta).toEqual(expected);
  });
  test('Théo', () => {
    const expected = 'T';
    const meta = metaphone('Théo');
    expect(meta).toEqual(expected);
  });
  test('Heitor', () => {
    const expected = 'ET2';
    const meta = metaphone('Heitor');
    expect(meta).toEqual(expected);
  });
  test('Ravi', () => {
    const expected = '2V';
    const meta = metaphone('Ravi');
    expect(meta).toEqual(expected);
  });
  test('Davi', () => {
    const expected = 'DV';
    const meta = metaphone('Davi');
    expect(meta).toEqual(expected);
  });
  test('Bernardo', () => {
    const expected = 'BRNRD';
    const meta = metaphone('Bernardo');
    expect(meta).toEqual(expected);
  });
  test('Noah', () => {
    const expected = 'N';
    const meta = metaphone('Noah');
    expect(meta).toEqual(expected);
  });
  test('Gabriel', () => {
    const expected = 'GBR';
    const meta = metaphone('Gabriel');
    expect(meta).toEqual(expected);
  });
  test('Samuel', () => {
    const expected = 'SM';
    const meta = metaphone('Samuel');
    expect(meta).toEqual(expected);
  });
  test('Pedro', () => {
    const expected = 'PDR';
    const meta = metaphone('Pedro');
    expect(meta).toEqual(expected);
  });
  test('Anthony', () => {
    const expected = 'ANTN';
    const meta = metaphone('Anthony');
    expect(meta).toEqual(expected);
  });
  test('Isaac', () => {
    const expected = 'IZK';
    const meta = metaphone('Isaac');
    expect(meta).toEqual(expected);
  });
  test('Benício', () => {
    const expected = 'BNS';
    const meta = metaphone('Benício');
    expect(meta).toEqual(expected);
  });
  test('Benjamin', () => {
    const expected = 'BNJMM';
    const meta = metaphone('Benjamin');
    expect(meta).toEqual(expected);
  });
  test('Matheus', () => {
    const expected = 'MTS';
    const meta = metaphone('Matheus');
    expect(meta).toEqual(expected);
  });
  test('Lucas', () => {
    const expected = 'LKS';
    const meta = metaphone('Lucas');
    expect(meta).toEqual(expected);
  });
  test('Joaquim', () => {
    const expected = 'JKM';
    const meta = metaphone('Joaquim');
    expect(meta).toEqual(expected);
  });
  test('Nicolas', () => {
    const expected = 'NKLS';
    const meta = metaphone('Nicolas');
    expect(meta).toEqual(expected);
  });
  test('Lucca', () => {
    const expected = 'LK';
    const meta = metaphone('Lucca');
    expect(meta).toEqual(expected);
  });
  test('Lorenzo', () => {
    const expected = 'LRNZ';
    const meta = metaphone('Lorenzo');
    expect(meta).toEqual(expected);
  });
  test('Henrique', () => {
    const expected = 'ENRK';
    const meta = metaphone('Henrique');
    expect(meta).toEqual(expected);
  });
  test('João Miguel', () => {
    const expected = 'JMG';
    const meta = metaphone('João Miguel');
    expect(meta).toEqual(expected);
  });
  test('Rafael', () => {
    const expected = '2F';
    const meta = metaphone('Rafael');
    expect(meta).toEqual(expected);
  });
  test('Henry', () => {
    const expected = 'ENR';
    const meta = metaphone('Henry');
    expect(meta).toEqual(expected);
  });
  test('Murilo', () => {
    const expected = 'MRL';
    const meta = metaphone('Murilo');
    expect(meta).toEqual(expected);
  });
  test('Levi', () => {
    const expected = 'LV';
    const meta = metaphone('Levi');
    expect(meta).toEqual(expected);
  });
  test('Guilherme', () => {
    const expected = 'G1RM';
    const meta = metaphone('Guilherme');
    expect(meta).toEqual(expected);
  });
  test('Vicente', () => {
    const expected = 'VSNT';
    const meta = metaphone('Vicente');
    expect(meta).toEqual(expected);
  });
  test('Felipe', () => {
    const expected = 'FLP';
    const meta = metaphone('Felipe');
    expect(meta).toEqual(expected);
  });
  test('Bryan', () => {
    const expected = 'BRM';
    const meta = metaphone('Bryan');
    expect(meta).toEqual(expected);
  });
  test('Matteo', () => {
    const expected = 'MT';
    const meta = metaphone('Matteo');
    expect(meta).toEqual(expected);
  });
  test('Bento', () => {
    const expected = 'BNT';
    const meta = metaphone('Bento');
    expect(meta).toEqual(expected);
  });
  test('João Pedro', () => {
    const expected = 'JPDR';
    const meta = metaphone('João Pedro');
    expect(meta).toEqual(expected);
  });
  test('Pietro', () => {
    const expected = 'PTR';
    const meta = metaphone('Pietro');
    expect(meta).toEqual(expected);
  });
  test('Leonardo', () => {
    const expected = 'LNRD';
    const meta = metaphone('Leonardo');
    expect(meta).toEqual(expected);
  });
  test('Daniel', () => {
    const expected = 'DN';
    const meta = metaphone('Daniel');
    expect(meta).toEqual(expected);
  });
  test('Gustavo', () => {
    const expected = 'GSTV';
    const meta = metaphone('Gustavo');
    expect(meta).toEqual(expected);
  });
  test('Pedro Henrique', () => {
    const expected = 'PDRENRK';
    const meta = metaphone('Pedro Henrique');
    expect(meta).toEqual(expected);
  });
  test('João Lucas', () => {
    const expected = 'JLKS';
    const meta = metaphone('João Lucas');
    expect(meta).toEqual(expected);
  });
  test('Emanuel', () => {
    const expected = 'EMN';
    const meta = metaphone('Emanuel');
    expect(meta).toEqual(expected);
  });
  test('João', () => {
    const expected = 'J';
    const meta = metaphone('João');
    expect(meta).toEqual(expected);
  });
  test('Caleb', () => {
    const expected = 'KLB';
    const meta = metaphone('Caleb');
    expect(meta).toEqual(expected);
  });
  test('Davi Lucca', () => {
    const expected = 'DVLK';
    const meta = metaphone('Davi Lucca');
    expect(meta).toEqual(expected);
  });
  test('Antônio', () => {
    const expected = 'ANTN';
    const meta = metaphone('Antônio');
    expect(meta).toEqual(expected);
  });
  test('Eduardo', () => {
    const expected = 'EDRD';
    const meta = metaphone('Eduardo');
    expect(meta).toEqual(expected);
  });
  test('Enrico', () => {
    const expected = 'ENRK';
    const meta = metaphone('Enrico');
    expect(meta).toEqual(expected);
  });
  test('Caio', () => {
    const expected = 'K';
    const meta = metaphone('Caio');
    expect(meta).toEqual(expected);
  });
  test('José', () => {
    const expected = 'JZ';
    const meta = metaphone('José');
    expect(meta).toEqual(expected);
  });
  test('Enzo Gabriel', () => {
    const expected = 'ENZGBR';
    const meta = metaphone('Enzo Gabriel');
    expect(meta).toEqual(expected);
  });
  test('Augusto', () => {
    const expected = 'AGST';
    const meta = metaphone('Augusto');
    expect(meta).toEqual(expected);
  });
  test('Mathias', () => {
    const expected = 'MTS';
    const meta = metaphone('Mathias');
    expect(meta).toEqual(expected);
  });
  test('Vitor', () => {
    const expected = 'VT2';
    const meta = metaphone('Vitor');
    expect(meta).toEqual(expected);
  });
  test('Enzo', () => {
    const expected = 'ENZ';
    const meta = metaphone('Enzo');
    expect(meta).toEqual(expected);
  });
  test('Cauã', () => {
    const expected = 'K';
    const meta = metaphone('Cauã');
    expect(meta).toEqual(expected);
  });
  test('Francisco', () => {
    const expected = 'FRNSSK';
    const meta = metaphone('Francisco');
    expect(meta).toEqual(expected);
  });
  test('Rael', () => {
    const expected = '2';
    const meta = metaphone('Rael');
    expect(meta).toEqual(expected);
  });
  test('João Guilherme', () => {
    const expected = 'JG1RM';
    const meta = metaphone('João Guilherme');
    expect(meta).toEqual(expected);
  });
  test('Thomas', () => {
    const expected = 'TMS';
    const meta = metaphone('Thomas');
    expect(meta).toEqual(expected);
  });
  test('Yuri', () => {
    const expected = 'IR';
    const meta = metaphone('Yuri');
    expect(meta).toEqual(expected);
  });
  test('Yan', () => {
    const expected = 'IM';
    const meta = metaphone('Yan');
    expect(meta).toEqual(expected);
  });
  test('Anthony Gabriel', () => {
    const expected = 'ANTNGBR';
    const meta = metaphone('Anthony Gabriel');
    expect(meta).toEqual(expected);
  });
  test('Oliver', () => {
    const expected = 'OLV2';
    const meta = metaphone('Oliver');
    expect(meta).toEqual(expected);
  });
  test('Otávio', () => {
    const expected = 'OTV';
    const meta = metaphone('Otávio');
    expect(meta).toEqual(expected);
  });
  test('João Gabriel', () => {
    const expected = 'JGBR';
    const meta = metaphone('João Gabriel');
    expect(meta).toEqual(expected);
  });
  test('Nathan', () => {
    const expected = 'NTM';
    const meta = metaphone('Nathan');
    expect(meta).toEqual(expected);
  });
  test('Davi Lucas', () => {
    const expected = 'DVLKS';
    const meta = metaphone('Davi Lucas');
    expect(meta).toEqual(expected);
  });
  test('Vinícius', () => {
    const expected = 'VNSS';
    const meta = metaphone('Vinícius');
    expect(meta).toEqual(expected);
  });
  test('Theodoro', () => {
    const expected = 'TDR';
    const meta = metaphone('Theodoro');
    expect(meta).toEqual(expected);
  });
  test('Valentim', () => {
    const expected = 'VLNTM';
    const meta = metaphone('Valentim');
    expect(meta).toEqual(expected);
  });
  test('Ryan', () => {
    const expected = '2M';
    const meta = metaphone('Ryan');
    expect(meta).toEqual(expected);
  });
  test('Luiz Miguel', () => {
    const expected = 'LSMG';
    const meta = metaphone('Luiz Miguel');
    expect(meta).toEqual(expected);
  });
  test('Arthur Miguel', () => {
    const expected = 'ART2MG';
    const meta = metaphone('Arthur Miguel');
    expect(meta).toEqual(expected);
  });
  test('João Vitor', () => {
    const expected = 'JVT2';
    const meta = metaphone('João Vitor');
    expect(meta).toEqual(expected);
  });
  test('Léonovo', () => {
    const expected = 'LNV';
    const meta = metaphone('Léonovo');
    expect(meta).toEqual(expected);
  });
  test('Ravi Lucca', () => {
    const expected = '2VLK';
    const meta = metaphone('Ravi Lucca');
    expect(meta).toEqual(expected);
  });
  test('Apollo', () => {
    const expected = 'APL';
    const meta = metaphone('Apollo');
    expect(meta).toEqual(expected);
  });
  test('Thiago', () => {
    const expected = 'TG';
    const meta = metaphone('Thiago');
    expect(meta).toEqual(expected);
  });
  test('Tomás', () => {
    const expected = 'TMS';
    const meta = metaphone('Tomás');
    expect(meta).toEqual(expected);
  });
  test('Martin', () => {
    const expected = 'MRTM';
    const meta = metaphone('Martin');
    expect(meta).toEqual(expected);
  });
  test('José Miguel', () => {
    const expected = 'JZMG';
    const meta = metaphone('José Miguel');
    expect(meta).toEqual(expected);
  });
  test('Erick', () => {
    const expected = 'ERK';
    const meta = metaphone('Erick');
    expect(meta).toEqual(expected);
  });
  test('Liam', () => {
    const expected = 'LM';
    const meta = metaphone('Liam');
    expect(meta).toEqual(expected);
  });
  test('Josué', () => {
    const expected = 'JZ';
    const meta = metaphone('Josué');
    expect(meta).toEqual(expected);
  });
  test('Luan', () => {
    const expected = 'LM';
    const meta = metaphone('Luan');
    expect(meta).toEqual(expected);
  });
  test('Asafe', () => {
    const expected = 'AZF';
    const meta = metaphone('Asafe');
    expect(meta).toEqual(expected);
  });
  test('Raul', () => {
    const expected = '2';
    const meta = metaphone('Raul');
    expect(meta).toEqual(expected);
  });
  test('José Pedro', () => {
    const expected = 'JZPDR';
    const meta = metaphone('José Pedro');
    expect(meta).toEqual(expected);
  });
  test('Dominic', () => {
    const expected = 'DMNK';
    const meta = metaphone('Dominic');
    expect(meta).toEqual(expected);
  });
  test('Kauê', () => {
    const expected = 'K';
    const meta = metaphone('Kauê');
    expect(meta).toEqual(expected);
  });
  test('Kalel', () => {
    const expected = 'KL';
    const meta = metaphone('Kalel');
    expect(meta).toEqual(expected);
  });
  test('Luiz Henrique', () => {
    const expected = 'LSENRK';
    const meta = metaphone('Luiz Henrique');
    expect(meta).toEqual(expected);
  });
  test('Dom', () => {
    const expected = 'DM';
    const meta = metaphone('Dom');
    expect(meta).toEqual(expected);
  });
  test('Davi Miguel', () => {
    const expected = 'DVMG';
    const meta = metaphone('Davi Miguel');
    expect(meta).toEqual(expected);
  });
  test('Estevão', () => {
    const expected = 'ESTV';
    const meta = metaphone('Estevão');
    expect(meta).toEqual(expected);
  });
  test('Breno', () => {
    const expected = 'BRN';
    const meta = metaphone('Breno');
    expect(meta).toEqual(expected);
  });
  test('Davi Luiz', () => {
    const expected = 'DVLS';
    const meta = metaphone('Davi Luiz');
    expect(meta).toEqual(expected);
  });
  test('Thales', () => {
    const expected = 'TLS';
    const meta = metaphone('Thales');
    expect(meta).toEqual(expected);
  });
  test('Israel', () => {
    const expected = 'ISR';
    const meta = metaphone('Israel');
    expect(meta).toEqual(expected);
  });
});
describe('femininos', () => {
  test('Helena', () => {
    const expected = 'ELN';
    const meta = metaphone('Helena');
    expect(meta).toEqual(expected);
  });
  test('Alice', () => {
    const expected = 'ALS';
    const meta = metaphone('Alice');
    expect(meta).toEqual(expected);
  });
  test('Laura', () => {
    const expected = 'LR';
    const meta = metaphone('Laura');
    expect(meta).toEqual(expected);
  });
  test('Maria Alice', () => {
    const expected = 'MRALS';
    const meta = metaphone('Maria Alice');
    expect(meta).toEqual(expected);
  });
  test('Sophia', () => {
    const expected = 'SF';
    const meta = metaphone('Sophia');
    expect(meta).toEqual(expected);
  });
  test('Manuela', () => {
    const expected = 'MNL';
    const meta = metaphone('Manuela');
    expect(meta).toEqual(expected);
  });
  test('Maitê', () => {
    const expected = 'MT';
    const meta = metaphone('Maitê');
    expect(meta).toEqual(expected);
  });
  test('Liz', () => {
    const expected = 'LS';
    const meta = metaphone('Liz');
    expect(meta).toEqual(expected);
  });
  test('Cecília', () => {
    const expected = 'SSL';
    const meta = metaphone('Cecília');
    expect(meta).toEqual(expected);
  });
  test('Isabella', () => {
    const expected = 'IZBL';
    const meta = metaphone('Isabella');
    expect(meta).toEqual(expected);
  });
  test('Luísa', () => {
    const expected = 'LZ';
    const meta = metaphone('Luísa');
    expect(meta).toEqual(expected);
  });
  test('Eloá', () => {
    const expected = 'EL';
    const meta = metaphone('Eloá');
    expect(meta).toEqual(expected);
  });
  test('Heloísa', () => {
    const expected = 'ELZ';
    const meta = metaphone('Heloísa');
    expect(meta).toEqual(expected);
  });
  test('Júlia', () => {
    const expected = 'JL';
    const meta = metaphone('Júlia');
    expect(meta).toEqual(expected);
  });
  test('Ayla', () => {
    const expected = 'AL';
    const meta = metaphone('Ayla');
    expect(meta).toEqual(expected);
  });
  test('Maria Luísa', () => {
    const expected = 'MRLZ';
    const meta = metaphone('Maria Luísa');
    expect(meta).toEqual(expected);
  });
  test('Isis', () => {
    const expected = 'IZS';
    const meta = metaphone('Isis');
    expect(meta).toEqual(expected);
  });
  test('Elisa', () => {
    const expected = 'ELZ';
    const meta = metaphone('Elisa');
    expect(meta).toEqual(expected);
  });
  test('Antonella', () => {
    const expected = 'ANTNL';
    const meta = metaphone('Antonella');
    expect(meta).toEqual(expected);
  });
  test('Valentina', () => {
    const expected = 'VLNTN';
    const meta = metaphone('Valentina');
    expect(meta).toEqual(expected);
  });
  test('Maya', () => {
    const expected = 'M';
    const meta = metaphone('Maya');
    expect(meta).toEqual(expected);
  });
  test('Maria Júlia', () => {
    const expected = 'MRJL';
    const meta = metaphone('Maria Júlia');
    expect(meta).toEqual(expected);
  });
  test('Aurora', () => {
    const expected = 'ARR';
    const meta = metaphone('Aurora');
    expect(meta).toEqual(expected);
  });
  test('Lara', () => {
    const expected = 'LR';
    const meta = metaphone('Lara');
    expect(meta).toEqual(expected);
  });
  test('Maria Clara', () => {
    const expected = 'MRKLR';
    const meta = metaphone('Maria Clara');
    expect(meta).toEqual(expected);
  });
  test('Lívia', () => {
    const expected = 'LV';
    const meta = metaphone('Lívia');
    expect(meta).toEqual(expected);
  });
  test('Esther', () => {
    const expected = 'EST2';
    const meta = metaphone('Esther');
    expect(meta).toEqual(expected);
  });
  test('Giovanna', () => {
    const expected = 'JVN';
    const meta = metaphone('Giovanna');
    expect(meta).toEqual(expected);
  });
  test('Sarah', () => {
    const expected = 'SR';
    const meta = metaphone('Sarah');
    expect(meta).toEqual(expected);
  });
  test('Maria Cecília', () => {
    const expected = 'MRSSL';
    const meta = metaphone('Maria Cecília');
    expect(meta).toEqual(expected);
  });
  test('Lorena', () => {
    const expected = 'LRN';
    const meta = metaphone('Lorena');
    expect(meta).toEqual(expected);
  });
  test('Beatriz', () => {
    const expected = 'BTRS';
    const meta = metaphone('Beatriz');
    expect(meta).toEqual(expected);
  });
  test('Rebeca', () => {
    const expected = '2BK';
    const meta = metaphone('Rebeca');
    expect(meta).toEqual(expected);
  });
  test('Luna', () => {
    const expected = 'LN';
    const meta = metaphone('Luna');
    expect(meta).toEqual(expected);
  });
  test('Olívia', () => {
    const expected = 'OLV';
    const meta = metaphone('Olívia');
    expect(meta).toEqual(expected);
  });
  test('Maria Helena', () => {
    const expected = 'MRELN';
    const meta = metaphone('Maria Helena');
    expect(meta).toEqual(expected);
  });
  test('Mariana', () => {
    const expected = 'MRN';
    const meta = metaphone('Mariana');
    expect(meta).toEqual(expected);
  });
  test('Isadora', () => {
    const expected = 'IZDR';
    const meta = metaphone('Isadora');
    expect(meta).toEqual(expected);
  });
  test('Melissa', () => {
    const expected = 'MLS';
    const meta = metaphone('Melissa');
    expect(meta).toEqual(expected);
  });
  test('Maria', () => {
    const expected = 'MR';
    const meta = metaphone('Maria');
    expect(meta).toEqual(expected);
  });
  test('Catarina', () => {
    const expected = 'KTRN';
    const meta = metaphone('Catarina');
    expect(meta).toEqual(expected);
  });
  test('Lavínia', () => {
    const expected = 'LVN';
    const meta = metaphone('Lavínia');
    expect(meta).toEqual(expected);
  });
  test('Alícia', () => {
    const expected = 'ALS';
    const meta = metaphone('Alícia');
    expect(meta).toEqual(expected);
  });
  test('Maria Eduarda', () => {
    const expected = 'MREDRD';
    const meta = metaphone('Maria Eduarda');
    expect(meta).toEqual(expected);
  });
  test('Agatha', () => {
    const expected = 'AGT';
    const meta = metaphone('Agatha');
    expect(meta).toEqual(expected);
  });
  test('Ana Liz', () => {
    const expected = 'ANLS';
    const meta = metaphone('Ana Liz');
    expect(meta).toEqual(expected);
  });
  test('Yasmin', () => {
    const expected = 'ISMM';
    const meta = metaphone('Yasmin');
    expect(meta).toEqual(expected);
  });
  test('Emanuelly', () => {
    const expected = 'EMNL';
    const meta = metaphone('Emanuelly');
    expect(meta).toEqual(expected);
  });
  test('Ana Clara', () => {
    const expected = 'ANKLR';
    const meta = metaphone('Ana Clara');
    expect(meta).toEqual(expected);
  });
  test('Clara', () => {
    const expected = 'KLR';
    const meta = metaphone('Clara');
    expect(meta).toEqual(expected);
  });
  test('Ana Júlia', () => {
    const expected = 'ANJL';
    const meta = metaphone('Ana Júlia');
    expect(meta).toEqual(expected);
  });
  test('Marina', () => {
    const expected = 'MRN';
    const meta = metaphone('Marina');
    expect(meta).toEqual(expected);
  });
  test('Stella', () => {
    const expected = 'STL';
    const meta = metaphone('Stella');
    expect(meta).toEqual(expected);
  });
  test('Jade', () => {
    const expected = 'JD';
    const meta = metaphone('Jade');
    expect(meta).toEqual(expected);
  });
  test('Maria Liz', () => {
    const expected = 'MRLS';
    const meta = metaphone('Maria Liz');
    expect(meta).toEqual(expected);
  });
  test('Ana Laura', () => {
    const expected = 'ANLR';
    const meta = metaphone('Ana Laura');
    expect(meta).toEqual(expected);
  });
  test('Maria Isis', () => {
    const expected = 'MRIZS';
    const meta = metaphone('Maria Isis');
    expect(meta).toEqual(expected);
  });
  test('Ana Luísa', () => {
    const expected = 'ANLZ';
    const meta = metaphone('Ana Luísa');
    expect(meta).toEqual(expected);
  });
  test('Gabriela', () => {
    const expected = 'GBRL';
    const meta = metaphone('Gabriela');
    expect(meta).toEqual(expected);
  });
  test('Alana', () => {
    const expected = 'ALN';
    const meta = metaphone('Alana');
    expect(meta).toEqual(expected);
  });
  test('Rafaela', () => {
    const expected = '2FL';
    const meta = metaphone('Rafaela');
    expect(meta).toEqual(expected);
  });
  test('Vitória', () => {
    const expected = 'VTR';
    const meta = metaphone('Vitória');
    expect(meta).toEqual(expected);
  });
  test('Isabelly', () => {
    const expected = 'IZBL';
    const meta = metaphone('Isabelly');
    expect(meta).toEqual(expected);
  });
  test('Bella', () => {
    const expected = 'BL';
    const meta = metaphone('Bella');
    expect(meta).toEqual(expected);
  });
  test('Milena', () => {
    const expected = 'MLN';
    const meta = metaphone('Milena');
    expect(meta).toEqual(expected);
  });
  test('Clarice', () => {
    const expected = 'KLRS';
    const meta = metaphone('Clarice');
    expect(meta).toEqual(expected);
  });
  test('Mirella', () => {
    const expected = 'MRL';
    const meta = metaphone('Mirella');
    expect(meta).toEqual(expected);
  });
  test('Ana', () => {
    const expected = 'AN';
    const meta = metaphone('Ana');
    expect(meta).toEqual(expected);
  });
  test('Emilly', () => {
    const expected = 'EML';
    const meta = metaphone('Emilly');
    expect(meta).toEqual(expected);
  });
  test('Betina', () => {
    const expected = 'BTN';
    const meta = metaphone('Betina');
    expect(meta).toEqual(expected);
  });
  test('Mariah', () => {
    const expected = 'MR';
    const meta = metaphone('Mariah');
    expect(meta).toEqual(expected);
  });
  test('Zoe', () => {
    const expected = 'Z';
    const meta = metaphone('Zoe');
    expect(meta).toEqual(expected);
  });
  test('Maria Vitória', () => {
    const expected = 'MRVTR';
    const meta = metaphone('Maria Vitória');
    expect(meta).toEqual(expected);
  });
  test('Nicole', () => {
    const expected = 'NKL';
    const meta = metaphone('Nicole');
    expect(meta).toEqual(expected);
  });
  test('Laís', () => {
    const expected = 'LS';
    const meta = metaphone('Laís');
    expect(meta).toEqual(expected);
  });
  test('Melina', () => {
    const expected = 'MLN';
    const meta = metaphone('Melina');
    expect(meta).toEqual(expected);
  });
  test('Bianca', () => {
    const expected = 'BNK';
    const meta = metaphone('Bianca');
    expect(meta).toEqual(expected);
  });
  test('Louise', () => {
    const expected = 'LZ';
    const meta = metaphone('Louise');
    expect(meta).toEqual(expected);
  });
  test('Ana Beatriz', () => {
    const expected = 'ANBTRS';
    const meta = metaphone('Ana Beatriz');
    expect(meta).toEqual(expected);
  });
  test('Heloíse', () => {
    const expected = 'ELZ';
    const meta = metaphone('Heloíse');
    expect(meta).toEqual(expected);
  });
  test('Malu', () => {
    const expected = 'ML';
    const meta = metaphone('Malu');
    expect(meta).toEqual(expected);
  });
  test('Melinda', () => {
    const expected = 'MLND';
    const meta = metaphone('Melinda');
    expect(meta).toEqual(expected);
  });
  test('Letícia', () => {
    const expected = 'LTS';
    const meta = metaphone('Letícia');
    expect(meta).toEqual(expected);
  });
  test('Maria Valentina', () => {
    const expected = 'MRVLNTN';
    const meta = metaphone('Maria Valentina');
    expect(meta).toEqual(expected);
  });
  test('Chloe', () => {
    const expected = 'XL';
    const meta = metaphone('Chloe');
    expect(meta).toEqual(expected);
  });
  test('Maria Elisa', () => {
    const expected = 'MRELZ';
    const meta = metaphone('Maria Elisa');
    expect(meta).toEqual(expected);
  });
  test('Maria Heloísa', () => {
    const expected = 'MRELZ';
    const meta = metaphone('Maria Heloísa');
    expect(meta).toEqual(expected);
  });
  test('Maria Laura', () => {
    const expected = 'MRLR';
    const meta = metaphone('Maria Laura');
    expect(meta).toEqual(expected);
  });
  test('Maria Fernanda', () => {
    const expected = 'MRFRNND';
    const meta = metaphone('Maria Fernanda');
    expect(meta).toEqual(expected);
  });
  test('Ana Cecília', () => {
    const expected = 'ANSSL';
    const meta = metaphone('Ana Cecília');
    expect(meta).toEqual(expected);
  });
  test('Hadassa', () => {
    const expected = 'ADS';
    const meta = metaphone('Hadassa');
    expect(meta).toEqual(expected);
  });
  test('Ana Vitória', () => {
    const expected = 'ANVTR';
    const meta = metaphone('Ana Vitória');
    expect(meta).toEqual(expected);
  });
  test('Diana', () => {
    const expected = 'DN';
    const meta = metaphone('Diana');
    expect(meta).toEqual(expected);
  });
  test('Ayla Sophia', () => {
    const expected = 'ALSF';
    const meta = metaphone('Ayla Sophia');
    expect(meta).toEqual(expected);
  });
  test('Eduarda', () => {
    const expected = 'EDRD';
    const meta = metaphone('Eduarda');
    expect(meta).toEqual(expected);
  });
  test('Ana Lívia', () => {
    const expected = 'ANLV';
    const meta = metaphone('Ana Lívia');
    expect(meta).toEqual(expected);
  });
  test('Isabel', () => {
    const expected = 'IZB';
    const meta = metaphone('Isabel');
    expect(meta).toEqual(expected);
  });
  test('Elis', () => {
    const expected = 'ELS';
    const meta = metaphone('Elis');
    expect(meta).toEqual(expected);
  });
  test('Pérola', () => {
    const expected = 'PRL';
    const meta = metaphone('Pérola');
    expect(meta).toEqual(expected);
  });
  test('Joana', () => {
    const expected = 'JN';
    const meta = metaphone('Joana');
    expect(meta).toEqual(expected);
  });
});
