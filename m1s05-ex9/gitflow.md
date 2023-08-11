# Git Flow

O Git Flow é uma estratégia de fluxo de trabalho que é implementada com o objetivo de
controlar branches de repositórios e auxiliar na organização deles. O Git Flow é constituido
por duas branches principais, sendo elas a Develop e Master (ou Main), que são fixas e tem
como suporte outras três branches, a Feature, Release e Hotfix, estas são temporárias e só 
se mantêm até ser feito o merge com as branches principais. Então, o fluxo funciona de forma 
que a branch Master (ou Main) contenha o que for para produção, e a Develop serve como uma branch
para integrar recursos de diferentes branches. Sendo assim, temos as branches de suporte e recursos, as
Features são criadas a partir da Develop e servem para desenvolver novos recursos e funcionalidades, ao
concluir o desenvolvimento, é feito o merge da branch de volta a Develop; Releases, também criadas a
partir da Develop, tem o papel de ser a branch de testes, ajustes finais e preparação para um release (lançamento),
tendo concluído, é realizado o merge da branch em Develop e Master; Branches de Hotfix são criadas a partir da Master
e utilizadas para corrigir problemas críticos que estão na versão de produção, quando é feita a correção, o merge da 
branch é feito na Master e na Develop. 
