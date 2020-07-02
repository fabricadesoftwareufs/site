---
title-produto: 'Knuth auxilia na Implantação do BI Acadêmico'
title-page: 'Knuth auxilia na Implantação do BI Acadêmico'
title: 'Knuth auxilia na Implantação do BI Acadêmico'
author: Felipe Passos
number: 7
categories: produtos software
layout: post
description: 'Com esta implementação em breve será possível analisar dados de todos os alunos da UFS como um grupo a fim de obter informações relevantes para tomada de decisão.'
permalink: /:categories/:title.html
---

<span class="image fit"> <img alt=""> ![curso-impressao-3d-2019](/site/images/post/knuth-bi-academico.png) </span>

O Knuth, no ano de 2019, com a ajuda dos bolsistas Felipe Passos, Marcos Soares e Victor Souza com idealização de André Britto e Marcos Dósea, no campus São Cristóvão, realizaram o início do desenvolvimento e planejamento do Data Warehouse da UFS. Para construção de qualquer DW é necessário seguir algumas etapas como extração, transformação e carregamento de dados, formação de esquema estrela e criação de cubo OLAP, para entender melhor sobre o que é um DW acesse este [link](https://canaltech.com.br/business-intelligence/conhecendo-a-arquitetura-de-data-warehouse-19266/).

O objetivo do trabalho é facilitar a leitura dos dados, em âmbitos gerais, de todos os alunos da instituição, de forma que, se faz possível a análise do conjunto de informações de cada um dos estudantes como um grupo, auxiliando os coordenadores e a reitoria na tomada de decisões que impactam diretamente os alunos. A partir desses dados é possível, por exemplo, saber quantos estudantes passaram na disciplina x, em relação aos que reprovaram no ano de 2017, ou qual é o departamento responsável pela maior taxa de reprovação.

Com a intenção de usar o esquema estrela e ETL foi aproveitado de uma pesquisa de TCC de Ramon Batista e Onezino Gabriel, TCC de Affonso de Oliveira e a dissertação de mestrado de Nathanael Oliveira Vasconcelos que tinham intuito de análise de dados da UFS e possuíam juntos esses metadados. Os bolsistas tendo como base essas três pesquisas implementaram o esquema estrela dentro do STI da UFS utilizando os dados reais para fazer essa análise.

Foi empregado inicialmente o software Pentaho para a análise dos dados, mas como ele acabava sendo um software muito complexo para um usuário qualquer, os responsáveis pelo projeto procuraram firmar parcerias com empresas que possuíssem uma plataforma de análise dados mais atrativos ao público geral, e daí se firmou uma parceria com a Microsoft para a utilização do Power BI para analisar dados de toda a UFS, que no momento está sob responsabilidade direta do NTI.