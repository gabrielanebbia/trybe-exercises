#### Parte I - Criação de arquivos e diretórios

> Utilizando o terminal:

1. Crie um diretório chamado unix_tests e navegue até ele
```
mkdir unix_tests
cd unix_tests
```
1. Crie um arquivo de texto com o nome trybe.txt
```
touch trybe.txt
```
2. Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt
```
cp trybe.txt trybe_backup.txt
```
3. Renomeie o arquivo trybe.txt
```
mv trybe.txt outro_nome.txt
```   
4. Dentro de unix_tests , crie um novo diretório chamado backup
```
mkdir backup
```
5. Mova o arquivo trybe_backup.txt para o diretório backup
```
mv trybe_backup.txt backup
```
6. Dentro de unix_tests , crie um novo diretório chamado backup2
```
mkdir backup2
```
7. Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2
```
mv backup/trybe_backup.txt backup2
```
8.  Apague a pasta backup
```
rmdir backup
```
9.  Renomeie a pasta backup2 para backup
```
mv backup2 backup
```
10. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele
```
ls -l
```
11. Apague o diretório backup
```
rm -rd backup
```
12. Limpe o terminal
```
clear
```
> Para os exercícios 14 e 15, crie de forma manual, um arquivo de texto com o conteúdo abaixo, chamado skills.txt:
```
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```
13. Mostre na tela as 5 primeiras skills do arquivo skills.txt
```
head -n 5 skills.txt
```
14. Mostre na tela as 4 últimas skills do arquivo skills.txt
```
tail -n 4 skills.txt
```
15. Apague todos os arquivos que terminem em .txt
```
rm *.txt
```
