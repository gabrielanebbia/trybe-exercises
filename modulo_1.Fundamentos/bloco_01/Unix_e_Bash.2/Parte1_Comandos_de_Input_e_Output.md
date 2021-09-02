#### Parte I - Comandos de Input e Output

1. Navegue até a pasta unix_tests
```
cd /home/gabriela/unix_tests
pwd
```   
2. Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha
```
touch skills2.txt
echo "Internet" >> skills2.txt
echo "Unix" >> skills2.txt
echo "Bash" >> skills2.txt
```
3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal
```
echo "HTML" >> skills2.txt
echo "CSS" >> skills2.txt
echo "JavaScript" >> skills2.txt
echo "React" >> skills2.txt
echo "SQL" >> skills2.txt
sort < skills2.txt
```
4. Conte quantas linhas tem o arquivo skills2.txt 
```
cat skills2.txt | wc -l
```
5. Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética
```
sort < skills2.txt | head -n 3 > top_skills.txt
```
6. Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha
```
echo "É melhor conquistar a si mesmo do que vencer mil batalhas. Buda" > phrases2.txt
echo "Aquele que não tem confiança nos outros, não lhes pode ganhar a confiança. Lao-Tsé" >> phrases2.txt
echo "Escolher o seu tempo é ganhar tempo. Francis Bacon" >> phrases2.txt
```
7. Conte o número de linhas que contêm as letras br
```
grep br phrases2.txt | wc -l
```
8. Conte o número de linhas que não contêm as letras br
```
grep -v br phrases2.txt | wc -l
```
9.  Adicione dois nomes de países ao final do arquivo phrases2.txt
```
echo "Brasil" >> phrases2.txt
echo "Polónia" >> phrases2.txt

```
10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt
```
cp countries.txt bunch_of_things.txt
cat phrases2.txt >> bunch_of_things.txt
```
11. Ordene o arquivo bunch_of_things.txt
```
sort bunch_of_things.txt -o bunch_of_things.txt
```
