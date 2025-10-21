# 🚩 TA_EM_DIA

Projeto Front-End usando **Tailwind CSS** para estilização rápida e moderna.

---

## 📦 Estrutura de Pastas

ta_em_dia/
├── public/
│ └── style.css # Arquivo gerado do Tailwind
├── src/
│ ├── styles/
│ │ ├── input.css # Arquivo de entrada Tailwind
│ │ └── style.css # CSS custom se desejar
│ └── index.html # Arquivo principal HTML
├── package.json
├── tailwind.config.js
└── postcss.config.js

text

---

## 🚀 Como rodar o projeto

1. **Instale as dependências:**
npm install



2. **Inicie o Tailwind CSS em modo watch:**  
npx tailwindcss -i ./src/styles/input.css -o ./public/style.css --watch


Ou, se preferir, adicione ao seu `package.json`:
"scripts": {
"dev": "tailwindcss -i ./src/styles/input.css -o ./public/style.css --watch"
}


Então execute:
npm run dev




## 🎨 Como usar o Tailwind

Exemplo de uso no seu HTML:

<h1 class="text-3xl font-bold text-blue-600"> Tailwind funcionando! </h1> ```
Qualquer nova classe Tailwind usada será automaticamente processada e adicionada ao seu CSS.

🤝 Colabore
Sugestões, dúvidas ou melhorias são sempre bem-vindas! Sinta-se à vontade para abrir issues ou contribuir.

📚 Sobre Tailwind CSS
Acesse a documentação oficial do Tailwind CSS para dicas, plugins, temas e personalizações avançadas.

text
undefined