//constantes
const salario_ate_20 = 1000
const salario_acima_20 = 2000
const idade_limite = 20

//input
const anoNascimento = parseInt(prompt("Informe o seu ano de nascimento"))
const nome = prompt("Informe o seu nome")
const salarioBase = parseFloat(prompt("Informe o salário base"))
const gratificacao = parseFloat(prompt("Informe a gratificação"))
const bonus = parseFloat(prompt("Informe o bônus"))
const desconto = parseFloat(prompt("Informe o desconto"))

//criar com 'if' variaval para pessoas com até 20 anos receberem +1000 e pessoas com mais de 20 anos receberem +2000
adicional = 0

//processamento
const hoje = new Date()
const anoAtual = hoje.getFullYear()
const idade = anoAtual - anoNascimento

let adicional = salario_acima_20
if(idade <= idade_limite) {
	adicional = salario_ate_20
}

let salarioLiquido = salarioBase + gratificacao + bonus - desconto + adicional

//output
let mensagem = "Sou " + nome + ", tenho " + idade + " anos e ganho R$" + salarioLiquido
alert(mensagem)