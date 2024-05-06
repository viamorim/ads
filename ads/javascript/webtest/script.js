//input
anoNascimento = parseInt(prompt("Informe o seu ano de nascimento"))
nome = prompt("Informe o seu nome")
salarioBase = parseFloat(prompt("Informe o salário base"))
gratificacao = parseFloat(prompt("Informe a gratificação"))
bonus = parseFloat(prompt("Informe o bônus"))
desconto = parseFloat(prompt("Informe o desconto"))

salarioLiquido = 0

//criar com 'if' variaval para pessoas com até 20 anos receberem +100 e pessoas com mais de 20 anos receberem +2000
adicional = 0

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
mensagem = "Sou " + nome + " e tenho " + idade + " anos"
salarioLiquido = salarioBase + gratificacao + bonus - desconto

//output
mensagem = "Sou " + nome + ", tenho " + idade + " anos e ganho R$" + salarioLiquido + adicional
alert(mensagem)