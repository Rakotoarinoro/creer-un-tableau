//creer un tableau de 4 colonne, 1 indexof, 2 les nombre 1 à 4, 3 le nom,4 autres  noms 
let table = [1,2,3]
let list = [
    [1,"Pière" ,"Laurette"],
    [2,"Ahmed" ,"Percy"],
    [3,"Martin" ,"Ryzen"],
    [4,"Claude" ,"Josheph"],
]
console.table(list)//renvoie un tableau avec index et tous les listes

console.log(list[1][2]) // renvoi Percy le nombre 1 est l'indexof 
console.log(list[3][1]) //renvoi Claude le nombre 3 est l'indexof 
console.log(list[0]) // renvoi tous les lignes à l' indexof 0
console.log(list[2]) //renvoi tous les lignes à l' indexof 2