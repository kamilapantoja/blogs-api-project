# Projeto Blogs API

Neste projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog.<br>
A aplicação foi desenvolvida em Node.js usando o pacote Sequelize para fazer um CRUD de posts.

Regras utilizadas no desenvolvimento:

* Os endpoints devem estar conectados ao banco de dados seguindo os princípios do REST;

* Para fazer um post é necessário usuário e login, portanto foi trabalhada a relação entre 'user' e 'post'; 

* Foi feita a utilização de categorias para os posts, e para isto, foi trabalhada a relação de 'posts' para 'categories' e de 'categories' para 'posts'.
