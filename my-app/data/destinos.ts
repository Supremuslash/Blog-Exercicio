export type Destino = {
  id: string;
  nome: string;
  imagem: string;
  imagemSecundaria?: string;
  descricao: string;
  local: string;
  destaque: string;
};

export const destinos: Destino[] = [
  {
    id: "Floripa",
    nome: "Florianópolis",
    imagem: "/images/florianopolis.jpg",
    imagemSecundaria: "/images/florianopolis2.jpg",
    descricao:
      "Praias famosas e muita cultura. Conheça a Lagoa da Conceição e passeios à beira-mar.",
    local: "Brasil",
    destaque: "Praias e paisagens icônicas",
  },
  {
    id: "Jeri",
    nome: "Jericoacoara",
    imagem: "/images/jeri.jpg",
    imagemSecundaria: "/images/jeri2.jpg",
    descricao:
      "Praias paradisíacas, dunas e uma cultura única. Conheça as dunas e as praias desertas.",
    local: "Brasil",
    destaque: "Praias e paisagens desérticas",
  },
  {
    id: "Minas",
    nome: "Minas Gerais",
    imagem: "/images/minas-gerais.jpg",
    imagemSecundaria: "/images/minas-gerais-2.jpg",
    descricao:
      "Cidade histórica com arquitetura colonial, gastronomia e muita história. Muitas festas e comidas.",
    local: "Brasil",
    destaque: "Cultura e história vibrante",
  },
  {
    id: "Paraiba",
    nome: "Paraíba",
    imagem: "/images/paraiba.jpg",
    imagemSecundaria: "/images/paraiba2.jpg",
    descricao:
      "Praias paradisíacas, dunas e muita natureza. Conheça as praias de João Pessoa e as dunas do Cabo de Santo Agostinho.",
    local: "Brasil",
    destaque: "Roteiro romântico no norte do país",
  },
];
