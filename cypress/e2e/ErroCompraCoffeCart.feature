#utf-8
#language: pt

Funcionalidade: Compra de cafés no Coffee Cart

  Cenario: Realizar compra de cafés com Email Inválido
    Dado que acesso o Coffee Cart
    E seleciono três cafés diferentes
    E aceito a oferta promocional
    E acesso o carrinho de compras
    E visualizo os valores corretos no carrinho 
    Quando removo um café do carrinho
    E clico no total para efetuar o pagamento
    E informo nome e email inválido para pagamento
    E seleciono em submit
    # Então devo ver a mensagem de pagamento realizado com sucesso
