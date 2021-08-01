(async () => {
  const database = require("./db");
  const Produto = require("./produto");

  try {
    //Cria a tabela no banco de dados
    const creatTable = await database.sync();
    console.log(creatTable);

    //Adiciona um produto no banco de dados
    const produto = await Produto.create({
      nome: "Teclado",
      preco: 100,
      descricao: "Logitech",
    });
    console.log(produto);

    //Busca um produto no banco de dados
    const produto = await Produto.findAll();
    console.log(produto);

    //Edita um produto no banco de dados
    const produto = await Produto.findByPk(1);
    produto.nome = "Mouse Logitech";
    const resultSave = await produto.save();
    console.log(resultSave);

    //Deleta um produto no banco de dados
    Produto.destroy({ where: { id: 1 } });

    //Deleta um produto buscando o produto e passando a função destroy do próprio objeto retornado
    const produto = await Produto.findByPk(2);
    produto.destroy();

    //Tratamento de erros
  } catch (error) {
    console.log(error);
  }
})();
