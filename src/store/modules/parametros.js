export default {
    state: {
        quantidade: 0,
        preco: 0
    },
    mutations: {
        setQuantidade(state, produto) {
            state.quantidade = produto
        },
        setPreco(state, preco) {
            state.preco = preco
        }
    }
}