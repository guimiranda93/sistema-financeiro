const fotos = {
	escritorio:
		"https://s2.glbimg.com/g6GAnuVLj_V8ENA9lCL0v9FWT-Y=/0x0:4076x2712/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/M/O/LA1kPkRQCXLTt5DTXSjA/glenn-carstens-peters-npxxwgq33zq-unsplash.jpg",
	sala_reuniao:
		"https://www.citrix.com/content/citrix/pt-br/global-partners/microsoft/office-365/jcr:content/content-par/layout_tool/column-17389-par/image/image.img.480.medium.jpg/1593523137514.jpg",
	entrada: "imagens/entrada.webp",
	banheiro: "imagens/banheiro.jpeg",
};

const descricao = {
	escritorio: "Este é o meu escritório",
	sala_reuniao: "Esta é a sala de reunião da minha empresa",
	entrada: "Essa é a porta de entrada da minha empresa",
	banheiro: "Esse é o banheiro da minha empresa",
};

$(".lista-locais").click(function () {
	const local = $(this).attr("tipo");
	const imagem_local = fotos[local];
	const descricao_local = descricao[local];

	$("#imagem-local").attr("src", imagem_local);
	$("#link-download").attr("href", imagem_local);
	$("#descricao-local").text(descricao_local);
});

document
	.querySelectorAll(".lista-locais")
	.forEach((item) => item.addEventListener(mudarLocal(this)));

function mudarLocal(e) {
	const local = e.target.tipo;
	const imagem_local = fotos[local];
	const descricao_local = descricao[local];

	document.querySelector("#imagem-local").setAttribute("src", imagem_local);
	document.querySelector("#link-download").setAttribute("href", imagem_local);
	document.querySelector("#descricao-local").innerHTML(descricao_local);
}
