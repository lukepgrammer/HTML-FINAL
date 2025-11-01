// MENU HAMBURGUER
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      const isExpanded = navLinks.classList.contains("active");
      this.setAttribute("aria-expanded", isExpanded);
      this.setAttribute(
        "aria-label",
        isExpanded ? "Fechar menu" : "Abrir menu"
      );
    });
  }

  // FORMULÁRIO
  const btnCadastrar = document.getElementById("btnCadastrar");
  const btnLimpar = document.getElementById("btnLimpar");
  const form = document.getElementById("formCadastro");
  const messageBox = document.getElementById("messagebox");

  function mostrarMensagem(message, type) {
    if (messageBox) {
      messageBox.className = "";
      messageBox.classList.add("show", type);
      messageBox.innerHTML = `<span class="icon">${
        type === "success" ? "✅" : "❌"
      }</span> ${message}`;
      setTimeout(() => messageBox.classList.remove("show"), 3000);
    }
  }

  if (btnCadastrar) {
    btnCadastrar.addEventListener("click", function (e) {
      e.preventDefault();
      mostrarMensagem("Voluntário cadastrado!", "success");
      if (form) form.reset();
    });
  }

  if (btnLimpar) {
    btnLimpar.addEventListener("click", function (e) {
      e.preventDefault();
      if (form) form.reset();
      mostrarMensagem("Campos apagados!", "error");
    });
  }

  // BOTÃO TEMA - CORRIGIDO
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    const themes = ["light", "dark", "high-contrast"];
    const emojis = ["🌞", "🌙", "⚫"];

    let currentTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", currentTheme);

    const currentIndex = themes.indexOf(currentTheme);
    themeToggle.textContent = emojis[currentIndex];

    themeToggle.addEventListener("click", function () {
      const currentTheme = document.body.getAttribute("data-theme") || "light";
      let currentIndex = themes.indexOf(currentTheme);
      currentIndex = (currentIndex + 1) % themes.length;
      const newTheme = themes[currentIndex];

      document.body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      themeToggle.textContent = emojis[currentIndex];
    });
  }

  // PROJETOS DINÂMICOS
  const projetos = [
    {
      titulo: "Programa de Atividades Físicas",
      descricao:
        "Oferecemos aulas de exercícios físicos adaptados para idosos, promovendo a saúde cardiovascular, força muscular e flexibilidade.",
    },
    {
      titulo: "Oficinas de Nutrição",
      descricao:
        "Realizamos workshops sobre alimentação saudável, ensinando receitas nutritivas e práticas para melhorar a dieta dos idosos.",
    },
    {
      titulo: "Grupos de Apoio Emocional",
      descricao:
        "Criamos grupos de apoio onde os idosos podem compartilhar suas experiências, fortalecer vínculos sociais e receber suporte emocional.",
    },
    {
      titulo: "Atividades Culturais e Recreativas",
      descricao:
        "Organizamos eventos culturais, passeios e atividades recreativas para estimular a mente e promover a socialização entre os participantes.",
    },
    {
      titulo: "Palestras e Workshops Educativos",
      descricao:
        "Oferecemos palestras sobre temas relevantes para o envelhecimento, como saúde mental, prevenção de doenças e direitos dos idosos.",
    },
  ];

  const container = document.getElementById("projetos-grid");
  if (container) {
    container.innerHTML = projetos
      .map(
        (p) => `
            <article class="cartao-projeto">
                <h3 class="Cartão-subtitulo">${p.titulo}</h3>
                <p class="Cartão-texto">${p.descricao}</p>
            </article>
        `
      )
      .join("");
  }
});
