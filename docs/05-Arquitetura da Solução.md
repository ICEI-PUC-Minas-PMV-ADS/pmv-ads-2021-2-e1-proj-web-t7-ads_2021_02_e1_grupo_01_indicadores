# Arquitetura da Solução


Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura que se segue. 

<img src="/docs/img/arqsolucao.png"/>



A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Tarefas** - todas as seções de tarefas: a fazer, em progresso, revisão e feito.  
     - **Progresso** - progresso de cada tarefa.
     - **Produtividade** - produtividade ao longo das semanas e dos meses em relação às tarefas.  
 - **Zendesk Messaging API** - plataforma que permite o envio de mensagens dentro do site. 
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 


## Tecnologias Utilizadas

As tecnologias utilizadas foram: HTML, CSS e JavaScript. 
