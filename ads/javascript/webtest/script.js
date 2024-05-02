//input
anoNascimento = 2000
nome = "Victor"

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
mensagem = "Sou " + nome + " e tenho " + idade + " anos"

//output
alert(mensagem)